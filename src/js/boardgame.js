import {Actor, Vector} from "excalibur";
import { Resources } from "./resources.js";
import {Fish} from "./fish.js";
import {Dice} from "./dice.js";

export class BoardScreen extends Actor {
    constructor() {
        super({
            width: Resources.Board.width,
            height: Resources.Board.height,
        });
    }

    onInitialize(_engine) {
        const fish = new Fish()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(409, 301)
        this.add(fish)

        fish.on("pointerup", (event) => {
            const dice = new Dice()
            this.add(dice)
        })
    }
}
