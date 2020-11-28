export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 0;
        this.pos = { x: this.dimensions.width/2, y: this.dimensions.height/3 };
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.pos.x, this.pos.y, 40, 30);
      }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.velocity += .5; // this is the Gravity value
        this.pos.y += this.velocity; 
    }

    flap() {
        this.velocity += -8;
    }

}
