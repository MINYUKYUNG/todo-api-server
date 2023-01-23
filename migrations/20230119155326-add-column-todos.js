/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('todos', 'done', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
    await queryInterface.addColumn('todos', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('todos', 'done');
    await queryInterface.removeColumn('todos', 'user_id');
  },
};
