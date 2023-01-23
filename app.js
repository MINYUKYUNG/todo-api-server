const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.query);
  next();
});

const todoRouter = require('./routers/todoRouter');
const userRouter = require('./routers/userRouter');

app.use('/todo', todoRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(port, 'Server is listening...');
});
