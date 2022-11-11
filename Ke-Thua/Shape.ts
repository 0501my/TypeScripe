 class Shape {
    private _name: string;
    private _color: string;

    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    getName(): string {
        return this._name;
    }

    getColor(): string {
        return this._color;
    }

     setName(value: string) {
         this._name = value;
     }

     setColor(value: string) {
         this._color = value;
     }
 }

class TriAgle extends Shape {
    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    private _side1: number;
    private _side2: number;
    private _side3: number;


    getSide1(): number {
        return this._side1;
    }

    getSide2(): number {
        return this._side2;
    }

    getSide3(): number {
        return this._side3;
    }
    getArea(): number{
        return (this._side1 + this._side2 + this._side3)/2
    }
    getPerimeter(): number{
        return this._side1 + this._side2 + this._side3
    }
}
let shape = new Shape("tam giác", "red")
console.log(shape)
let triangle = new TriAgle("tam giác","blue",7,8,9).getArea()
console.log(`diện tích tam giác là ${triangle}`)
 let chuVi = new TriAgle("chu vi","yelow",7,8,9).getPerimeter()
 console.log(`chu vi tam giác là ${chuVi}`)