const express = require('express'); // load express module

const app = express(); // initialize express??

app.get('/', (req, res) => res.send('Hello world!')); // http://localhost:4000/ will show the text here.

const port = process.env.PORT || 4000; // Decides which port the server is running on

app.listen(port, () => console.log(`Server running on port ${port}`)); // Prints out port number in console
