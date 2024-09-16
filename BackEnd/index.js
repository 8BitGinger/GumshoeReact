// index.js (using import)

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// ... other imports using import
import userRouter from './routes/users.js';
import cors from 'cors';

dotenv.config(); // Using require here will cause the error

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON requests
app.use(bodyParser.json());
// Enable CORS
app.use(cors());

app.use('/api/users', userRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// ... rest of your code

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
