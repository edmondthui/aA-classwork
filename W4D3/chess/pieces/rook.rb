require_relative 'piece'
require_relative 'slideable'

class Rook < Piece

    include Slideable
    # module code gets imported on this spot.
    # any methods that is re-defined within this class will overwrite the one
    # that is defined on the module.

    # move_dirs is a method that is meant to be used in moves method in module.
    # so, if the class does not implement move_dirs method, the one from the module will throw an error, reminding the developer to implement the method.

    def symbol
        '♜'.colorize(color)
    end

    protected

    def move_dirs
        return "horizontal"
    # return the directions in which a rook can move
    # a rook can move horizontally (across rows and columns)
    end

end