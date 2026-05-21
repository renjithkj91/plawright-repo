//syntax
/*class class_name{
}*/

class student{
    name = "John"
}
let obj = new student
console.log("Name is "+obj.name)
console.log("***************************")

//class with function
class student1{
    name = "John"
    display(){
        console.log(this.name)
    }
}
let obj1 = new student1()
obj1.display();
console.log("***************************")

//class with parameterized function
class student2{
    //constructor is a special method in a clas sthat is automatically executed when an object is created and is used to initialize values
    constructor(name){
        this.name = name
    } 
    display(){
        console.log(this.name)
    }
}
let obj2 = new student2("Renjith")
obj2.display()
console.log("***************************")

//constructor with multiple properties
class student3{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    display(){
        console.log("Name: "+this.name)
        console.log("Age: "+this.age)
    }
}
let obj3 = new student3("John Doe", 30)
obj3.display()
console.log("***************************")

//
class student4{
    get college(){ //getter method. used to retrieve values.
        return("New college")
    }
}
let obj4 = new student4()
console.log(obj4.college)