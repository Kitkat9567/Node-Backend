const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helloRoutes = require('./routes/helloRoutes');
const journalRoutes = require('./routes/journalRoutes');
const { connectDB } = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api', helloRoutes);

app.use('/api', journalRoutes)

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});