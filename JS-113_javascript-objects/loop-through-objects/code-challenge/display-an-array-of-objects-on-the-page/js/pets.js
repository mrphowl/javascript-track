/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Display An Array of Objects on the Page
 */
const pet = [];

function createPet(name, type, breed, age, photo) {
  return {
    name: name,
    type: type,
    breed: breed,
    age: age,
    photo: photo
  };
}

pet.push(createPet('Sussie', 'Dog', 'Australian Shepherd', 4, 'img/aussie.jpg'));
pet.push(createPet('Hotdog', 'Dog', 'Dachshund', 5, 'img/dachshund.jpg'));
pet.push(createPet('Jeff', 'Dog', 'Golden Retriever', 6, 'img/golden.jpg'));
pet.push(createPet('Perry', 'Cat', 'Persian', 4, 'img/persian.jpg'));
pet.push(createPet('Dude', 'Dog', 'Pug', 3, 'img/pug.jpg'));
pet.push(createPet('Miming "the ulam thief"', 'Cat', 'Domestic Shorthair', 100, 'img/tabby.jpg'));

const petCard = pet => {
  return `
  <div>
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  </div>
  `;
};

let html = '';
for ( let i = 0; i < pet.length; i++ ) {
  html += petCard(pet[i]);
}

document.querySelector('main').innerHTML = html;
