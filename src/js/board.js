import { Actor } from "excalibur";
import { Resources } from "./resources.js";

export class Board extends Actor {
    constructor() {
        super({
            width: Resources.Board.width,
            height: Resources.Board.height,
        });
    }
}
