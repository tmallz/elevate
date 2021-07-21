const db = require('../models');

module.export = {

    create: function (req, res){
        db.User.create(req.body)
        console.log(req)
            .then(dbUser => res.json(dbUser))
            console.log(dbUser)
            .catch(err => res.status(422).json(err));;
    },

    finaAll: function(req, res) {
        db.User
            .find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(404).json(err));
    },

    findById: function (req, res){
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}
