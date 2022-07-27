/** JS-111: JavaScript Loops
 * 
 * Code challenge: The Refactor Challenge
 */

/**
 * Random RGB color generator
 * @returns {string} rgb with random color value
 */
const randomRGB = () => {
  const getRandomColorValue = () => Math.floor(Math.random() * 256);
  const red = getRandomColorValue();
  const blue = getRandomColorValue();
  const green = getRandomColorValue();
  return `rgb( ${red}, ${green}, ${blue} )`;
}

let html = '';
// Create 1 div with a random color
for ( let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}
// Set html as innerHTML of <main>
document.querySelector('main').innerHTML = html;
