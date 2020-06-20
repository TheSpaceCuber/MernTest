const mongoose = require('mongoose');
const express = require("express");
const happeningsRoutes = express.Router();

let happenings = require("../../models/happenings");

happeningsRoutes.route('/').get(function(req, res) {
    happenings.find(function (err, happenings) {
        if (err) {
            console.log(err)
        } else {
            res.json(happenings)
        }
    });
});

module.exports = happeningsRoutes;
