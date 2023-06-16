import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Board: new ImageSource(boardImage),
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Board,
])

export { Resources, ResourceLoader }