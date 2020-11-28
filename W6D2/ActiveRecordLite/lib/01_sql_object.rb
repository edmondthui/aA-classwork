require_relative 'db_connection'
require 'active_support/inflector'

# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    columns = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      LIMIT
        0
    SQL
    columns[0].map! { |ele| ele.to_sym } 
    @columns = columns[0]
  end

  def self.finalize!
    columns = self.columns
    columns.each do |column|
      define_method(column) do
        self.attributes[column]
      end

      define_method("#{column}=") do |value|
        self.attributes[column] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
    # ...
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    all = DBConnection.execute(<<-SQL)
      SELECT
        #{self.table_name}.*
      FROM
        #{self.table_name}
    SQL
    results = self.parse_all(all)
  end

  def self.parse_all(results)
    objects = []
    results.each do |result|
      objects << self.new(result)
    end
    objects
    # ...
  end

  def self.find(id)
    find = DBConnection.execute(<<-SQL, id)
      SELECT
        #{self.table_name}.*
      FROM
        #{self.table_name}
      WHERE
        id = ?
    SQL
    return nil if find.length == 0
    self.parse_all(find).first
  end

  def initialize(params = {})
    params.each do |k, v|
      raise "unknown attribute '#{k}'" if !self.class.columns.include?(k.to_sym)
      self.send("#{k}=", v)
    end
    # ...
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map { |column| self.send(column)}
  end

  def insert
    col_names = self.class.columns.drop(1)
    col_names = col_names.map { |col_name| col_name.to_s}
    cols = col_names.join(", ")
    question_marks = (["?"] * col_names.count).join(", ")
    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO
        #{self.class.table_name} (#{cols})
      VALUES
        (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    columns = self.class.columns.map { |column| "#{column} = ?" }.join(", ")
    p columns
    DBConnection.execute(<<-SQL, *attribute_values, id)
    UPDATE
      #{self.class.table_name}
    SET
      #{columns}
    WHERE
      #{self.class.table_name}.id = ?
    SQL
  end

  def save
    self.update if self.id
    self.insert
  end
end
