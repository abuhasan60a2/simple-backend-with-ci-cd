const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/ConnectDB');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/health', require('./routes/healthCheck'));
app.use('/test', require('./routes/test'));





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
