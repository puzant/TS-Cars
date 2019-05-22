import {Car, Icar} from '../../src/Car'
import { CarFactory } from '../../src/CarFactory';
import { CarMechanic } from '../../src/CarMechanic';
// import depencies 
import { expect } from 'chai'
import 'mocha'
//  import mock data
import meterial from '../../src/meterial.json'

describe('Car model', () => {

    it ('shoud create a new car', () => {
        const car = new Car(meterial)
        //  is everything will be alright *_* 
        expect(car).to.be.instanceOf(Car)
        expect(car.color).to.be.string
        expect(car.brand).to.be.equal("Ferrari")
        expect(car.isCoupe).to.be.true
        expect(car.maxSpeed).to.be.equal(295)
        expect(car.bodyType).to.be.equal("sports car")
        expect(car.accelerationTime).to.be.equal(5)
        expect(car.logo).to.be.equal("https://worldsportlogos.com/wp-content/uploads/2018/03/Ferrari-logo-1990-1996.jpg")
        expect(car.img).to.be.equal("https://www.challenges.fr/assets/img/2019/02/28/cover-r4x3w1000-5c77b43d46da7-ferrari-f8-tributo-jpeg.jpg")
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