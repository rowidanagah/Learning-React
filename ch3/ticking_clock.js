let clock = document.getElementById("ticking_clock");
// const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);
// Log Clock Time every 5 Seconds

// ====================================== follwing the delegations concept
const fiveSeconds = () => 5000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();

const log = (message) => {
  console.log(message);
  clock.innerText = `\n ${message}`;
};
var date = new Date();
/* 
serializeClockTime
    Takes a date object and returns a object for clock time that contains hours
    minutes and seconds.
civilianHours
    Takes the clock time object and returns an object where hours are converted to
    civilian time. For example: 1300 becomes 1 o’clock
appendAMPM
    Takes the clock time object and appends time of day, AM or PM, to that object.
 */

/* 
These three functions are used to transform data without changing the original. They
treat their arguments as immutable objects.
 */

const serializeClockTime = (data) => ({
  hours: data.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours < 12 ? "AM" : "PM",
});

/* 
Next we'll need a few higher order functions:
display
    Takes a target function and returns a function that will send a time to the target.
    In this example the target will be console.log.

formatClock
    Takes a template string and uses it to return clock time formatted based upon the
    criteria from the string. In this example, the template is “hh:mm:ss tt”. From ther,
    formatClock
prependZero
    Takes an object’s key as an argument and prepends a zero to the value stored
    under that objects key. It takes in a k
*/

// const display = (target = (time) =>
//   target(time)); /* target function used to handel time arg */

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const ze = (key) => (clockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

/* 
convertToCivilianTime
  A single function that will take clock time as an argument and transforms it into
  civilian time by using both civilian hours.

doubleDigits
  A single function that will take civilian clock time and make sure the hours,
  minutes, and seconds display double digits by prepending zeros where needed.
  
startTicking
  Starts the clock by setting an interval that will invoke a callback every second.
  The callback is composed using all of our functions. Every second the console is
  cleared, currentTime obtained, converted, civilianized, formatted, and displayed.
*/

const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    fiveSeconds()
  );

startTicking();
