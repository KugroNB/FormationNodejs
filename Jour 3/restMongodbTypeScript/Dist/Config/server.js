"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRoutes_1 = __importDefault(require("../Routeur/apiRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
class Server {
    start() {
        dotenv_1.default.config();
        const hostname = process.env.IP ? process.env.IP : "";
        const port = process.env.PORT ? process.env.PORT : "";
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use('/api', apiRoutes_1.default);
        // +port = parsint(port)
        app.listen(+port, hostname, () => { console.log(`Listening on ${hostname}:${port}`); });
    }
}
exports.default = new Server();
