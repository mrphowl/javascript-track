# Installing Express

1. Create the project root folder

    ```sh
    > mkdir flashcards
    ```

2. Go to the newly created project folder

    ```sh
    > cd flashcards
    ```

3. Run `npm init -y` to initialize the project  

    ```sh
    > npm init -y
    Wrote to /Users/pauleliczaradraneda/github/javascript-track/JS-121_express-basics/exercise/flashcards/package.json:

    {
      "name": "flashcards",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```
4. Install Expres 4.15.2

    ```sh
    npm install express@4.15.2 --save
    ```

    After installing, we can find the express package in `package.json` under **"dependencies"**.

    ```json
    {
      "name": "flashcards",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
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

5. Open or create the file `app.js` and and import express module.

    ```javascript
    const express = import('express');
    ```

    We can use the express variable to access all the properties and methods of the express module.

## Documentation

Documentation and guides can be found in https://expressjs.com.