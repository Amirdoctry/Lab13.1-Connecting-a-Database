const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Database connection test successful!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});