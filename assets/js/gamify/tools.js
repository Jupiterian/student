import { distance, toRadians, pointAt } from './essentials.js';

export class Transform {
    constructor(x1=0, y1=0, dir=0, scaleX=1, scaleY=1) {
        this.position = { x: x1, y: y1};
        this.rotation = dir;
        this.scale = { x: scaleX, y: scaleY};
    }

    goto(x1, y1) {
        this.position.x = x1;
        this.position.y = y1;
    }

    changePos(x1=0, y1=0) {
        this.position.x += x1;
        this.position.y += y1;
    }

    move(speed) {
        const rad = this.toRadians(this.rotation);
        this.position.x += speed * Math.cos(rad);
        this.position.y += speed * Math.sin(rad);
    }

    rotate(dir) {
        this.rotation = dir;
    }

    toRadians(degrees) {
        return toRadians(degrees);
    }

    turn(angle) {
        this.rotation += angle;
    }

    setScale(scaleX, scaleY) {
        this.scale.x = scaleX;
        this.scale.y = scaleY;
    }

    distance(other) {
        return distance(this.position.x, this.position.y, other.position.x, other.position.y);
    }

    pointAt(target) {
        this.rotation = pointAt(this.position.x, this.position.y, target.position.x, target.position.y);
    }
}