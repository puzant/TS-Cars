import {Car, ICar} from './car'

export class CarFactory {

    static createCar(data: ICar): Car {
        return new Car(data)
    }
}