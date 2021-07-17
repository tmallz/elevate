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

}
