//syntax - using object literal
/*let objectName = 
{
    key 1 : value 1,
    key 2 : value 2
}*/

let student = {
    name : "Renjith",
    age : 35
}
console.log(student.name, student.age)
console.log("--------------------------")

//object literal with methods
let a = {
    firstName : "John",
    lastName : "Doe",
    fullName : function()
    {
        console.log(this.firstName + this.lastName)
    }
}
a.fullName()
console.log("First Name : "+a.firstName)
console.log("Last Name : "+a.lastName)
console.log("--------------------------")

//short hand method of above
let students = {
    name1 : "John",
    age : 30,
    study()
    {
        console.log("Name is " +this.name1)
        console.log("Age is " +this.age)
    }
}
students.study();
console.log("--------------------------")

//object literal with parameterized
let student2 = {
    name : "John Doe",
    study(subject)
    {
        console.log(this.name+" is studying " +subject)
    }
}
student2.study("Maths")
student2.study("Physics")
console.log("--------------------------")

//method with return
let student3 = {
    name : "John Doe",
    study(subject)
    {
        return this.name+" is studying "+subject
    }
}
let result1 = student3.study("Science")//calling the method and storing the return value
let result2 = student3.study("Computer")
console.log(result1)
console.log(result2)
console.log("--------------------------")