'use strict';
const tableName = 'tb_user'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	return queryInterface.createTable(
    	tableName,
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false
				},
			}
		)	
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable({ tableName });
  }
};

