class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width+100;
    this.height = height;
    this.image = loadImage("computer.png");

        World.add(world, this.body);
  }

   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, -70, 0, this.width, this.height);
    rotate()
    pop();
  }
}
