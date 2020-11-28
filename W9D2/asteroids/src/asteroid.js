const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Asteroid (game, pos, vel = Utils.randomVec(20), radius = 25, color = "gray") {
    // debugger;
    MovingObject.call(this, game, pos, vel, radius, color);
    // debugger;
}

Utils.inherits(Asteroid,MovingObject);
module.exports = Asteroid;
