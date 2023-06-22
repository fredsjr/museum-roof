import {Actor, Color, Engine, Scene, SpriteSheet, TileMap, vec, Vector} from "excalibur"

export class Art extends Actor{

    constructor() {
        super({
            anchor: new Vector(0,0),
            width: 55,
            height: 55,
            color: Color.Blue
        });
    }

    onInitialize(engine) {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 11);
        this.pos = new Vector(randomX * 55, randomY * 55)
    }
}