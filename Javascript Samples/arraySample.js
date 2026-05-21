//example 1
let x = [1,2,3,4]
console.log(x)

//example 2
let y = Array(1,2,3)
console.log(y)

//example 3
let z = Array(3)
console.log(z)
/*z.push(1)
z.push(2)
z.push(3)
console.log(z)*/

//example 4
for(let i=1;i<=3;i++)
{
    z.push(i)
}
console.log(z)

console.log(z.length)

//example 5
let fruits = ["Banana", "Apple", "Mango"]
fruits.sort()
console.log(fruits)

//example 6
let num = [10, 5, 2, 9, 14]
num.sort((a,b)=>a-b) //to sort in ascending order. b-a for descending
console.log(num)
num.sort((a,b)=>b-a)
console.log(num)