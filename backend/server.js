// Fast and lightweight web framework for Node.js.
const express = require('express'); 

// Node.js body parsing middleware.
const bodyParser = require('body-parser');

// Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page
// to be requested from another domain outside the domain from which the first resource was served.
const cors = require('cors'); 

// The path module provides utilities for working with file and directory paths.
const path = require('path'); 

const passport = require("passport");
const users = require("./routes/api/users");
const happenings = require("./routes/api/happenings");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  
app.use(bodyParser.json());
app.use(cors());
// require('./database'); // ???? do i even need this

// ===================MONGODB ACCESS========================
const mongoose = require('mongoose'); 
// DB Config
const db = require("./config/keys").mongoURI;

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
// ===================MONGODB ACCESS========================


// ===================API========================
// API is some kind of features. In this case, we're creating
// some kind of user feature.
// const users = require('/api/users');
// app.use('/api/users', users);
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/happenings", happenings);

// ===================API========================

/*
 * Needed for deployment, links to the build folder in frontend
 * express.static delivers static files which are the ones built 
 * when npm run build is run on a React project
 */
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

/*  
 * When hosting your application on another service (like Heroku, Nodejitsu, and AWS), 
 * your host may independently configure the process.env.PORT variable for you;
 * hence this code sets the port to whatever is in the environment variable PORT, or 3000 if there's nothing there 
 */
const port = process.env.PORT || 5000; 

// creates the Node.js web server at the specified host and port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


