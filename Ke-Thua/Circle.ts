export class Circle{
   private _color : string;
   private _radius : number;

    constructor(color: string, radius: number) {
        this._color = color;
        this._radius = radius;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    getArea():number{
        return this._radius * this._radius * Math.PI
    }
}
class Cylinder extends Circle{
    height : number

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.height = height;
    }
    public getValue(): number{
        return this.height * super.getArea()
    }
}
let circle = new Circle("red", 5)
console.log(circle)
let ciLynDer = new Cylinder("blue", 10,5).getValue()
console.log(ciLynDer)