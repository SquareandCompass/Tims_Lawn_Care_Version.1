// File: backend/middleware/auth.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
  console.log('Auth middleware called');
  const token = req.header('x-auth-token');

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  console.log('Received token:', token);

  // Additional check for environment variable availability
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined in environment');
    return res.status(500).json({ msg: 'Server misconfiguration error' });
  }

  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded; 
    next();
  } catch (err) {
    console.error('Token verification failed:', err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
