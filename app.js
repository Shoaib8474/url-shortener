const express = require('express');
const path = require('path');
const sequelize = require('./config/db');
const indexRouter = require('./routes/index');
const urlRouter = require('./routes/url');
const analyticsRouter = require('./routes/analytics');

const app = express();

// Database connection
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and synced');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/', urlRouter);
app.use('/analytics', analyticsRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});