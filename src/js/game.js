import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Board } from './board.js'

export class Game extends Engine {

    constructor() {
        super({ width: 546, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const board = new Actor()
        board.graphics.use(Resources.Board.toSprite())
        board.pos = new Vector(273, 300)
        this.add(board)

        const fish = new Fish()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(413, 300)
        this.add(fish)
    }
}

new Game()
