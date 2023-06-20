import {Actor} from "excalibur";
import {Resources} from "./resources.js";

export class Button extends Actor {
    constructor() {
        super({
            width:Resources.Button.width, height:Resources.Button.height
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Button.toSprite())
    }
}