const myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello world';

/* starts the course here */

// this is anther comment

let fourteen = 7 + 7;
let two = 2;
let three = 3;
let hello_word = "hello " + "world!";
let ten = two * 5;
let myVariable = "bob";
let one = 7 / 5;

let isEqual = one === three;
console.log(isEqual, "is on === three");

/* conditinals */
let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awww, but chocolate is my favorite...");
}

// functions
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(one, three));
console.log(multiply(ten, one));

// events

document.querySelector("html").onclick = function() {
    alert("ouch! stop poking me!");
}

// same thing
let myHtml = document.querySelector("html");
myHtml.onclick = function() {
    alert("ouch two! stop pocking me!");
};
