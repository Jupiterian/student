import { Transform } from './tools.js';

export class Entity {
    constructor(x=0, y=0, img=null) {
        this.transform = new Transform(x, y);
        this.velocity = new Transform(0, 0);
        this.target = this.transform;
        this.walk = false;
        this.step = 0;
        this.yStep = 0;
        this.img = img;
    }

    waddle(speed) {
        this.velocity.move(speed);
        this.transform.changePos(this.velocity.position.x, this.velocity.position.y);
        if (walk) {
            this.step += 1;
        } else {
            this.step = 0;
        }
        const vibrate = 1 * Math.sin(this.step * 5);
        this.yStep = vibrate;
    }

    newTarget(x, y) {
        const randX = Math.random() * x - (x/2);
        const randY = Math.random() * y - (y/2);
        this.target.goto(randX, randY);
    }

    update() {
        const  dist = this.transform.distance(this.target);
        if (dist <= 5) {
            this.newTarget(200, 200);
        }
        this.transform.pointAt(this.target);
        this.velocity.rotate(this.transform.rotation);
        this.waddle(1);
    }
}
