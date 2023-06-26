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
    }

    onInitialize(engine) {

        this.graphics.use(Resources.boef.toSprite())
        this.pos = new Vector(108, 275);

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
                    this.color = Color.Yellow;
                    console.log("gone")
                });
                }
                console.log("move")
        });
    }
}