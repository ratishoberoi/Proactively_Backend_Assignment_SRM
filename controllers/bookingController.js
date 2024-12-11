const { Speaker, Booking } = require('../models');

exports.listSpeakers = async (req, res) => {
  const speakers = await Speaker.findAll();
  res.status(200).json(speakers);
};

exports.bookSession = async (req, res) => {
  const { speakerId, date, timeSlot } = req.body;
  const existingBooking = await Booking.findOne({ where: { speakerId, date, timeSlot } });
  if (existingBooking) {
    return res.status(400).json({ error: 'Time slot already booked' });
  }
  const booking = await Booking.create({ userId: req.user.id, speakerId, date, timeSlot });
  res.status(201).json(booking);
};
