import {IBodyType} from './BodyType'
export interface ICar {
    color: string
    brand: string
    maxSpeed: number    //  speed is in KM/PH
    bodyType: string
    logo: string
    img: string
}

export class Car {
    public color: string
    public brand: string
    public maxSpeed: number
    public bodyType: string
    public logo: string
    public img: string
    
    constructor (props: ICar) {
        this.color = props.color
        this.brand = props.brand
        this.maxSpeed = props.maxSpeed
        this.bodyType = props.bodyType
        this.logo = props.logo
        this.img = props.img
    }

    public getMaxSpeed() {
        return this.maxSpeed
    }

}