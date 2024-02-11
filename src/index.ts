import "./index.scss";

const bundling: string = "parcel";

console.log(`entrega modulo con ${bundling}`);

const multiply = (number1: number, number2: number): number =>
  number1 * number2;

console.log(multiply(3, 5));
