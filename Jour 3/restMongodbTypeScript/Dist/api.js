"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./Config/server"));
const database_1 = __importDefault(require("./Config/database"));
database_1.default.connect();
server_1.default.start();
