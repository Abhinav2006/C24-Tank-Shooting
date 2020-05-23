class Ground{
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
  }

  display(){
    var pos = this.bodies.position;
    rectMode(CENTER)
    fill(255);
    rect(pos.x, pos.y, this.width, this.height)
  }
}