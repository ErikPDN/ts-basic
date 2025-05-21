export class ShopCart {
  private products: Array<Product> = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addProducts(...products: Array<Product>): void {
    for (const product of products) {
      this.addProduct(product);
    }
  }

  getProductAmount(): number {
    return this.products.length;
  }

  getTotalPrice(): number {
    return this.products.reduce(
      (total, product) => total + product.getPrice(),
      0);
  }
}

export class Product {
  private price: number;
  private name: string;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}

const cart1 = new ShopCart();
const product1 = new Product('Shirt', 19.99);
const product2 = new Product('Pants', 29.99);
const product3 = new Product('Shoes', 49.99);
cart1.addProduct(product1);
cart1.addProduct(product2);
cart1.addProduct(product3);
const totalPrice = cart1.getTotalPrice();
console.log(`Total price: $${totalPrice}`);

const cart2 = new ShopCart();
cart2.addProducts(product1, product2, product3);
console.log(cart2)
