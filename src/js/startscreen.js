import {Actor, Scene, Vector} from 'excalibur'
import {Resources} from "./resources.js";
import {Button} from "./button.js";

export class StartScreen extends Scene {

    onInitialize(engine) {
        console.log("start screen is created")

        const startbg = new Actor()
        startbg.graphics.use(Resources.Startbg.toSprite())
        startbg.pos = new Vector(600, 450)
        this.add(startbg)

        const button = new Button()
        button.graphics.use(Resources.Button.toSprite())
        button.pos = new Vector(600, 600)
        this.add(button)

        button.on("pointerup", (event) => {
            engine.goToScene('boardScreen')
        })
    }
}