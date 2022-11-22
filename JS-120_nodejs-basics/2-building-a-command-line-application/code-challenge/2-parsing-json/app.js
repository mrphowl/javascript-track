/**
 * JS-120: Node.js Basics - Building a COmmand Line Application
 * 
 * Code challenge: Parsing JSON
 */
const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';
// Task 1: Create a new variable jsonObject and then use the native JSON object to parse the jsonString and assign it to jsonObject.
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
