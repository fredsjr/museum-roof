import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";

export class Fish extends Actor {
    constructor() {
        super({
            width: Resources.Fish.width,
            height: Resources.Fish.height,
        });
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(409, 301)
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.wasPressed(Input.Keys.Up)) {
            yspeed = -3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Down)) {
            yspeed = 3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Left)) {
            xspeed = -3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Right)) {
            xspeed = 3220;
        }
        this.vel = new Vector(xspeed, yspeed);
    }
}