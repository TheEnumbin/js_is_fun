const name = 'Alice';
const user = { name }; // same as { name: name }


const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b }; // { x: 1, y: 2 }


const parent = {
  greet() {
    return 'Hi';
  }
};
const child = {
  greet() {
    return super.greet() + ', there!';
  }
};
Object.setPrototypeOf(child, parent);