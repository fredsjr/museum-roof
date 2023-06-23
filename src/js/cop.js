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
        this.pos = new Vector(26, 300);
    }
}
