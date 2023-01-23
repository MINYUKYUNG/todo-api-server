const db = require('../models');
const { Op, users } = db;

const getUser = async (req, res) => {
  const userInfo = req.body; // email, password

  const user = await users.findOne({
    attributes: ['id'],
    where: {
      email: userInfo.email,
      password: userInfo.password,
    },
  });

  if (user) res.send(user);
  else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

const checkUser = async (email, password, id = null) => {
  const invaildEmail = await users.findOne({
    attributes: ['id'],
    where: {
      email,
      id: { [Op.ne]: id },
    },
  });
  const invaildPassword = await users.findOne({
    attributes: ['id'],
    where: {
      password,
      id: { [Op.ne]: id },
    },
  });

  if (invaildEmail && invaildPassword) return { message: '이미 존재하는 이메일과 비밀번호입니다' };
  if (invaildEmail) return { message: '이미 존재하는 이메일입니다' };
  if (invaildPassword) return { message: '이미 존재하는 비밀번호입니다' };

  return null;
};

const postUser = async (req, res) => {
  const newUser = req.body; // email, password

  const message = await checkUser(newUser.email, newUser.password);
  if (message) {
    res.status(404).send(message);
    return;
  }

  await users.create(newUser);
  const user = await users.findOne({
    attributes: ['id'],
    where: {
      email: newUser.email,
      password: newUser.password,
    },
  });
  res.send(user);
};

const putUser = async (req, res) => {
  const newInfo = req.body; // id, email, password

  const message = await checkUser(newInfo.email, newInfo.password, newInfo.id);
  if (message) {
    res.status(404).send(message);
    return;
  }

  const [result] = await users.update(newInfo, { where: { id: newInfo.id } });
  if (result) res.send({ message: '사용자 정보가 변경되었습니다' });
  else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const deleteUserCount = await users.destroy({ where: { id: userId } });
  if (deleteUserCount) res.send({ message: '사용자 탈퇴가 완료되었습니다' });
  else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
