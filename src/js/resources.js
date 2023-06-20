import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'
import button from '../images/startbutton.png'
import startbg from '../images/startscreen.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Board: new ImageSource(boardImage),
    Button: new ImageSource(boardImage),
    Startbg: new ImageSource(boardImage),
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Board,
    Resources.Button,
    Resources.Startbg,
])

export { Resources, ResourceLoader }