

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    const $add_ul = $('<ul></ul>');
    $add_ul.appendTo('.ttt');
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let view = this;
    $('ul').on('click', 'li', function (event) {
      let $square = $(event.currentTarget);
      // alert($square.data('pos'));
      // playMove.bind(this.game, $square.data('pos'))
      try {
        view.makeMove($square);
      } catch (e) {
        alert('Invalid Move! Try Again!')
      }
      
    })
  }
  
  makeMove($square) {
    this.game.playMove($square.data('pos'));
    let mark = this.game.currentPlayer;
    $square.addClass(mark).append(mark);
    let win = "li." + mark;
    if (this.game.board.winner()) {
      $(win).attr("id", "win");
      $('li').addClass('lose');
      $('ul').off();
      $(".ttt").append(`<figcaption>You win, ${mark}!</figcaption>`);
    } 
    else if (this.game.isOver()) {
      $('li').addClass('lose');
      $('ul').off();
      $(".ttt").append(`<figcaption>It's a draw!</figcaption>`);
    }
  }


  //[0: [0,0], 1: [0, 1], 2: [0,2], 3: [1, 0], 4: [1, 1], ]
  setupBoard() {
    const $ul = $('ul');
    for (let i = 0; i < 9; i ++) {
      const $li = $('<li></li>')
      $li.data("pos", [Math.floor(i/3), i % 3])
      $ul.append($li);
    }
  }
}

module.exports = View;
