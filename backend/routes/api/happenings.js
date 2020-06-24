const mongoose = require('mongoose');
const express = require("express");
const happeningsRoutes = express.Router();

let happeningsSchema = require("../../models/happenings");

happeningsRoutes.route('/').get(function(req, res) {
    
    happeningsSchema.find({}, {_id:1, message_link:1, message_date:1, message_content:1}, 
        function (err, happenings) {
        if (err) {
            console.log(err)
        } else {
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)
            const total_pages = Math.ceil(happenings.length / limit)

            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            const result = {
                page: page,
                limit: limit,
                total_pages: total_pages,
                has_more: (page < total_pages)
            } 
            result.happenings = happenings.slice(startIndex, endIndex)

            res.json(result)
        }
    }).sort({message_year:-1, message_month:-1, message_day:-1});
});

module.exports = happeningsRoutes;
  