/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Build an Object Challenge
 */
/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
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
pet.push(createPet('Miming', 'Cat', 'Domestic Shorthair', 100, 'img/tabby.jpg'));

console.log(pet);
