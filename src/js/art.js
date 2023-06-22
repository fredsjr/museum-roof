import { Actor, CollisionType, Color, Vector } from "excalibur";
import {Resources} from "./resources.js";

export class Art extends Actor {

    constructor() {
        super({
            anchor: new Vector(0, 0),
            width: 40,
            height: 40,
            color: Color.Blue,
            collisionType: CollisionType.Passive // Set collision type to Passive
        });
    }

    onInitialize(engine) {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 11);
        this.pos = new Vector(randomX * 55, randomY * 55);

        this.graphics.use(Resources.schilderijvak.toSprite());
    }



}
