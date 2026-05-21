class TestClass1{
    newFunction(){ //No need to use the keyword function when it is created inside a class
        console.log("Hello World")
    }
}
const obj = new TestClass1()
obj.newFunction()

//Class with parameterized function----------------------------
class TestClass2{
    testFunction(value:number){
        console.log("Value is " +value)
    }
}
const obj2 = new TestClass2()
obj2.testFunction(10)

//Class with constructor----------------------------------------
class TestClass3{
    constructor(name:string){
        console.log(name)
    }
    printfunction(){
        console.log("Inside testfunction")
    }
}
const obj3 = new TestClass3("Arun")
obj3.printfunction()

//Class with constructor 2
class TestClass4{
    name:string
    constructor(name:string){
        this.name = name
        console.log(name)
    }
    samplefunction(age:number){
        console.log("Name: "+this.name)
        console.log("Age: "+age)
    }
}
const obj4 = new TestClass4("Daniel")
obj4.samplefunction(30)