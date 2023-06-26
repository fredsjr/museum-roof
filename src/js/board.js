import '../css/style.css'
import {Actor, Color, Engine, Font, FontUnit, Label, Scene, SpriteSheet, TileMap, vec, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Art} from "./art.js";
import { Cop } from "./cop.js";
import { Robber} from "./robber.js";
import { Dice } from "./dice.js";

export class Board extends Scene{

    game;
    cop;
    dice;
    robberScore = 0;
    copScore = 8;
    robberLabel;
    copLabel

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
        this.add(this.cop);

        // Set the initial tile for the player
        this.currentTile = { x: 0.5, y: 5.5 };
    }

    startGame(){

        // hier wordt het plaatje van het board geïmporteerd naar de scene
        let playField = new Actor({
            pos: new Vector(400, 20),
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
                spriteHeight: 55,
                spriteWidth: 55,

            }
        });


        // robber score label
this.robberLabel = new Label({
    text: 'boef score: 0',
    pos: new Vector(100, 100),
    font: new Font({
        family: 'impact',
        size: 24,
        unit: FontUnit.Px
    })
})

        this.add(this.robberLabel)

        // cop score label

        this.copLabel = new Label({
            text: 'politie score: 8',
            pos: new Vector(100, 160),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        this.add(this.copLabel)

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
                tile.pos = tile.pos.add(new Vector(400, 20))
                this.add(tile)

            }
        }

        for (let i = 0; i < 8; i++){
            this.Art = new Art
            this.add(this.Art)
        }

        this.Robber = new Robber(this.updateScore.bind(this))
        this.add(this.Robber)

    }

    updateScore(collected){
        if (collected === true) {
            this.robberScore += 1;
            this.copScore -= 1;
        }
        this.robberLabel.text = `boef score: ${this.robberScore}`
        this.copLabel.text = `politie score: ${this.copScore}`
    }


}