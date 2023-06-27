import { ImageSource, Loader } from 'excalibur'
import copImage from '../images/police.png'
import boardImage from '../images/kleinspelbord.png'
import blankBoard from '../images/blank-board.png'
import buttonImage from '../images/startbutton.png'
import startbgImage from '../images/startscreen.png'
import logo from '../images/Logo museumroof.png'

import diceImage from '../images/dice.png'
import dice1Image from '../images/dice no1.png'
import dice2Image from '../images/dice no2.png'
import dice3Image from '../images/dice no3.png'
import dice4Image from '../images/dice no4.png'
import dice5Image from '../images/dice no5.png'
import dice6Image from '../images/dice no6.png'

import boef from '../images/Boef.png'
import collectedboef from '../images/collected-boef.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import schilderijvak from '../images/schilderijvakje.png'


const Resources = {
    Cop: new ImageSource(copImage),
    boef: new ImageSource(boef),
    collectedboef: new ImageSource(collectedboef),
    Board: new ImageSource(boardImage),
    Button: new ImageSource(buttonImage),
    BlankBoard: new ImageSource(blankBoard),
    Startbg: new ImageSource(startbgImage),
    Logo: new ImageSource(logo),

    Dice: new ImageSource(diceImage),
    Dice1: new ImageSource(dice1Image),
    Dice2: new ImageSource(dice2Image),
    Dice3: new ImageSource(dice3Image),
    Dice4: new ImageSource(dice4Image),
    Dice5: new ImageSource(dice5Image),
    Dice6: new ImageSource(dice6Image),

    image1: new ImageSource(image1),
    image2: new ImageSource(image2),
    image3: new ImageSource(image3),
    image4: new ImageSource(image4),
    image5: new ImageSource(image5),
    image6: new ImageSource(image6),
    image7: new ImageSource(image7),
    schilderijvak: new ImageSource(schilderijvak),
}


const ResourceLoader = new Loader([
    Resources.Cop,
    Resources.boef,
    Resources.collectedboef,
    Resources.BlankBoard,
    Resources.Board,
    Resources.Button,
    Resources.Startbg,
    Resources.Logo,

    Resources.Dice,
    Resources.Dice1,
    Resources.Dice2,
    Resources.Dice3,
    Resources.Dice4,
    Resources.Dice5,
    Resources.Dice6,

    Resources.image1,
    Resources.image2,
    Resources.image3,
    Resources.image4,
    Resources.image5,
    Resources.image6,
    Resources.image7,
    Resources.schilderijvak,
])


export { Resources, ResourceLoader }