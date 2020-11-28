const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Ship (game, pos, vel = [1,1], radius = 25, color = "red") {
    // debugger;
    MovingObject.call(this, game, pos, vel, radius, color);
    this.pos = game.randomPosition();
    // debugger;
}

Utils.inherits(Ship, MovingObject);
module.exports = Ship;
