import '../css/style.css'
import {Actor, Color, Engine, Font, FontUnit, Label, Scene, SpriteSheet, TileMap, Timer, vec, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Art} from "./art.js";
import { Cop } from "./cop.js";
import { Robber} from "./robber.js";
import { Dice } from "./dice.js";
import { Cuffs } from "./cuffs.js"

export class Board extends Scene{

    game;
    cop;
    Robber;
    dice;
    robberScore = 0;
    copScore = 8;
    robberLabel;
    copLabel;
    copTurn;
    turnHint;
    rolling;
    time = 300;
    timeLabel

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Red});
        this.startGame()
    }

    onInitialize(engine) {
        Resources.razormind.play(0.7)

        this.game = engine

        this.dice = new Dice();
        this.add(this.dice);



        // Create the player actor
        this.cop = new Cop(this.dice);
        this.add(this.cop);

        this.Robber = new Robber(this.updateScore.bind(this), this.dice)
        this.add(this.Robber)

        // Set the initial tile for the player
        this.currentTile = { x: 0.5, y: 5.5 };

        this.copTurn = true;
        this.rolling = true

        //Create timer and activate it
        this.timer = new Timer({
            fcn: () => this.onTimer(),
            repeats: true,
            interval: 10,
        })
        this.add(this.timer)
        this.timer.start()

        this.turnHint = new Label({
            pos: new Vector(100, 400),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.turnHint)

    }

    onPreUpdate(_engine, _delta) {


        if (this.copTurn === true) {
            this.turnHint.text = `rol de dobbelsteen agent`
        } else {
            this.turnHint.text = `rol de dobbelsteen dief`
        }
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

        this.timeLabel = new Label({
            text: 'tijd: 300',
            pos: new Vector(100, 280),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        this.add(this.timeLabel)

        // this.turnHint = new Label({
        //     pos: new Vector(100, 200),
        //     font: new Font({
        //         family: 'impact',
        //         size: 24,
        //         unit: FontUnit.Px
        //     })
        // })
        // this.add(this.turnHint)
        // this.copLabel.text = `rol de dobbelsteen ${this.copTurn}`

        for (let x = 0; x <= 9; x ++) {
            for (let y = 0; y <= 10; y ++) {
                let tile = new Actor({
                    pos: new Vector(x * 55, y * 55),
                    anchor: new Vector(0, 0),
                    width: 55,
                    height: 55
                })
                tile.pos = tile.pos.add(new Vector(400, 20))
                this.add(tile)
            }
        }

        // art spawn for loop
        for (let i = 0; i < 8; i++){
            this.Art = new Art
            this.add(this.Art)
        }

        // cuffs spawn
        for (let i = 0; i < 8; i++){
            this.Cuffs = new Cuffs
            this.add(this.Cuffs)
        }
    }

    updateScore(collected){
        if (collected === true) {
            this.robberScore += 1;
            this.copScore -= 1;
            Resources.collectSound.play(0.7)
        }
        this.robberLabel.text = `boef score: ${this.robberScore}`
        this.copLabel.text = `politie score: ${this.copScore}`
    }

    onTimer() {
        // Every 10ms the timer counts down.
        this.time -= 0.01;
        this.timeLabel.text = `Time: ${this.time.toFixed(2)}`;
        if (this.time <= 0){
            this.game.goToScene('complete');
        }
    }
}