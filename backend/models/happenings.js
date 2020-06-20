const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let happenings = new Schema ({
    happenings_channel: {
        type: String
    },
    happenings_content: {
        type: String
    }
});

module.exports = mongoose.model('happenings', happenings);
