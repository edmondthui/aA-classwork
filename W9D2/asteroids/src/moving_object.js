// const Game = require("./game.js");

function MovingObject (game, pos, vel, radius, color){
    this.game = game;
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

MovingObject.prototype.draw =  function(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius,0, 2 * Math.PI );
    ctx.fill(); //https://www.w3schools.com/tags/canvas_fill.asp
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap.call(this.game, this.pos);

}
// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// A vector has a norm, a.k.a. magnitude or length. The norm of a velocity
//  vector is a speed. If obj.vel = [3, 4] (3 horizontal pixels and 4 vertical 
// pixels per unit time) then the overall speed is 5 pixels per unit time. 
// You can easily calculate the norm of a vector using your distance function:
// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

MovingObject.prototype.isCollidedWith = function(otherObject) {
    // let origin1 = this.radius;
    let dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    return ((this.radius+otherObject.radius) > dist);
}

MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(this);
    this.game.remove(otherObject);
}

module.exports = MovingObject;