const { Speaker } = require('../models');

exports.setupSpeakerProfile = async (req, res) => {
  const { expertise, pricePerSession } = req.body;
  const speaker = await Speaker.create({ ...req.body, userId: req.user.id });
  res.status(201).json(speaker);
};
