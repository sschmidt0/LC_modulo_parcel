import React from "react";
import { createRoot } from "react-dom/client";
import { ShowGreet } from "./components/show-greet.component";
import "./index.scss";


// from anterior exercises
// const bundling: string = "parcel";

// console.log(`entrega modulo con ${bundling}`);

// const multiply = (number1: number, number2: number): number =>
//   number1 * number2;

// console.log(multiply(3, 5));

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <ShowGreet bundlingPackage="parcel" username="Sarah" />
  </div>
);
