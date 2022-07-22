// 1. Declare variables and capture input.
const instruction = alert('Enter some words that match the following description.');
const inviteeName = prompt("Your name");
const adverb = prompt("Adverb");
const noun = prompt("Noun");
const celebrantName = prompt("Somebody else's name");
const theme = prompt("Theme");
const place = prompt("A place");
const dayOfWeek = prompt("Day of the week");
const time = prompt("Time of the day");
const verb = prompt("A verb");
const animal = prompt("An animal");
const bodyPart = prompt("A body part");
const contactInformation = prompt("Contact information");

// 2. Combine the input with other words to create a story.
const invitationFront = `<p>Dear ${inviteeName},<br>
You are ${adverb} <strong>invited</strong>!<br>
It's time for a ${noun}!</p>`;
const invitationContent = `<p>${celebrantName} is having a ${theme} party!</br>It's going to be at ${place} on ${dayOfWeek}.</p>
<p>Please make sure to show up at ${time}, or else you will be required to ${verb} a/an ${animal} with your ${bodyPart}.</p>
<p>RSVP at ${contactInformation}.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = invitationFront + invitationContent;
