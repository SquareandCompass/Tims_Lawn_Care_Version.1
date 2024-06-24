// File: backend/server.js

require('dotenv').config();  // Load the environment variables from the .env file
console.log('Environment Variables:', JSON.stringify(process.env, null, 2));  // Log all environment variables for debugging

const express = require('express');  // Import Express
const cors = require('cors');  // CORS for handling cross-origin requests
const jwt = require('jsonwebtoken');  // Import jwt for token verification

const connectDB = require('./config/db');  // Database connection logic

const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');

const app = express();  // Initialize the express application

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
});

connectDB();  // Connect to the database

// Middleware
app.use(cors());  // CORS Middleware
app.use(express.json());  // for parsing application/json

// Routes
app.get('/', (req, res) => res.send('Hello World!'));  // Root route to test server
app.use('/api/auth', authRoutes);  // Auth routes
app.use('/api/appointments', appointmentRoutes);  // Appointment routes

const PORT = process.env.PORT || 5000;  // Define the server port from environment variables or use default
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server

// This server setup includes environment variable loading and logging,
// database connection, CORS handling, JSON parsing middleware,
// and routing for authentication and appointments.
