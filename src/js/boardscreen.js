import { Actor, Vector, Scene } from "excalibur";
import { Resources } from "./resources.js";
import { Cop } from "./cop.js";
import { Dice } from "./dice.js";
import { Board } from "./board.js";

export class BoardScreen extends Scene {
    cop;
    dice;

    constructor() {
        super({
            width: Resources.Board.width,
            height: Resources.Board.height,
        });
    }

    onInitialize(_engine) {
        this.cop = new Cop();
        this.width = 52
        this.add(this.cop);

        this.dice = new Dice();
        this.add(this.dice);

        this.dice.on("pointerup", () => {
            this.dice.roll();
        });
    }
}