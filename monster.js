class Monster {
    constructor() {
        var options = {restitution:0.5, friction:0.3, isStatic:false};
        this.body = b.rectangle(675, 500, 80, 80);
        this.image = loadImage("images/Monster-01.png");
        world.add(wo, this.body);
    }

    display() {
        var pos =this.body.position;

        imageMode(CENTER);
        image(pos.x, pos.y, 80, 80);
    }
}