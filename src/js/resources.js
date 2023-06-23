import { ImageSource, Loader } from 'excalibur'
import copImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'
import buttonImage from '../images/startbutton.png'
import startbgImage from '../images/startscreen.png'
import diceImage from '../images/dice.png'
import dice1Image from '../images/dice no1.png'
import dice2Image from '../images/dice no2.png'
import dice3Image from '../images/dice no3.png'
import dice4Image from '../images/dice no4.png'
import dice5Image from '../images/dice no5.png'
import dice6Image from '../images/dice no6.png'

const Resources = {
    Cop: new ImageSource(copImage),
    Board: new ImageSource(boardImage),
    Button: new ImageSource(buttonImage),
    Startbg: new ImageSource(startbgImage),
    Dice: new ImageSource(diceImage),
    Dice1: new ImageSource(dice1Image),
    Dice2: new ImageSource(dice2Image),
    Dice3: new ImageSource(dice3Image),
    Dice4: new ImageSource(dice4Image),
    Dice5: new ImageSource(dice5Image),
    Dice6: new ImageSource(dice6Image),
}
const ResourceLoader = new Loader([
    Resources.Cop,
    Resources.Board,
    Resources.Button,
    Resources.Startbg,
    Resources.Dice,
    Resources.Dice1,
    Resources.Dice2,
    Resources.Dice3,
    Resources.Dice4,
    Resources.Dice5,
    Resources.Dice6,
])

export { Resources, ResourceLoader }