/**
 * JS-120: Node.js Basics - Building a dictionary app
 *
 * Code challenge: Retrieving and parsing data
 */
const https = require('https');
// Load the environment variables.
require('dotenv').config();

// Get the words that will be passed to the API
const keywords = process.argv.slice(2);

function printDefinition(definition) {
  // Get the first item in the list. This is most likely the exact match.
  // This could either be an object if the word is found or
  // an array of similar words if the word is not found.
  const word = definition.shift();

  // 
  if ( typeof word === 'object' ) {
    // print the word and kind
    // Example: salmon (noun)
    console.log(`${word.meta.id} (${word.fl})`);
    // print word definitions in bullet (dash) list
    word.shortdef.forEach( text => console.log(`- ${text}`));
  } else {
    // Check if we got suggested words
    if( definition.length ) {
      // Take the last item so we can insert the word 'and' if there are more
      // words.
      const lastTerm = definition.pop();
      // This is our template if the API returns similar words and not the
      // definition.
      let suggestionList = 'Try words like ';
      // Join the rest of the words so we get a comma-separated string and then
      // add the word 'and' then finally the last word in the list.
      // If there isn't any other words, just add the last word.
      if( definition.length ) {
        suggestionList += `${definition.join(', ')}, and ${lastTerm}.`;
      } else {
        suggestionList += `${lastTerm}.`;
      }
      // Print the string and similar words
      console.log(`I don't know that word. ${suggestionList}`);
    } else {
      console.log(`I don't know that word.`);
    }
  }
}

function getDefinition(keyword) {
  const baseUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const apiUrl = `${baseUrl}/${keyword}?key=${apiKey}`;

  try {
    const request = https.get(
      apiUrl,
      response => {
        let body = '';

        // Read the data
        response.on( 'data', data => {
          body += data.toString();
        });

        // Parse the data
        response.on( 'end', () => {
          let definition = JSON.parse(body);
          printDefinition(definition);
        });

        // Handle error
        response.on( 'error', (error) => console.log(`Error: ${error.message}`) );
      }
    );
  } catch ( error ) {
    console.error( error.message );
  }
}

if( keywords.length ) {
  // Fetch the definition for each word
  keywords.forEach(getDefinition);
} else {
  console.log('Please specify a keyword that needs to be defined.');
  console.log('Example: `node app.js apple`');
}
