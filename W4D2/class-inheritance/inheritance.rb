require "byebug"

class Employee

    attr_reader :salary, :boss, :name, :title

    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        self.boss = boss
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end

    def boss=(boss)
        @boss = boss
        boss.add_employees(self) if !boss.nil?
    end

end

class Manager < Employee

    attr_reader :employees

    def initialize(name, title, salary, boss = nil)
        super
        @employees = []
    end

    def add_employees(sub_employee)
        employees << sub_employee
    end

    def bonus(multiplier)
        sum = 0
        @employees.each do |employee|
            if employee.is_a?(Manager)
                sum += ( employee.bonus(multiplier) / multiplier ) + employee.salary
            else
                sum += employee.salary
            end
        end
        bonus = sum * multiplier
    end
end


ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000

# Name	  Salary	    Title	    Boss
# Ned	  \$1,000,000	Founder	    nil
# Darren  \$78,000	    TA Manager	Ned
# Shawna  \$12,000	    TA	        Darren
# David	  \$10,000	    TA	        Darren