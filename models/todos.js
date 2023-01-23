const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    static associate() {
    }
  }
  todos.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    repetition: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    done: DataTypes.BOOLEAN,
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'todos',
  });
  return todos;
};
