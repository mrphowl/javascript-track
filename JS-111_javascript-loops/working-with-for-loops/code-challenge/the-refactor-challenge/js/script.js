/** JS-111: JavaScript Loops
 * 
 * Code challenge: The Refactor Challenge
 */

/**
 * Random RGB color generator
 * @returns {string} rgb with random color value
 */
const randomRGB = () => {
  // Pick a number from 0 - 255
  const getRandomColorValue = () => Math.floor(Math.random() * 256);
  return `rgb( ${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()} )`;
}

let html = '';
// Create 1 div with a random color
for ( let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}
// Set html as innerHTML of <main>
document.querySelector('main').innerHTML = html;
