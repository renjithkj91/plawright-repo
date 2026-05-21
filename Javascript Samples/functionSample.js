//example 1
function display()
{
    console.log("Function invoked")
}
display()

//example 2
function add(a, b)
{
    console.log("sum =", a+b)
}
add(1,2)

//example 3
function addition(a,b)
{
    return a+b
}
let sum = addition(2,3)
console.log(sum)

//example 4 - anonymous function
let sum2 = (a,b) => a+b //arrow function
console.log(sum2(2,4))