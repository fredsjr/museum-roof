import {Actor, Vector, Label, FontUnit, Font} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Cop} from "./cop.js";

export class Dice extends Actor {
    number;
    dice;

    constructor(dice) {
        super({
            width: Resources.Dice.width,
            height: Resources.Dice.height,
        });
        this.dice = dice;
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Dice.toSprite());
        this.pos = new Vector(1100, 100)

        this.label = new Label({
            pos: new Vector(600, 600),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });

        this.scene.add(this.label);
    }

    roll(){
        this.number = Math.floor(Math.random() * 6 + 1);
        console.log(`${this.number}`);

        this.label.text = `je rolt een ${this.number}!`;
        console.log("roll that dice")
        return this.number;
    }
}