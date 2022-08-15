const mongoose = require('mongoose');

const MatchSchema = {
    
    team1: {
        type: String,

        required: [true, "Team name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
    },

    team2: {
        type: String,

        require: [true, "Team name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
    },

    date: {
        type: Date,

        require:[true]
    },

    location:{
        type: String,

        require: [true, "Please add Stadium"]
    },

    group: {
        type: String,

        require: [true, "Add an elimination Group"]
    }

};



module.exports = mongoose.model("Match", MatchSchema);