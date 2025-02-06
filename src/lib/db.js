// Import the required modules
import mongoose from 'mongoose';

// Define the connection string for your local MongoDB instance
// const mongoURI = 'mongodb://localhost:27017/chat_db'

// Function to connect to the database
export const connectDB = async () => {
    try {
        // Connect to the MongoDB server
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully!'); 
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};


connectDB();  
  
 