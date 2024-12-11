const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { sendOTP } = require('../utils/email');

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ firstName, lastName, email, password: hashedPassword });
  await sendOTP(email);
  res.status(201).json({ message: 'User registered. Please verify OTP.' });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  if (otp === '123456') {
    await User.update({ isVerified: true }, { where: { email } });
    res.status(200).json({ message: 'User verified' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id, email }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
