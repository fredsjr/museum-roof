import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import testBoard from '../images/board.png'

const Resources = {
    Board: new ImageSource(testBoard),
    Fish: new ImageSource(fishImage)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Board])

export { Resources, ResourceLoader }