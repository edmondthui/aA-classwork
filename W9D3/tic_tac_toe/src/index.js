const View = require("./ttt-view.js")
const Game = require("./solution/game.js")


$(() => {
  let game = new Game();
  const $el = $('.ttt');
  let view = new View(game, $el);
});
