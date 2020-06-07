const express = require("express");
const router = express.Router();

// used to hash passwords before storing them
const bcrypt = require("bcryptjs");

// used for authorization
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model

const User = require("../../models/User");
 

