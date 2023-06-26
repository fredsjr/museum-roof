import '../css/style.css'
import {Actor, Color, Engine, Scene, SpriteSheet, TileMap, vec, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Art} from "./art.js";
import { Cop } from "./cop.js";
import { Robber} from "./robber.js";
import { Dice } from "./dice.js";

export class Board extends Scene{

    game;
    cop;
    dice;

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Red});
        this.startGame()
    }

    onInitialize(engine) {
        this.game = engine

        this.dice = new Dice();
        this.add(this.dice);

        this.dice.on("pointerup", () => {
            this.dice.roll();
        });

        // Create the player actor
        this.cop = new Cop(this.dice);
        this.cop.currentTile = { x: 9.5, y: 5.5 };
        this.add(this.cop);

        for (let i = 0; i < 8; i++){
            this.Art = new Art
            this.add(this.Art)
        }

        this.Robber = new Robber(this.dice)
        this.Robber.currentTile = { x: 0, y: 5 };
        this.add(this.Robber)
    }

    startGame(){

        // hier wordt het plaatje van het board geïmporteerd naar de scene
        let playField = new Actor({
            pos: new Vector(0, 0),
            width: 1000,
            height: 700,
            anchor: Vector.Zero
        });

        playField.graphics.use(Resources.BlankBoard.toSprite());

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

        // Attach event listeners to handle button presses
        window.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        // Handle arrow key presses
        switch (event.key) {
            case "ArrowUp":
                if (this.dice.number) {
                    console.log("aaa")
                    this.movePlayerToTile(this.cop.currentTile.x, this.cop.currentTile.y - 1);
                    console.log("bbb")
                    this.dice.number--
                }
                break;
            case "ArrowDown":
                if (this.dice.number) {
                    this.movePlayerToTile(this.cop.currentTile.x, this.cop.currentTile.y + 1);
                    this.dice.number--
                }
                break;
            case "ArrowLeft":
                if (this.dice.number) {
                    this.movePlayerToTile(this.cop.currentTile.x - 1, this.cop.currentTile.y);
                    this.dice.number--
                }
                break;
            case "ArrowRight":
                if (this.dice.number) {
                    this.movePlayerToTile(this.cop.currentTile.x + 1, this.cop.currentTile.y);
                    this.dice.number--
                }
                break;
            default:
                break;
        }
        if (this.dice.number === 0) {
            console.log("dice is 0 i guess")
        }
    }

    movePlayerToTile(newX, newY) {
        // Check if the new tile is within the board boundaries
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 11) {
            // Update the player's position
            this.cop.pos = new Vector(newX * 55, newY * 55);
            this.Robber.pos = new Vector(newX * 55, newY * 55);
            this.cop.currentTile.x = newX;
            this.cop.currentTile.y = newY;
            this.Robber.currentTile.x = newX;
            this.Robber.currentTile.y = newY;
        }
    }
}