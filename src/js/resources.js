import { ImageSource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import boardImage from '../images/kleinspelbord.png'
import blankBoard from '../images/blank-board.png'
import buttonImage from '../images/startbutton.png'
import startbgImage from '../images/startscreen.png'
import boef from '../images/Boef.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import schilderijvak from '../images/schilderijvakje.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Board: new ImageSource(boardImage),
    BlankBoard: new ImageSource(blankBoard),
    Button: new ImageSource(buttonImage),
    Startbg: new ImageSource(startbgImage),
    boef: new ImageSource(boef),
    image1: new ImageSource(image1),
    image2: new ImageSource(image2),
    image3: new ImageSource(image3),
    image4: new ImageSource(image4),
    image5: new ImageSource(image5),
    image6: new ImageSource(image6),
    image7: new ImageSource(image7),
    schilderijvak: new ImageSource(schilderijvak)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Board,
    Resources.BlankBoard,
    Resources.Button,
    Resources.Startbg,
    Resources.boef,
    Resources.image1,
    Resources.image2,
    Resources.image3,
    Resources.image4,
    Resources.image5,
    Resources.image6,
    Resources.image7,
    Resources.schilderijvak
])

export { Resources, ResourceLoader }