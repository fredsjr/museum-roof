import '../css/style.css'
import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScreen } from "./startscreen.js";
import { BoardScreen } from './boardscreen.js'
import {Board} from "./board.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 700 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(false)
        this.debug.transform.showAll = true
    }

    startGame() {
        console.log("start de game!")
        this.addScene('startScreen', new StartScreen())
        this.addScene('boardScreen', new Board())
        this.goToScene('startScreen')
    }
}

new Game()
