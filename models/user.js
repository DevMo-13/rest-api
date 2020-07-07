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
					msg: 'firstName cannot be null'
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
					msg: 'lastName cannot be null'
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
					msg: 'emailAddress cannot be null'
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
					msg: 'password cannot be null'
				},
				notEmpty: {
				  	msg: 'password is required'
				}
			}
		},
	}, { sequelize });
	
	User.associate = (models) => {
		User.hasMany(models.Course, {
			as: "courses",
			foreignKey: {
			  name: 'userId',
			  allowNull: false
		}})
	};

    return User;
};
