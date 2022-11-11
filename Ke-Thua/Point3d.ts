import {Point2d} from "./Point2d";

class Point3d extends Point2d {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    getZ(): number {
        return this._z;
    }

    setZ(value: number) {
        this._z = value;
    }

    getXYZ(): object {
        return this;
    }

    setXYZ(x: number, y: number, z: number): void {
        this._z = z;
        super.setXY(x, y);
    }
}

let point3d = new Point3d(5, 6, 7).getXYZ();
console.log(point3d);