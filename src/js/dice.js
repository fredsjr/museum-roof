import {Actor} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class Dice extends Actor {
    constructor() {
        super()
    }

    onInitialize(_engine) {
        let number = Math.floor(Math.random() * 6 + 1)
        console.log(`${number}`)
    }
}