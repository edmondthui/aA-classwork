// const Game = require("./game.js")

function GameView (game, context) {
    this.game = game;
    this.context = context;

}

GameView.prototype.start = function () {
    this.game.addAsteroids();
    setInterval(this.game.step.bind(this.game), 50);
    setInterval(this.game.draw.bind(this.game, this.context), 50);
}

module.exports = GameView;