// File: backend/routes/appointments.js

const express = require('express');
const router = express.Router();

// Import the necessary functions from the appointment controller
const { createAppointment, getAppointments } = require('../controllers/appointmentController');

// Middleware to authenticate requests
const authMiddleware = require('../middleware/auth');

// POST endpoint to create a new appointment
router.post('/', authMiddleware, createAppointment);

// GET endpoint to fetch all appointments for the authenticated user
router.get('/', authMiddleware, getAppointments);

// Export the router for use in the main server file
module.exports = router;
