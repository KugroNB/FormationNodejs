import mongoose from 'mongoose';
import dotenv from 'dotenv';

class Database {
    connect() {
        dotenv.config();
        const connectionString: string = process.env.DBConnection?process.env.DBConnection : "";
        mongoose.connect(connectionString);

        const db:mongoose.Connection  = mongoose.connection;

        db.on("error", console.error.bind(console, "MongoDB connection error."));
    }
}

export default new Database();