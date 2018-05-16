const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name:{type: String, required:true},
    score: {type: Number, default: 0, required:true},
    savedGame: {type: Number},
}, {timestamps: true});

const Game = mongoose.model('games', gameSchema);