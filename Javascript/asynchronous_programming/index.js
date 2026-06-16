console.log("start");
setTimeout (() => {
    console.log("middle");
},5000); 
console.log("end");

//array = ["apple, "banana","mango","orange"]
//use for loop
//print fruits name using for loop

const array = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Sagal callback

let greet = (name, callback) => {
    console.log(callback, "callbackcallback");
    console.log(name,"namenamename")
    console.log("Hello" + name);
    callback();
};

let afterGreet = () => {
    console.log("have a nice day");
}

greet("Sagal", afterGreet);


//classwork

function processNumber(number, callback) {
  callback(number);
}
function printSquare(number) {
  console.log(number * number);
}
processNumber(5, printSquare); 
processNumber(9, printSquare);
