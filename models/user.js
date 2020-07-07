'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
		id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
				  	msg: 'firstName is required'
				}
			}
        },
        lastName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
				  	msg: 'lastName is required'
				}
			}
		},
		emailAddress: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: {
				msg: 'email already in use'
			},
			validate: {
				notEmpty: {
				  	msg: 'emailAddress is required'
				},
				isEmail: {
					msg: 'a valid email is required'
				},
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
				  	msg: 'password is required'
				}
			}
        },
	}, { sequelize });
	
	User.associate = (models) => {
		User.hasMany(models.Course, { foreignKey: 'userId' });
	};

    return User;
};
