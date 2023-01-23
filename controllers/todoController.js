const db = require('../models');
const { todos } = db;

const getAllTodo = async (req, res) => {
  const todoInfo = req.body;

  const todoList = await todos.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    where: { user_id: todoInfo.user_id },
  });
  res.send(todoList);
};

const getTodo = async (req, res) => {
  const { todoId } = req.params;

  const todo = await todos.findOne({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    where: { id: todoId },
  });

  if (todo) res.send(todo);
  else res.status(404).send({ message: '존재하지 않는 할 일 ID 입니다' });
};

const postTodo = async (req, res) => {
  const newTodo = req.body;

  await todos.create(newTodo);
  res.send({ message: '투두가 추가되었습니다' });
};

const putTodo = async (req, res) => { // doneTodo도 여기에 포함시키자
  const { todoId } = req.params;
  const newInfo = req.body;

  const result = await todos.update(newInfo, { where: { id: todoId } });
  if (result[0]) {
    const todo = await todos.findOne({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: { id: todoId },
    });
    res.send(todo);
  } else res.status(404).send({ message: '존재하지 않는 할 일 ID 입니다' });
};

const deleteTodo = async (req, res) => { // 일단 임시로 남겨놓음
  const { todoId } = req.params;

  const deleteTodoCount = await todos.destroy({ where: { id: todoId } });
  if (deleteTodoCount) res.send({ message: `할 일 ID_${todoId} 삭제되었습니다` });
  else res.status(404).send({ message: '존재하지 않는 할 일 ID 입니다' });
};

module.exports = {
  getAllTodo,
  getTodo,
  postTodo,
  putTodo,
  deleteTodo,
};
