import {Actor, Vector, Input, Color} from "excalibur";
import { Resources } from "./resources.js";
import { Dice } from "./dice.js";
import {Art} from "./art.js";
import {Robber} from "./robber.js";

export class Cop extends Actor {

    dice;

    constructor(dice) {
        super({
            pos: new Vector(5,10),
            anchor: Vector.Zero,
            width: 52,
            height: 52,
        });
        this.dice = dice

        this.currentTile = {x: 1, y: 5};
        this.movePlayerToTile(1, 5)

        // Attach event listeners to handle button presses
        window.addEventListener("keydown", this.handleKeyPress.bind(this));

        // this.on("collisionStart", (event) => {
        //     if (event.other instanceof Robber) {
        //         console.log("CAUGHT!!");
        //         event.other.movePlayerToTile(9, 5);
        //     }
        // });
    }

handleKeyPress(event) {
    // Handle arrow key presses
    switch (event.key) {
        case "ArrowUp":
            if (this.dice.number){
                this.movePlayerToTile(this.currentTile.x, this.currentTile.y - 1);
                this.dice.number--
            }
            break;
        case "ArrowDown":
            if (this.dice.number){
                this.movePlayerToTile(this.currentTile.x, this.currentTile.y + 1);
                this.dice.number--
            }
            break;
        case "ArrowLeft":
            if (this.dice.number){
                this.movePlayerToTile(this.currentTile.x - 1, this.currentTile.y);
                this.dice.number--
            }
            break;
        case "ArrowRight":
            if (this.dice.number){
                this.movePlayerToTile(this.currentTile.x + 1, this.currentTile.y);
                this.dice.number--
            }
            break;
        default:
            break;
    }
}

movePlayerToTile(newX, newY) {
    // Check if the new tile is within the board boundaries
    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 11) {
        // Update the player's position
        this.pos = new Vector(newX * 55 + 400, newY * 55 + 20);
        this.currentTile = new Vector(newX, newY);
    }

}

    onInitialize(_engine) {
        this.graphics.use(Resources.Cop.toSprite());
    }
}
