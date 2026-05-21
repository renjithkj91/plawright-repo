//example 1
class Parent{
    show(){
        console.log("Inheritance sample")
    }
}
class Child extends Parent{

}
let objchild = new Child()
objchild.show()
console.log("**********************")

//example 2
class Animal{
    eat(){
        console.log("Inside eat method")
    }
}
class cow extends Animal{
    drink(){
        console.log("Inside drink method")
    }
}
let obj2 = new cow()
obj2.eat()
obj2.drink()
console.log("**********************")

//example 3
class Person{
    constructor(name){
        this.name = name
    }
    display()
    {
        console.log("Hello "+this.name)
    }

}
class Child2 extends Person{
    show(){
        console.log("Inside child class function")
    }
}
let obj3 = new Child2("Sam") //if child class doesn't have function it will go to the constructor in the parent class
obj3.display()
obj3.show()
console.log("**********************")

//example 4
//'super' keyword sample. used to access the parent class constructor and class
class Parent1{
    show(){
        console.log("Inside parent class method")
    }
}
class Child3 extends Parent1{
    show(){
        console.log("Inside child class method")
        super.show()
    }
}
let obj4 = new Child3()
obj4.show()
console.log("**********************")

//example5
class Person2{
    constructor(name){
        this.name = name
    }
}
class Student2 extends Person2{
    constructor(name, mark){
        super(name)//calling parent constructor
        this.mark = mark
    }
    show(){
        console.log("Name is "+this.name+" and mark is "+this.mark)
    }
}
let newobj = new Student2("Joe", 100)
newobj.show()