/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Display An Array of Objects on the Page
 */
const pets = [];

function createPet(name, type, breed, age, photo) {
  const pet = {
    name: name,
    type: type,
    breed: breed,
    age: age,
    photo: photo
  };
  
  pets.push(pet);
  
  return pet;
}

createPet('Sussie', 'Dog', 'Australian Shepherd', 4, 'img/aussie.jpg');
createPet('Hotdog', 'Dog', 'Dachshund', 5, 'img/dachshund.jpg');
createPet('Jeff', 'Dog', 'Golden Retriever', 6, 'img/golden.jpg');
createPet('Perry', 'Cat', 'Persian', 4, 'img/persian.jpg');
createPet('Dude', 'Dog', 'Pug', 3, 'img/pug.jpg');
createPet('Miming "the ulam thief"', 'Cat', 'Domestic Shorthair', 100, 'img/tabby.jpg');

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

const main = document.querySelector('main');

for ( let i = 0; i < pets.length; i++ ) {
  main.insertAdjacentHTML('beforeend', petCard(pets[i]));
}
