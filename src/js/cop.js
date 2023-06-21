import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";

export class Cop extends Actor {

    constructor() {
        super({
            width: 52,
            height: 52,
        });
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Cop.toSprite());
        this.pos = new Vector(409, 301);
        console.log(`wahoo ${this.number}`)
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.wasPressed(Input.Keys.Up) && this.number === 1){
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
