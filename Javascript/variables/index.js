
//var keyword is a functional scope cannot be accessed outside this function.
var hello_world="Hello World"
console.log("Hello World");


let hello_world2= "Hello World 2"
console.log(hello_world2);

const hello_world3="Hello World 3"
console.log(hello_world3);


//redeclaration and ressignment
var a=10;
var a=20;
a=50;
console.log(a, "aaaa");


//let reassignment and cannot redeclare
let b=30;
let b=40;
//let b=80;
console.log(b, "bbbb");

//const cannot reassign and redeclare
const pi=3.14;
//pi=3.15;
//const pi=3.27

console.log(pi,"tetse");
//block scope
//{
//}

if(true){
    var c=10;
    //let and const are block scoped
    let d=20;
    const e=30;
    console.log(c,d,e);
}

console.log(c, "test c outside")
console.log(d,e, "test d and e outside")

let test=null;
console.log(test, "test undefined")

//[1,2,3]
//0 1 2
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//objects 
let person = {
    //key: value
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);