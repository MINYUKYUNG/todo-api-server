const router = require('express').Router();
const userController = require('../controllers/userController');
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = userController;

router.post('/signin', getUser);
router.post('/signup', postUser);
router.put('/', putUser);
router.delete('/:userId', deleteUser);

module.exports = router;
