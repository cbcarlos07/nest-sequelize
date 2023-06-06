'use strict';
const tableName = 'tb_estatuto'
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
				texto: {
					type: Sequelize.TEXT,
					allowNull: false
				},
			}
		)	
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable({ tableName });
  }
};

