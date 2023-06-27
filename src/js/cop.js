import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";
import {Cuffs} from "./cuffs.js";

export class Cop extends Actor {
    dice;
    engine;
    HasCuffs = false;

    constructor(dice) {
        super({
            pos: new Vector(5, 10),
            anchor: Vector.Zero,
            width: 52,
            height: 52,
        });
        this.dice = dice;

        this.currentTile = { x: 1, y: 5 };
        this.movePlayerToTile(0, 5);

        window.addEventListener("keydown", (event) => this.handleKeyPress(event));
    }


    handleKeyPress(event) {
        //maak een variabele aan die true is

        console.log(`copturn is ${this.scene.copTurn}`)


        if (this.scene.copTurn === true && this.scene.rolling === false) {
            switch (event.key) {
                case "ArrowUp":
                    if (this.dice.number) {
                        this.movePlayerToTile(this.currentTile.x, this.currentTile.y - 1);
                        this.dice.number--;
                    }
                    break;
                case "ArrowDown":
                    if (this.dice.number) {
                        this.movePlayerToTile(this.currentTile.x, this.currentTile.y + 1);
                        this.dice.number--;
                    }
                    break;
                case "ArrowLeft":
                    if (this.dice.number) {
                        this.movePlayerToTile(this.currentTile.x - 1, this.currentTile.y);
                        this.dice.number--;
                    }
                    break;
                case "ArrowRight":
                    if (this.dice.number) {
                        this.movePlayerToTile(this.currentTile.x + 1, this.currentTile.y);
                        this.dice.number--;
                    }
                    break;
                default:
                    break;
            }

            //verander de variabele naar false en maak de variabele van robber true
            if (this.dice.number === 0){
                this.scene.copTurn = false;
                this.scene.rolling = true
                console.log("finished moving, set copturn to false")

            }
        }

    }

    movePlayerToTile(newX, newY) {
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 11) {
            this.pos = new Vector(newX * 55 + 400, newY * 55 + 20);
            this.currentTile = new Vector(newX, newY);
        }
    }

    onInitialize(engine) {
        this.engine = engine;
        this.graphics.use(Resources.Cop.toSprite());

        this.on("collisionstart", (event) => {
            if (this.HasCuffs == false && event.other instanceof Cuffs) {
                this.HasCuffs = true
                event.other.kill()
                console.log("handboeien")
            }
        })
    }

}