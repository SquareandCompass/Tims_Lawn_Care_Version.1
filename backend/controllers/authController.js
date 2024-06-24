// File: backend/controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.createOrUpdateUser = async (req, res) => {
  const { sub, email, name } = req.body;

  try {
    let user = await User.findOne({ auth0Id: sub });

    if (user) {
      user.email = email;
      user.name = name;
      await user.save();
    } else {
      user = new User({
        auth0Id: sub,
        email,
        name
      });
      await user.save();
    }

    // Token generated without an expiration
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// This file contains the authentication controller logic.
// It's used in the auth routes to handle user creation/update after Auth0 authentication
