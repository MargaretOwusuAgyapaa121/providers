const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact.js');
const sermonsRoutes = require('./routes/sermonsEvent.js');
const path = require('path');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: ['http://localhost:3000', 'https://providersmissions.org'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/sermons-events', sermonsRoutes);
app.use('/api', contactRoutes);

module.exports = app;
