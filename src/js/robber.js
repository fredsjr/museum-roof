
import {Actor, Color, Sprite, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Art } from "./art.js";

export class Robber extends Actor {

    HasArtWork = false
    updateScore

    constructor(updateScore) {
        super({
            pos: new Vector(5, 10), // Initial position
            anchor: Vector.Zero,
            width: 54,
            height: 54,
            color: Color.Green // You can change the color as needed
        });
        this.updateScore = updateScore

        // Set the initial tile for the player
        this.currentTile = { x: 9, y: 5 };
        this.movePlayerToTile(9,5)
        // this.pos = this.pos.add(new Vector(400, 20))


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
            //when the robber is on this tile it sets HasArtWork back to false
            if (this.HasArtWork == true && newX === 9 && newY === 5){
                this.HasArtWork = false;
                // this.collected = true
                this.updateScore(true)
                console.log("great job")
                console.log(this.HasArtWork)
            }
            // Update the player's position
            this.pos = new Vector(newX * 55 + 400, newY * 55 + 20);
            this.currentTile = new Vector(newX, newY);
        }
    }

    onInitialize(engine) {
        this.graphics.use(Resources.boef.toSprite());

        this.on("collisionStart", (event) => {
            if (this.HasArtWork == false && event.other instanceof Art) {
                let artImage = new Actor({
                    x: 200,
                    y: 200,
                    width: 741,
                    height: 919
                });

                // picks a number between 0.00 and 1.00 and with that numbers picks a random image in the if statement
                let randomNumber = Math.random();

                if (randomNumber < 0.14) {
                    artImage.graphics.use(Resources.image1.toSprite());
                } else if (randomNumber < 0.28) {
                    artImage.graphics.use(Resources.image2.toSprite());
                } else if (randomNumber < 0.42) {
                    artImage.graphics.use(Resources.image3.toSprite());
                } else if (randomNumber < 0.56) {
                    artImage.graphics.use(Resources.image4.toSprite());
                } else if (randomNumber < 0.70) {
                    artImage.graphics.use(Resources.image5.toSprite());
                } else if (randomNumber < 0.84) {
                    artImage.graphics.use(Resources.image6.toSprite());
                } else {
                    artImage.graphics.use(Resources.image7.toSprite());
                }

                engine.currentScene.add(artImage);

                artImage.on("pointerdown", () => {
                    artImage.kill();
                    event.other.kill();
                    this.HasArtWork = true
                    this.color = Color.Yellow;
                    console.log("gone");
                    console.log(this.HasArtWork)

                });
            }
            console.log("move");
        });
        console.log(this.HasArtWork)
    }
}