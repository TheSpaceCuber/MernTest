// Fast and lightweight web framework for Node.js
const express = require('express'); 

// Node.js body parsing middleware
const bodyParser = require('body-parser');

// Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page
// to be requested from another domain outside the domain from which the first resource was served.
const cors = require('cors'); 


// A Node.js framework which lets us access MongoDB in an object-oriented way.
const mongoose = require('mongoose'); 
const connection = "mongodb+srv://User0:Y9juVI7j5pq1spW9@cluster0-asita.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
// ------------------------------------------------------------------------

const path = require('path'); // needed for deployment/production
const app = express(); // initialize express??

// --------------------------------------------------------------------
app.get('/', (req, res) => res.send('Hello world!')); // http://localhost:4000/ will show the text here.

// --------------------------------------------------------------------
const port = process.env.PORT || 4000; // Decides which port the server is running on

app.listen(port, () => console.log(`Server running on port ${port}`)); // Prints out port number in console


