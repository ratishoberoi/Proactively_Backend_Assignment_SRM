const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const speakerRoutes = require('./routes/speaker');
const bookingRoutes = require('./routes/booking');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/speakers', speakerRoutes);
app.use('/api/bookings', bookingRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
