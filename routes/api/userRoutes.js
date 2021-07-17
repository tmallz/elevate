const router = require('express').router();
const UserController = require('../../client/controllers/UserControllers')

router.rout('/')
.post(UserController.create)

module.exports = router;