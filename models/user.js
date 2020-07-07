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
				notNull: {
					msg: 'a first name must be entered'
				},
				notEmpty: {
				  	msg: 'firstName is required'
				}
			}
        },
        lastName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'a last name must be entered'
				},
				notEmpty: {
				  	msg: 'lastName is required'
				}
			}
		},
		emailAddress: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: {
				args: true,
				msg: 'email already in use'
			},
			validate: {
				notNull: {
					msg: 'an email address must be entered'
				},
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
				notNull: {
					msg: 'a password must be entered'
				},
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
