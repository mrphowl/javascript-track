/*
JS-109: JavaScript Numbers - Working with Numbers

Code challenge: Numbers and Strings
*/
const width = '190px';
const totalImages = 10;
/*
Task 1: Imagine you have 10 images on a web page. Each image is 190 pixels wide. Using the two variables in this script, create a new variable named `totalWidth` that multiplies `width` by `totalImages`. Since the value of width is a string, you'll need to use a built-in JavaScript function to retrieve the number value.
*/
const totalWidth = parseInt(width) * totalImages;
