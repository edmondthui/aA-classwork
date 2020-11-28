# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
  SELECT
    countries.name
  FROM
    countries
  GROUP BY
    countries.name
  HAVING
    gdp > (
      SELECT
        gdp
      FROM
        countries
      WHERE
        continent = 'Europe'
        AND
        gdp is NOT NULL
      ORDER BY
        gdp desc
      LIMIT
        1
    )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    SELECT
      countries.continent, countries.name, countries.area
    FROM
      countries
    WHERE
      countries.area in (
        SELECT
          MAX(countries.area)
        FROM
          countries
        GROUP BY
          countries.continent
        ORDER BY
          MAX(countries.area) desc
      )
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
  SELECT
    c1.name, c1.continent
  FROM
    countries AS c1
  WHERE
    c1.population > 3 * (
      SELECT
        MAX(countries.population)
      FROM
        countries
      WHERE
        countries.continent = c1.continent
        AND
        countries.name != c1.name
    )
  SQL
end
