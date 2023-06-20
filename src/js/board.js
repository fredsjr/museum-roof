import '../css/style.css'
import {Actor, Color, Engine, Scene, SpriteSheet, TileMap, vec, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Board extends Scene{

    game

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Red});
        this.startGame()
    }

    onInitialize(engine) {
        this.game = engine
    }

    startGame(){

        // hier wordt het plaatje van het board geïmporteerd naar de scene
        let playField = new Actor({
            pos: new Vector(0, 0),
            width: 1000,
            height: 700,
            anchor: Vector.Zero
        });

        playField.graphics.use(Resources.Board.toSprite());

        this.add(playField);

        // hier wordt een grid aangemaakt voor het board zodat je er op kan lopen
        let board = SpriteSheet.fromImageSource({
            image: Resources.Board,
            grid: {
                rows: 8,
                columns: 8,
                spriteHeight: 52,
                spriteWidth: 52
            }
        });

        // hier wordt de tilemap aangemaakt
        let tileMap = new TileMap({
            rows: 8,
            columns: 8,
            tileHeight: 52,
            tileWidth: 52
        });

        for (let cell of tileMap.tiles) {
            const sprite = board.getSprite(0,0);
            if (sprite) {
                cell.addGraphic(sprite)
            }
        }

}

}