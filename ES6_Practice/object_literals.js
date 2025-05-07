const item = "pen";
const price = 10;

const cart = {
  item,
  price,
  [item + "Stock"]: 100,
  printDetails() {
    console.log(`${this.item} costs ${this.price}`);
  }
};

cart.printDetails(); // pen costs 10
console.log(cart.penStock); // 100