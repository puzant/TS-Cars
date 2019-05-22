import {CarFactory} from './CarFactory'

export class CarMechanic {

    /**
     * the mechanic is responsible of building the car
     * @param meterial, the metrial needed to build the car 
     */
     static build(meterial) {
       return CarFactory.createCar(meterial)
    }

}