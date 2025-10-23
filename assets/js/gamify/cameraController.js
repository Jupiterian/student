import { Transform } from './tools.js';

class Camera {
    constructor() {
        this.transform = new Transform(0, 0, 0, 1, 1);
        this.zoom = this.transform.scale.x;

        this.target = this.transform;
    }

    follow(target) {
        this.transform.position.x += 0.1 * (target.position.x - this.transform.position.x);
        this.transform.position.y += 0.1 * (target.position.y - this.transform.position.y);
        this.transform.turn(0.1 * (target.rotation - this.transform.rotation));
        this.zoom += 0.1 * (target.scale.x - this.zoom);
    }
}