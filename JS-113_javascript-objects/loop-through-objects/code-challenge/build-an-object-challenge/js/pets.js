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
createPet('Miming', 'Cat', 'Domestic Shorthair', 100, 'img/tabby.jpg');

console.log(pets);
