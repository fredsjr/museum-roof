import { Actor, Color, Vector } from "excalibur";
import { Resources } from './resources.js';
import { Robber } from "./robber.js";

export class ImageActor extends Actor {
    constructor() {
        super({
            pos: new Vector(0, 0), // Initial position
            anchor: Vector.Zero,
            width: 54,
            height: 54,
            color: Color.White // You can change the color as needed
        });

        // Set the initial tile for the image actor
        this.currentTile = { x: 0, y: 0 };
    }

    onInitialize(engine) {
        this.on("collisionStart", (event) => {
            if (event.other instanceof Robber) {
                const images = [Resources.image1, Resources.image2, Resources.image3]; // Replace with your image resources
                const randomIndex = Math.floor(Math.random() * images.length);
                const selectedImage = images[randomIndex];
                this.showImage(selectedImage);
            }
        });
    }

    showImage(imageResource) {
        // Display the provided image resource
        // Implement your code to show the image on the actor
        // For example, you can use the `addDrawing` method to display a sprite:
        this.addDrawing(imageResource.asSprite());
    }
}