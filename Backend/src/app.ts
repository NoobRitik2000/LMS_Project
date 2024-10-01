// index.ts
import express from 'express';
import sequelize from './config/db';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { createUserTable } from './models/userModel';
import { createBookTable } from './models/bookModel';

const app = express();

// Enable CORS for your frontend URL
app.use(cors({
    origin: 'http://localhost:3001', // Your frontend URL
    credentials: true,
}));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', userRoutes);

// Initialize database and start server
const initializeDatabase = async () => {
    try {
        await sequelize.authenticate(); // Test the connection
        console.log('Connected to the MySQL database using Sequelize...');
        
        await createUserTable(); // Create user table if it doesn't exist
        console.log('User table created successfully or already exists.');
        
        await createBookTable(); // Create books table if it doesn't exist
        console.log('Books table created successfully or already exists.');
        // Start your server after creating the table
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
};

initializeDatabase();
