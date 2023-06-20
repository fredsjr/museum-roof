import {Actor, Vector, Scene} from "excalibur";
import { Resources } from "./resources.js";
import {Fish} from "./fish.js";
import {Dice} from "./dice.js";
import {Board} from "./board.js";

export class BoardScreen extends Scene {

    fish
    dice

    constructor() {
        super({
            width: Resources.Board.width,
            height: Resources.Board.height,
        });
    }

    onInitialize(_engine) {
        this.dice = new Dice()
        this.add(this.dice)


        this.fish = new Fish()
        this.add(this.fish)

        this.fish.on("pointerup", (event) => {
           this.dice.roll()
        })

        const board = new Board()
        this.add(board)
    }
}
