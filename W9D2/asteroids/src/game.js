const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const asteroids = [];
let all_objects = [];

window.Game = function (DIM_X, DIM_Y) {
    this.DIM_X = DIM_X,
    this.DIM_Y = DIM_Y
    this.ship = new Ship(this);
}

Game.NUM_ASTEROIDS = 20; 
Game.prototype.addAsteroids = function() {
    for(let i =0 ; i < Game.NUM_ASTEROIDS; i ++) {
        let asteroid = new Asteroid(this, this.randomPosition());
        asteroids.push(asteroid);
    }
    this.allObjects();
    debugger;

}

Game.prototype.allObjects = function() {
    all_objects = asteroids.concat(this.ship);

}


Game.prototype.randomPosition = function() {
    return [(Math.random() * this.DIM_X), (Math.random() * this.DIM_Y)];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    // debugger;
    for(let i =0 ; i < all_objects.length; i++){
        // debugger;
        all_objects[i].draw(ctx)
        // debugger;
    };
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < all_objects.length; i++) {
        all_objects[i].move();
    };
}

Game.prototype.wrap = function (pos) {
    let x = pos[0];
    let y = pos[1];
    if (x > this.DIM_X){
        return [0, y];
    }
    if (y > this.DIM_Y){
        return [x, 0];
    }
    if (x < 0){
        return [this.DIM_X, y];
    }
    if (y < 0){
        return [x, this.DIM_Y];
    }
    return pos;
}

Game.prototype.checkCollisions = function(){
    // let firstAst;
    // let secondAst;

    for(let i = 0 ; i< all_objects.length - 1; i++) {
        for (let j = i+1; j < all_objects.length; j++) {
            if (all_objects[i].isCollidedWith(all_objects[j])) {
                // alert("COLLISION");
                // this.remove(i);
                // this.remove(j);
                all_objects[i].collideWith(all_objects[j]);

            }
        }
    }
    // this.remove(firstAst);
    // this.remove(secondAst);
    
}

Game.prototype.step = function(){
    this.checkCollisions();
    this.moveObjects();
}

Game.prototype.remove = function(remove_asteroid){
    let remove_index = all_objects.indexOf(remove_asteroid);
    all_objects.splice(remove_index, 1);
}

module.exports = Game;