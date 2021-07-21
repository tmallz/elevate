const router = require('express').Router();
const UserController = require('../../controllers/UserControllers')

router.route('/')
.post(UserController.create)

module.exports = router;