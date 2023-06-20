import { ImageSource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'
import buttonImage from '../images/startbutton.png'
import startbgImage from '../images/startscreen.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Board: new ImageSource(boardImage),
    Button: new ImageSource(buttonImage),
    Startbg: new ImageSource(startbgImage),
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Board,
    Resources.Button,
    Resources.Startbg,
])

export { Resources, ResourceLoader }