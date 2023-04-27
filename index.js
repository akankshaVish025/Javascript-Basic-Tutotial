// Javascript

// 1. Ways to [print in Javascript]
// console.log("Hello World!")
// alert("me");     #NOT USED IN MORDERN JAVASCRIPT
// document.write("This is document write")

// 2. Javascript  console API

// console.log("Hello World!", 4 + 6, "Another log")
// console.warn("This is warning");
// console.error("This is an error");

// 3. Javascript variables 
// what are variables? - Containers to store data values

/*
multi
line
Co0mment
*/

var number1 = 34;
var number2 = 56;
// console.log(number1+number2);

// 4. Data types in javascript

// Numbers
var num1 = 455;
var num2 = 56.67;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects

var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);

// Booleans

var a = true;
var b = false;

// console.log(a);
// console.log(b);
// console.log(a,b);

// undefined

// var und = undefined;   
// console.log(undefined);

// If i don't define this und as 'undefined' then to var und will remain undefined.
var und;
// console.log(und);

// var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in javascript
1. Primitive data types: undefined, null, number,string, boolean, symbol.
2. Reference data types: Arrays and Objects.
*/

// Arrays

var arr = [1, 2, "Neha", 3, 4];
// console.log(arr)

// 5. Operators in javascript

// 1. Arithmetic operator

var a = 100;
var b = 10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// 2. Assignment operators

var c = b;
c += 2;
// console.log(c);
c -= 2;
// console.log(c);
c *= 2;
// console.log(c);
c /= 2;
// console.log(c);

// 3. Comparison operators

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// 4. Logical operators

// logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical NOT
// console.log(!true);
// console.log(!false);

// 5. Function in javascript

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY - Do Not Repeat Yourself

c1 = avg(4, 6);
c2 = avg(14, 16);

console.log(c1, c2);
// console.log('6')
// console.log('Neha')

/*
Note : If in chrome console any number is printed(output) in blue colour then its a number and,
 if the colour is black then it is a String.
 i.e Number is represented in blue colour
 & String is represented in black colour.
 */

// 6. Conditionals in javascript

var age = 34;

// single if
// if(age>18){
//     console.log("You can apply for voter id")
// }

// // if-else ststement
// if(age > 8){
//     console.log("You can participate in competition");
// }
// else{
//     console.log("You cannot participate in competition");
// }

// // if-else Ladder
// if(age > 32){
//     console.log("You are not a kid");
// }
// else if(age > 26){
//     console.log("You are Grown up");
// }
// else if(age > 22){
//     console.log("Bacche nahi rahe");
// }
// else if(age > 18){
//     console.log("Yes bacche nahi rahe");
// }
// else{
//     console.log("You are a kid");
// }
// console.log("End of ladder");

// // Test 
// function Age(a){
//     if(Age > 8){
//         console.log("You can drink rasna");
//     }
//     else{
//         console.log("You cannot drink rasna");
//     }

// }
// result = Age(5);

// function Marks(m){    // Name of function must always start from capital letter
//     if (marks >50){
//         console.log('You are paased')
//     }
//     else{
//         console.log('You are failed')
//     }
// }

// output = Marks(67)

/** Arrays */

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// ***** Iterarting arrays with for loop
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// ***** Iterarting arrays with forEach loop  - BEST WAY to Iterate array in javascript*******

// arr.forEach(function(element) {
//     console.log(element);
// });

/***       While loop      ***/
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

/***     do while loop  ***/

// let j = 0;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


/***   Break   ***/

var arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

// ***** Iterarting arrays with for loop
for(var i=0; i<arr.length; i++) {
    if(i==2) {
        break;
    }
    console.log(arr[i]);
}