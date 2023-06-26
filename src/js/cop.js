import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";

export class Cop extends Actor {

    dice;

    constructor(dice) {
        super({
            width: 54,
            height: 54,
        });
        this.dice = dice
        // this.currentTile = { x: 5, y: 0 };
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Cop.toSprite());
        this.pos = new Vector(520, 300);
    }
}
