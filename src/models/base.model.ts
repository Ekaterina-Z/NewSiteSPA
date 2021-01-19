export interface Product {
  name: string;
  amount: number;
}

export class UserCart {
  totalCost: number;
  products: Product[];
  constructor(products: Product[]) {
    this.products = products
    this.totalCost = this.products.reduce(
      (accumulator: number, product: Product) => accumulator + product.amount,
      0
    );
  }
}
