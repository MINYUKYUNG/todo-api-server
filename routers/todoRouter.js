const router = require('express').Router();
const todoController = require('../controllers/todoController');
const {
  getAllTodo,
  getTodo,
  postTodo,
  putTodo,
  deleteTodo,
} = todoController;

router.post('/', getAllTodo);
router.get('/:todoId', getTodo);
router.post('/add', postTodo);
router.put('/:todoId', putTodo);
router.delete('/:todoId', deleteTodo);

module.exports = router;
