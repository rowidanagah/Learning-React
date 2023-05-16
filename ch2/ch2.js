/*                                  Destructuring Assignment                                         */

/* We can also destructure incoming `function arguments` */

var lordify = (regularPerson) => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};

var regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
};

lordify(regularPerson);

/* 
Instead of using dot notation syntax to dig into objects, we can destructure the values
that we need out of regularPerson:
*/

var lordify = ({ firstname }) => {
  console.log(`${firstname} of mine`);
};

lordify(regularPerson);

/* 
Destructuring is also more declarative, meaning that our code is more descriptive
about what we are trying to accomplish. By destructuring firstname, we declare that
we will only use the firstname variable. 
*/

// ------------------------------------------

/* Values can also be destructured from arrays.  */

var [firstResort] = ["Kirkwood", "Squaw", "Alpine"];
console.log(firstResort); // Kirkwood

var [, , last] = ["Kirkwood", "Squaw", "Alpine"];
console.log(last); // Alpine

var name = "dana";
var elevation = "d3";

var print = function () {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};
var funHike = { name, elevation, print };

funHike.print();

/* When defining object methods, it is no longer necessary to use the function keyword */

var obj = {
  name,
  elevation,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};

/* instead of  */

var obj = {
  name: name,
  elevation: elevation,
  powderYell: function () {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};

/*              The Spread Operator                                      */

function directions(...args) {
  var [start, ...remaining] = args; // not the diff without using the ... spread operator
  console.log(`before reversing ->  ${remaining}`);
  var [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
