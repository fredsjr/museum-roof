import {Actor, Color, Sprite, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Art } from "./art.js";
import { Cop } from "./cop.js";

export class Robber extends Actor {

    HasArtWork = false
    updateScore;
    engine;
    dice;

    constructor(updateScore, dice) {
        super({
            pos: new Vector(5, 10), // Initial position
            anchor: Vector.Zero,
            width: 54,
            height: 54,
            color: Color.Green // You can change the color as needed
        });
        this.updateScore = updateScore
        this.dice = dice;

        // Set the initial tile for the player
        this.currentTile = {x: 9, y: 5};
        this.movePlayerToTile(9, 5)
        // this.pos = this.pos.add(new Vector(400, 20))


        // Attach event listeners to handle button presses
        window.addEventListener("keydown", (event) => this.handleKeyPress(event));
    }

    handleKeyPress(event) {
        console.log(`robber tries to move, copturn is ${this.scene.copTurn}`)
        // Handle arrow key presses
        if (this.scene.copTurn === false && this.scene.rolling === false) {
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
            if (this.dice.number === 0) {
                this.scene.copTurn = true;
                this.scene.rolling = true

                console.log("robber finished, set copturn to true")

            }
        }

    }

    movePlayerToTile(newX, newY) {
        // Check if the new tile is within the board boundaries
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 11) {
            //when the robber is on this tile it sets HasArtWork back to false
            if (this.HasArtWork == true && newX === 9 && newY === 5) {
                this.HasArtWork = false;
                this.graphics.use(Resources.boef.toSprite());
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
        this.engine = engine
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
                    this.graphics.use(Resources.collectedboef.toSprite());


                });
            }

        });

        this.on("collisionStart", (event) => {
            if (event.other instanceof Cop) {
                if (this.HasArtWork === true) {
                    let art = new Art()
                    this.scene.add(art)
                    console.log('art created')
                }
                this.HasArtWork = false;
                Resources.prisonDoor.play(0.7)
                this.graphics.use(Resources.boef.toSprite());
                this.movePlayerToTile(9, 5);
            }
        });
    }
}