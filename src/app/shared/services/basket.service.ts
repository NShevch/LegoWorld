export default class Basket {
  private products: Product[] = [];
  
  public getItems(): Product[] {
    return this.products;
  }
  public addItem(product: Product) {
    const ifExist: Product | undefined = this.products.find((productMain: Product) => {
      return product.name === productMain.name;
    });
    if (ifExist) {
      ifExist.amount! += 1;
    } else {
      product.amount = 1;
      this.products.push(product);
    }
  }
  public clear() {
    this.products.length = 0;
  }
  public getAmountOfProducts() {
    let numberOfProducts = 0;
    this.products.forEach((product: Product) => {
      if (product.amount !== undefined) {
        numberOfProducts += product.amount;
      }      
    });
    return numberOfProducts;
  }
  public removeProduct(product: Product) {
    this.products = this.products.filter((prod: Product) => product.name !== prod.name);
  }
}