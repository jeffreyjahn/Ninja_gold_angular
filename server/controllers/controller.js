const mongoose = require('mongoose');

const Game = mongoose.model('games');

module.exports={
    index: (req, res)=>{
        Game.find({}, (err, games)=>{
            console.log(err);
            console.log(games);
            return res.json(games);
        });
    },
    game: (req, res)=>{
        Game.findOne({_id: req.params.game_id}, (err, game)=>{
            if(err) {
                return res.redirect('/');
            };
            return res.json(game);
        });
    },
    newGame:(req, res)=>{
        var newGame = new Game(req.body);
        newGame.save((err)=>{
            if(err){
                console.log("wat", err);
                for(var key in err.errors){
                    req.flash('newGame', err.errors[key].message);
                }
                res.redirect('/');
            } else{
                res.redirect('/');
            }
        });
    },
    updateGame:(req, res)=>{
        Game.findOne({_id: req.params.game_id}, (err, game)=>{
            if(err) {
                return res.redirect('/');
            };
            return res.json(game);
        });
    },
    removeGame:(req, res)=>{
        Game.remove({_id: req.params.game_id}, (err)=>{
            res.redirect('/');
        });
    },
}