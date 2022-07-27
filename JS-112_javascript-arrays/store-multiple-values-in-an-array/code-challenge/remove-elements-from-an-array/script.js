/**
 * JS-112: JavaScript Arrays - Store Multiple Values In An Array
 * 
 * Code challenge: Remove Elements From An Array
 */
const orderQueue = ['1XT567437','1U7857317','1I9222528'];
// Task 1: Declare a new variable named shipping. Remove the first element from
// the orderQueue array and assign it to the shipping variable.
const shipping = orderQueue.shift();
// Task 2: Declare a new variable named cancelled. Remove the last item from
// the orderQueue array and assign it to the variable cancelled.
const cancelled = orderQueue.pop();
// Check work
console.log(`shipping: ${shipping}, cancelled: ${cancelled}, orderQueue: ${orderQueue}`);
