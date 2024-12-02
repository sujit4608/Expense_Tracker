// DB/Database.js
import mongoose from 'mongoose';

// If you're using environment variables (recommended)
const connectDB = async () => {
  const dbURI =process.env.MONGO_URL ; // Make sure this is set in your environment
  if (!dbURI) {
    console.error('Mongo URI not defined!');
    return;
  }
  
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export { connectDB };
