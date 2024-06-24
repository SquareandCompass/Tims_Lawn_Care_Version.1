// File: backend/routes/auth.js

const express = require('express');
const router = express.Router();
const { createOrUpdateUser } = require('../controllers/authController');

router.post('/user', createOrUpdateUser);

module.exports = router;

// This file defines the authentication routes.
// It's imported in server.js and used to handle auth-related API endpoints.