"use strict";
class TestClass1 {
    newFunction() {
        console.log("Hello World");
    }
}
const obj = new TestClass1();
obj.newFunction();
//Class with parameterized function----------------------------
class TestClass2 {
    testFunction(value) {
        console.log("Value is " + value);
    }
}
const obj2 = new TestClass2();
obj2.testFunction(10);
//Class with constructor----------------------------------------
class TestClass3 {
    constructor(name) {
        console.log(name);
    }
    printfunction() {
        console.log("Inside testfunction");
    }
}
const obj3 = new TestClass3("Arun");
obj3.printfunction();
//Class with constructor 2
class TestClass4 {
    name;
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    samplefunction(age) {
        console.log("Name: " + this.name);
        console.log("Age: " + age);
    }
}
const obj4 = new TestClass4("Daniel");
obj4.samplefunction(30);
