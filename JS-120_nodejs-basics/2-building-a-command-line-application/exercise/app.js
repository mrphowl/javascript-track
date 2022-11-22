/**
 * JS-120: Node.js Basics
 * 
 * Exercise: Profile Search
 */
const https = require('https');

// Print the data
function printMessage(username, badgeCount, points) {
  const badgeCountText = count => `${count.toLocaleString()} ${count > 1 ? 'total badges' : 'badge'}`;
  const pointsText = points => `${points.toLocaleString()} ${points > 1 ? 'points' : 'point'} in JavaScript`;
  const message = `${username} has ${badgeCountText(badgeCount)} and ${pointsText(points)}.`;
  console.log(message);
}

function getProfile(username) {
  const profileURL = `https://teamtreehouse.com/profiles/${username}.json`;
  // Connect to the API URL (https://teamtreehouse.com/profiles/codeandtheory.json)
  const request = https.get(
    profileURL,
    response => {
      let body = '';

      // Read the data
      response.on('data', data => {
        body += data.toString();
      });

      // Parse the data
      response.on('end', () => {
        let profile = JSON.parse(body);
        printMessage(
          username,
          profile.badges.length,
          profile.points.JavaScript
        );
      })
    }
  );
}

// getProfile('codeandtheory');
const users = process.argv.slice(2);
users.forEach(getProfile);