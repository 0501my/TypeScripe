import {Product} from "./Product";
import {ProductManager} from "./Product";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);

let productManager = new ProductManager();
productManager.setAdd(laptop);
productManager.setAdd(iphone);

console.log(productManager.getAll());
