import { ImageSource, Loader } from 'excalibur'
import copImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'
import buttonImage from '../images/startbutton.png'
import startbgImage from '../images/startscreen.png'
import diceImage from '../images/dice.png'

const Resources = {
    Cop: new ImageSource(copImage),
    Board: new ImageSource(boardImage),
    Button: new ImageSource(buttonImage),
    Startbg: new ImageSource(startbgImage),
    Dice: new ImageSource(diceImage),
}
const ResourceLoader = new Loader([
    Resources.Cop,
    Resources.Board,
    Resources.Button,
    Resources.Startbg,
    Resources.Dice,
])

export { Resources, ResourceLoader }