"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
class Database {
    connect() {
        dotenv_1.default.config();
        const connectionString = process.env.DBConnection ? process.env.DBConnection : "";
        mongoose_1.default.connect(connectionString);
        const db = mongoose_1.default.connection;
        db.on("error", console.error.bind(console, "MongoDB connection error."));
    }
}
exports.default = new Database();
