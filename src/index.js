import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {app,server} from './lib/socket.js'

// Move dotenv config to the top
dotenv.config()

// Update CORS configuration to be more specific
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000","https://conversa-the-chat-app.netlify.app"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json({limit: '10mb'}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5002  

server.listen(PORT, () => {
    console.log(`Server running at Port:${PORT}`);
    connectDB();
})    

 