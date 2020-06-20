const express = require("express");
const app = express();
const bodyPareser = require("body-parser");
const mongoose = require("mongoose");
const happenings = require("../models/happenings");
const happeningsRoutes = require("../routes/api/happenings");

app.use("/happenings", happeningsRoutes);







