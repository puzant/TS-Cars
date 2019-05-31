import {CarFactory} from './CarFactory'

export class CarMechanic {

    /**
     * the mechanic is responsible of building the car
     * @param meterial, the metrial needed to build the car 
     * this method is generic it'll build the same type of car
     */
     static build(meterial) {
       return CarFactory.createCar(meterial)
    }

}