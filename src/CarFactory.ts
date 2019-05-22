import {Car, Icar} from './car'

export class CarFactory {

    static createCar(data: Icar): Car {
        return new Car(data)
    }
}