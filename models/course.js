'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Sequelize.Model {}
    Course.init({
		id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'title cannot be null'
				},
				notEmpty: {
				  	msg: 'title is required'
				}
			}
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'description cannot be null'
				},
				notEmpty: {
				  	msg: 'description is required'
				}
			}
		},
		estimatedTime: {
            type: Sequelize.STRING,
		},
		materialsNeeded: {
            type: Sequelize.STRING,
        },
	}, { sequelize });
	
	Course.associate = (models) => {
		Course.belongsTo(models.User, {
			as: "user",
			foreignKey: {
			  name: 'userId',
			  allowNull: false
		}})
	};

    return Course;
};
