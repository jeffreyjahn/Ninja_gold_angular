const game = require('../controllers/controller')

module.exports= (app)=>{
    app.get('/', (req, res)=>{
        game.index(req,res);
    })
    app.post('/new', (req, res)=>{
        game.newGame(req, res);
    })
    app.get('/:game_id/', (req, res)=>{
        game.game(req,res);
    })
    app.put('/update/:game_id/', (req, res)=>{
        game.updateGame(req,res);
    })
    app.delete('/remove/:game_id/', (req, res)=>{
        game.removeGame(req,res);
    })
}