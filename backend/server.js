// Fast and lightweight web framework for Node.js
const express = require('express'); 

// Node.js body parsing middleware
const bodyParser = require('body-parser');

// Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page
// to be requested from another domain outside the domain from which the first resource was served.
const cors = require('cors'); 

const path = require('path'); // needed for deployment/production
const app = express(); // initialize express??

app.use(bodyParser.json());
app.use(cors());
// require('./database'); // ???? do i even need this

// ===================MONGODB ACCESS========================
const mongoose = require('mongoose'); 
// Atlas credentials
const connection = "mongodb+srv://User0:Y9juVI7j5pq1spW9@cluster0-asita.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
// ===================MONGODB ACCESS========================


// ===================API========================
// API is some kind of features. In this case, we're creating
// some kind of user feature.
// const users = require('/api/users');
// app.use('/api/users', users);
// ===================API========================

// Needed for deployment, links to the build folder in frontend
// express.static delivers static files which are the ones built 
// when npm run build is run on a React project
app.use(express.static(path.join(__dirname, '../client/build')))
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
*/
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

// app.get('/', (req, res) => res.send('Hello world!')); // http://localhost:4000/ will show the text here.

// --------------------------------------------------------------------
const port = process.env.PORT || 5000; // Decides which port the server is running on

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

