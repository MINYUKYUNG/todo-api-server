const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate() {
    }
  }
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
