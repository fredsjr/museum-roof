import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";

export class Cop extends Actor {

    dice;

    constructor(dice) {
        super({
            width: 52,
            height: 52,
        });
        this.dice = dice
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Cop.toSprite());
        this.pos = new Vector(409, 301);
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.wasPressed(Input.Keys.Up) && this.dice.number){
            this.dice.number--
            yspeed = -3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Down) && this.dice.number) {
            this.dice.number--
            yspeed = 3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Left) && this.dice.number) {
            this.dice.number--
            xspeed = -3220;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Right) && this.dice.number) {
            this.dice.number--
            xspeed = 3220;
        }

        this.vel = new Vector(xspeed, yspeed);
    }
}
