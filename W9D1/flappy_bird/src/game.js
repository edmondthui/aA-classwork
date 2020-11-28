import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level = new Level(this.dimensions);
    this.restart(this.ctx);
    this.play();
  }

  animate(ctx) {
    this.level.drawBackground(ctx);
    this.bird.animate(ctx);
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this, ctx));
    }
  }

  restart(ctx) {
    this.bird = new Bird(this.dimensions);
    this.animate(ctx);
    this.running = false;
  }

  play() {
    this.running = true;
    this.animate(this.ctx);
  }

  click() {
    if (this.running) {
      this.bird.flap();
    } else {
      this.play();
    }
  }


}

// const canvas = document.getElementById('bird-game');
// canvas.addEventListener('mousedown', function (){
//   FlappyBird.click();
// });