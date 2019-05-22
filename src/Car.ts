export interface Icar {
    color: string
    brand: string
    isCoupe: boolean
    maxSpeed: number
    accelerationTime: number // 0 to 60 
    bodyType: string
    logo: string
    img: string
}

export class Car {
    public color: string
    public brand: string
    public isCoupe: boolean
    public maxSpeed: number
    public accelerationTime: number
    public bodyType: string
    public logo: string
    public img: string
    
    constructor (props: Icar) {
        this.color = props.color
        this.brand = props.brand
        this.isCoupe = props.isCoupe
        this.maxSpeed = props.maxSpeed
        this.accelerationTime = props.accelerationTime
        this.bodyType = props.bodyType
        this.logo = props.logo
        this.img = props.img
    }
}