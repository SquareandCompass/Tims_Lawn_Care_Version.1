// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Define Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
