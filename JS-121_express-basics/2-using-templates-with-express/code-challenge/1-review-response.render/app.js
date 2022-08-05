/**
 * JS-121: Express Basics - Using Templates With Express
 *
 * Code challenge: Review Response.render
 */
const express = require('express');
const posts = require('./mock/posts.json');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  // Task 1: In the root route, render the "main.pug" template.
  // Task 2: Pass the posts object to your template, naming it "posts".
  res.render('main', { "posts": posts } );
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});
