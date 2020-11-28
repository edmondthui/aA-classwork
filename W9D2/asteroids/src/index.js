console.log("Webpack is working!");
// const MovingObject = require("./moving_object.js");
// const Asteroid = require('./asteroid.js');
const GameView = require('./game_view.js');
const Game = require('./game.js');

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('game-canvas')
    // canvas.width = 1600;
    // canvas.height = 900;
    canvas.width = window.innerWidth *.98;
    canvas.height = window.innerHeight *.98;
    const ctx = canvas.getContext('2d');
    // let ast1 = new Asteroid([100,50]);
    // ast1.draw(ctx);
    // Game.draw(ctx)

    let game = new Game(canvas.width, canvas.height);
    let gameView = new GameView(game, ctx);
    gameView.start();
    // const mov1 = new MovingObject([25,25],[300,300], 10, "red");
    // mov1.draw(ctx);
    // mov1.move();
    // mov1.draw(ctx);
});
// console.log("TEST")
// window.MovingObject = MovingObject;
