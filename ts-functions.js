"use strict";
//import { error } from "node:console"
//Non-parameterized function. No return values
function greet() {
    console.log("Hello World");
}
greet();
//parameterized function without return values
function addition(a, b) {
    console.log(a + b);
}
addition(10, 5);
//parameterized function with return values
function substraction(a, b) {
    return (a - b);
}
console.log(substraction(10, 5));
function stop() {
    throw new Error("Error message visible");
}
stop();
