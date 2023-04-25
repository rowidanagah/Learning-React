let content = document.getElementById("ch3");
content.innerHTML = "Voala Rowida !";

// you can declare functions with the var keyword the same way you can declare
// strings, numbers, or any other variables:

var log = function (msg) {
  console.log(msg);
  content.innerText += `\n  ${msg}`;
};

log("In JavaScript functions are variables");

// using an arrow function

var log = (msg) => {
  console.log(msg);
  content.innerText += `\n  ${msg}`;
};

log("In JavaScript functions are variables using an arrow function");

// Since functions are variables, we can add them to objects:
const obj = {
  msg: "adding functions to objects",
  message: "They can be added to objects like variables",
  log(msg) {
    console.log(msg);
    content.innerText += `\n  ${msg}`;
  },
};
obj.log(obj.msg);
obj.log(obj.message);

// Since functions are variables, we can add them to arrays:

const arr = [
  "adding functions to arrays",
  (log) => console.log(log),
  "like variables",
  (msg) => {
    console.log(msg);
    content.innerText += `\n  ${msg}`;
  },
  (test) => {
    console.log(test);
    content.innerText += `\n  ${test}`;
  },
  "They can be inserted into arrays",
];

arr[4](arr[5]);
arr[1](arr[0]);
arr[3](arr[2]);
// They can be inserted into arrays
// like variables

// ======================================= send function as an argument
// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = (logger) =>
  logger("They can be sent to other functions as arguments");
insideFn(log);

// They can also be returned from other functions, just like variables:
const createScream = function (logger) {
  // getting logger functions as a parameter
  console.log("new func return");
  return function (msg) {
    // getting a normal msg text as an argument
    logger(`${msg} from return function  !!!!!!!`);
    // content.innerText += `\n  ${msg} from return function  !!!!!!!`;
    // console.log(`\n  ${msg.toUpperCase()} from return function  !!!!!!!`)
  };
};

const screamingfunc = (func) => {
  func("voala");
  console.log("ur own testing dumb");
};

screamingfunc(log);
createScream(log("functions can be returned from other functions"));

const scream = createScream(log);
scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");

const createScreamarrow = (logger) => (message) =>
  logger(message.toUpperCase() + "!!!");

// mutability in factional programming
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
/* 
This function copies the original list to a new array and then adds a new object con‐
taining the color’s title to that copy. It is immutable. */

const addColor = (title, list) => [...list, { title }];

console.log(addColor("new title", list));
// data transformation in js function programming

const schools = ["Yorktown", "Washington & Lee", "Wakefield"];

console.log(schools.join(", "))
