import {IBodyType} from './BodyType'    //  TODO: need to integrate this with Car clsas
export interface ICar {
    description: string
    color: string
    model: string
    maxSpeed: number    //  speed is in KM/PH
    bodyType: string
    price: number
    logo: string
    img: string
}

export class Car {
    public description: string
    public color: string
    public model: string
    public maxSpeed: number
    public bodyType: string
    public price: number
    public logo: string
    public img: string
    
    constructor (props: ICar) {
        this.description = props.description
        this.color = props.color
        this.model = props.model
        this.maxSpeed = props.maxSpeed
        this.bodyType = props.bodyType
        this.price = props.price
        this.logo = props.logo
        this.img = props.img
    }

    public getMaxSpeed() {
        return this.maxSpeed
    }

    public getModelName() {
        return this.model;
    }

}