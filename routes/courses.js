const express = require('express');
const router = express.Router();
const { authenticateUser } = require('./middleware/authenticateUser');
const asyncHandler = require('./middleware/asyncHandler');
const { User, Course } = require('../models');

// GET the current authenticated user.
router.get('/users', authenticateUser, (req, res) => {
	const { password, ...user } = req.currentUser
  	res.status(200).json(user);
});

// POST new user to database.
router.post('/users', asyncHandler(async (req, res) => {	
	try {
		const user = req.body;

		user.password = bcryptjs.hashSync(user.password);
		await User.create(user);
		res.status(201).location('/').end();
	} catch (error) {
		if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
			const errorMsg = [];

			error.errors.map((err) => errorMsg.push(err.message));
			res.status(400).json({ error: errorMsg });
		} else {
			next(error);
		};
	};
}));

module.exports = router;