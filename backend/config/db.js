// File: backend/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  // Debug: Print all environment variables
  console.log('All environment variables:', JSON.stringify(process.env, null, 2));

  const uri = process.env.MONGO_URI;  // Retrieve the URI from environment variables
  console.log(`Connecting to MongoDB at URI: ${uri}`);  // Debug statement
  console.log(`Database name extracted from URI: ${uri.split('/').pop()}`); // More detailed debug statement

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit process with failure on connection error
  }
};

module.exports = connectDB;

// This file contains the database connection logic.
// It's imported and used in server.js to establish a connection to MongoDB.
