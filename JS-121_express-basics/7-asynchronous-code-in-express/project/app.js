const e = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

function asyncHandler(cb) {
  return async ( req, res, next ) => {
    try {
      await cb(req, res, next);
    } catch ( err ) {
      res.render('error', { error: err });
    }
  };
}

//CALL BACKS
function getUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const users = JSON.parse(data);
        resolve(users);
      }
    });
  });
}

app.get('/', asyncHandler( async ( req, res ) => {
  const users = await getUsers();
  const pageData = {
    title: 'Users',
    users: users.users
  };
  res.render('index', pageData);
}));

app.listen(3000, () => console.log('App listening on port 3000!'));
