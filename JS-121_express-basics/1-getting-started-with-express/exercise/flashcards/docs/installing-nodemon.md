# Installing Nodemon

Nodemon is a tool for Node.js development which detects changes in the directory and automatically restarts the node application.

In the command line, install nodemon globally by running

```sh
> npm install -g nodemon
```

After installation, open `package.json` and change the value of "main" to `app.js` since this is our mian file for this project.

```json
{
  "name": "flashcards",
  "version": "1.0.0",
  "description": "",
  "main": "app.js", // <---- HERE
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.2"
  }
}
```

To start the application, run

```sh
> nodemon
```

## Documentation

More information are available in https://www.npmjs.com/package/nodemon.
