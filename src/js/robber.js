
import {Actor, Color, Sprite, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Art } from "./art.js";

export class Robber extends Actor {

    constructor() {
        super({
            pos: new Vector(0, 0), // Initial position
            anchor: Vector.Zero,
            width: 54,
            height: 54,
            color: Color.Green // You can change the color as needed
        });

        // Set the initial tile for the player
        this.currentTile = { x: 0, y: 0 };

        // Attach event listeners to handle button presses
        window.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        // Handle arrow key presses
        switch (event.key) {
            case "ArrowUp":
                this.movePlayerToTile(this.currentTile.x, this.currentTile.y - 1);
                break;
            case "ArrowDown":
                this.movePlayerToTile(this.currentTile.x, this.currentTile.y + 1);
                break;
            case "ArrowLeft":
                this.movePlayerToTile(this.currentTile.x - 1, this.currentTile.y);
                break;
            case "ArrowRight":
                this.movePlayerToTile(this.currentTile.x + 1, this.currentTile.y);
                break;
            default:
                break;
        }
    }

    movePlayerToTile(newX, newY) {
        // Check if the new tile is within the board boundaries
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 11) {
            // Update the player's position
            this.pos = new Vector(newX * 55, newY * 55);
            this.currentTile.x = newX;
            this.currentTile.y = newY;
        }
    }

    onInitialize(engine) {
        this.on("collisionStart", (event) => {
            if (event.other instanceof Art) {
                let artImage = new Actor({
                    x: 200,
                    y: 200,
                    width: 741,
                    height: 919
                })

                // picks a number between 0.00 and 1.00 and with that numbers picks a random image in the if statement
                let randomNumber = Math.random();

                if (randomNumber < 0.33) {
                    artImage.graphics.use(Resources.image1.toSprite());
                } else if (randomNumber < 0.66) {
                    artImage.graphics.use(Resources.image2.toSprite());
                } else {
                    artImage.graphics.use(Resources.image3.toSprite());
                }

                engine.currentScene.add(artImage);

                artImage.on("pointerdown", () => {
                    artImage.kill();
                    console.log("gone")
                });
                }
                console.log("move")
        });
            }
}