import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {
    constructor() {
        super({
            width: Resources.Fish.width,
            height: Resources.Fish.height,
        });
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.wasPressed(Input.Keys.Up)) {
            yspeed = -3200;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Down)) {
            yspeed = 3200;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Left)) {
            xspeed = -3200;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Right)) {
            xspeed = 3200;
        }
        this.vel = new Vector(xspeed, yspeed);
    }

}