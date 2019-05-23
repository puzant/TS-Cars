import {Car, ICar} from '../../src/Car'
import {IBodyType} from '../../src/BodyType'

import { CarFactory } from '../../src/CarFactory';
import { CarMechanic } from '../../src/CarMechanic';
// import depencies 
import { expect } from 'chai'
import 'mocha'
//  import mock data
import meterial from '../../src/meterial.json'

//  import speed unit convert
import { SpeedUnitConverter } from '../../src/utils/SpeedUnitConverter';

//  import charecter appender 
import { chars, CharecterAppender } from '../../src/utils/CharecterAppender';


describe('Car model', () => {
    it ('shoud create a new car', () => {
        const car = new Car(meterial)
        //  is everything will be alright *_* 
        expect(car).to.be.instanceOf(Car)
        expect(car.color).to.be.string
        expect(car.model).to.be.equal("Ferrari 458 Italia")
        expect(car.maxSpeed).to.be.equal(325)
        expect(car.bodyType).to.be.equal("Coupe")
        expect(car.logo).to.be.equal("https://worldsportlogos.com/wp-content/uploads/2018/03/Ferrari-logo-1990-1996.jpg")
        expect(car.img).to.be.equal("https://www.challenges.fr/assets/img/2019/02/28/cover-r4x3w1000-5c77b43d46da7-ferrari-f8-tributo-jpeg.jpg")
    })

    it ('should return the max speed', () => {
        const car = new Car(meterial)
        expect(car.getMaxSpeed()).to.equal(325)
    })

    it ('should return the brand name', () => {
        const testCar = new Car(meterial)
        expect(testCar.getModelName()).to.equal('Ferrari 458 Italia')
    })
})

describe ('Car factory', () => {
    it ('should create an instance of the car object', () => {
        const newCar = CarFactory.createCar(meterial)
    })
})

describe ('Car mechanic', () => {
    it ('should build the car object', () => {
        const car = CarMechanic.build(meterial)
    })
})

describe ('Speed unit converter', () => {
    it ('should convert from Kmph to Mph', () => {
        const car = new Car(meterial)
        const speedInKmph = 300
        const convertedSpeed = SpeedUnitConverter.KmphToMph(car.maxSpeed)
        expect(convertedSpeed).to.equal("201.95")
        expect(SpeedUnitConverter.KmphToMph(speedInKmph)).to.equal("186.42")
    })
})

describe ('Charecter appender', () => {
    //  let's test the enum first
    it ('should be equal to $', () => {
        expect(chars.DOLLAR).to.equal('$')
    })

    it ('should be equal to Km/ph', () => {
        expect(chars.KMPH).to.equal('Km/ph')
    })

    it ('should be equal to Mph', () => {
        expect(chars.MPH).to.equal('Mph')
    })

    it ('should append $ to the end of the string', () => {
        const appendedString = CharecterAppender.append(23000, chars.DOLLAR)
        expect(appendedString).to.equal('23000 $')
    })

    it ('should append Km/ph to the end of the string', () => {
        const appendedString = CharecterAppender.append(201.95, chars.KMPH)
        expect(appendedString).to.equal('201.95 Km/ph')
    })

    it ('should append $ to the end of the string', () => {
        const appendedString = CharecterAppender.append(186.42, chars.MPH)
        expect(appendedString).to.equal('186.42 Mph')
    })


})