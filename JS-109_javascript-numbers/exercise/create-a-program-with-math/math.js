/* JS-109: JavaScript Numbers - Create a Program With Math */
console.log('It works!');
/*
A simple program that calculates number of seconds in a day, hours in a week, or
minutes in a year.
*/
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52.143;
// Put a message in the console that lists the number of seconds in a day.
const secsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secsPerDay.toLocaleString()} seconds in a day.`);
// Put a message in the console the number of seconds I'm alive.
const myAge = 37;
const yearsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * myAge;
console.log(`I've been alive for more than ${yearsAlive.toLocaleString()} seconds!`);
