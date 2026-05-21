//import { error } from "node:console"

//Non-parameterized function. No return values
function greet():void{ //here void isn't mandatory. ts can automatically identify the return type
    console.log("Hello World")
}
greet()

//parameterized function without return values
function addition(a:number, b:number){
    console.log(a+b)
}
addition(10,5)

//parameterized function with return values
function substraction(a:number, b:number):number{
    return(a-b)
}
console.log(substraction(10,5))

function stop():never{ //page will never stop. this function will throw an error
    throw new Error("Error message visible")
}
stop()