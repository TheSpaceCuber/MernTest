const mongoose = require('mongoose');
const express = require("express");
const happeningsRoutes = express.Router();

let happenings = require("../../models/happenings");

happeningsRoutes.route('/').get(function(req, res) {
    happenings.find({}, {_id:1, message_link:1, message_date:1, message_content:1}, 
        function (err, happenings) {
        if (err) {
            console.log(err)
        } else {
            res.json(happenings)
        }
    }).sort({message_year:-1, message_month:-1, message_day:-1});
});

module.exports = happeningsRoutes;
