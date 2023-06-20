import {Actor, Vector, Label, FontUnit, Font} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class Dice extends Actor {
    constructor() {
        super();
    }

    onInitialize(_engine) {
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
        let number = Math.floor(Math.random() * 6 + 1);
        console.log(`${number}`);

        this.label.text = `je rolt een ${number}!`;
        console.log("roll that dice")
    }
}