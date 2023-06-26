import {Actor, Vector, Label, FontUnit, Font} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Cop} from "./cop.js";

export class Dice extends Actor {
    number;

    constructor() {
        super({
            width: Resources.Dice.width,
            height: Resources.Dice.height,
            scale: new Vector ( 0.5, 0.5)

        });
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Dice.toSprite());
        this.pos = new Vector(1100, 500)
    }

    roll(){
        this.number = Math.floor(Math.random() * 6 + 1);
        console.log(`${this.number}`);

        if (this.number === 1){
            this.graphics.use(Resources.Dice1.toSprite());
            this.pos = new Vector(1100, 500)
        }

        if (this.number === 2){
            this.graphics.use(Resources.Dice2.toSprite());
            this.pos = new Vector(1100, 500)
        }

        if (this.number === 3){
            this.graphics.use(Resources.Dice3.toSprite());
            this.pos = new Vector(1100, 500)
        }

        if (this.number === 4){
            this.graphics.use(Resources.Dice4.toSprite());
            this.pos = new Vector(1100, 500)
        }

        if (this.number === 5){
            this.graphics.use(Resources.Dice5.toSprite());
            this.pos = new Vector(1100, 500)
        }

        if (this.number === 6){
            this.graphics.use(Resources.Dice6.toSprite());
            this.pos = new Vector(1100, 500)
        }

        return this.number;
    }
}