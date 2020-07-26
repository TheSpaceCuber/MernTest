const mongoose = require('mongoose');
const express = require("express");
const foodRoutes = express.Router();

let foodSchema = require("../../models/happenings");

foodRoutes.route('/').get(function(req, res) {
    
    foodSchema.find({}, {_id:1, channel_name:1, message_link:1, message_date:1, message_content:1}, 
        function (err, food) {
        if (err) {
            console.log(err)
        } else {
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)
            const search = req.query.search
            const filteredFood = food.filter(
                content => content.message_content.toLowerCase().includes(search.toLowerCase())
                || content.channel_name.toLowerCase().includes(search.toLowerCase())
                )
            const total_pages = Math.ceil(filteredFood.length / limit)

            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            const result = {
                page: page,
                limit: limit,
                total_pages: total_pages,
                hasMore: (page < total_pages),
                search: search
            } 
            result.food = filteredFood.slice(startIndex, endIndex)

            res.json(result)
        }
    }).sort({message_year:-1, message_month:-1, message_day:-1});
});

module.exports = foodRoutes;