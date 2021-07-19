const db = requestAnimationFrame('../models');

module.export = {

    create: function (req, res){
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => {
                if (err.name === 'ValidationError'){
                    console.log('Cannot Validate', err);
                    res.status(422).json(err);
                }else{
                    console.log(err);
                    res.satus(500).json(err);
                }
            });
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
