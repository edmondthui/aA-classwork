import FlappyBird from './game';
import Game from './game';

const canvas = document.getElementById('bird-game');
let bird = new FlappyBird(canvas);

canvas.addEventListener('mousedown', function (){
    bird.click();
  });