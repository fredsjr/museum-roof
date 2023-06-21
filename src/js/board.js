
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
                rows: 10,
                columns: 11,
                spriteHeight: 52,
                spriteWidth: 52

            }
        });

        for (let x = 0; x <= 9; x ++) {
            for (let y = 0; y <= 10; y ++) {
                let tile = new Actor({
                    pos: new Vector(x * 55, y * 55),
                    anchor: new Vector(0, 0),
                    width: 55,
                    height: 55
                })
                // tile.anchor = new Vector(0.5,0.5)
                // tile.anchor.setTo(-1, -1)
                this.add(tile)
            }
        }

        // Create the player actor
        this.player = new Actor({
            pos: new Vector(0, 0), // Initial position
            anchor: Vector.Zero,
            width: 55,
            height: 55,
            color: Color.Green // You can change the color as needed
        });

        this.add(this.player);

        // Set the initial tile for the player
        this.currentTile = { x: 0, y: 0 };

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
            // Update the player's position
            this.player.pos = new Vector(newX * 55, newY * 55);
            this.currentTile.x = newX;
            this.currentTile.y = newY;
        }
    }



        // // hier wordt de tilemap aangemaakt
        // let tileMap = new TileMap({
        //     rows: 10,
        //     columns: 11,
        //     tileHeight: 52,
        //     tileWidth: 52
        // });
        //
        // for (let cell of tileMap.tiles) {
        //     const sprite = board.getSprite(0,0);
        //     if (sprite) {
        //         cell.addGraphic(sprite)
        //
        //
        //
        //      }
        //
        // }

}

