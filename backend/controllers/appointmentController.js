// File: backend/controllers/appointmentController.js

const Appointment = require('../models/Appointment');

// Controller function to create a new appointment
exports.createAppointment = async (req, res) => {
  // Log incoming request data
  console.log('Creating appointment. Request body:', req.body);
  console.log('User ID from token:', req.user.id);

  try {
    // Create new appointment object
    const newAppointment = new Appointment({
      user: req.user.id,
      ...req.body
    });
    console.log('New appointment object:', newAppointment);

    // Save the appointment to the database
    await newAppointment.save();
    console.log('Appointment saved successfully');

    // Send successful response
    res.status(201).json(newAppointment);
  } catch (error) {
    // Log and send error response if something goes wrong
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Controller function to get all appointments
exports.getAppointments = async (req, res) => {
  try {
    // Find all appointments without user-based filtering
    const appointments = await Appointment.find();
    // Send the appointments as the response
    res.json(appointments);
  } catch (error) {
    // Log the error and send an appropriate error response
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
