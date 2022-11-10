import mongoose from 'mongoose';
import dotenv from 'dotenv';

class Database {
    connect() {
        dotenv.config();
        const connectionString = process.env.DBConnection;
        mongoose.connect(connectionString);

        const db = mongoose.connection;

        db.on("error", console.error.bind(console, "MongoDB connection error."));
    }
}

export default new Database();