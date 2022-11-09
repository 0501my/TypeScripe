export class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }
}
export class ProductManager{
    private products: Product[] = [];

    constructor() {
    }
    getAll(){
        return this.products
    }
    setAdd(product: Product){
        this.products.push(product)
    }
}
