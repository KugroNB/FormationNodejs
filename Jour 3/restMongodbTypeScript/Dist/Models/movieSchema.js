"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name ?"],
    },
    year: {
        type: Number,
        required: [true, "year ?"],
    },
    note: {
        type: Number,
        required: [true, "note ?"],
    },
    url: {
        type: String,
        required: [true, "url ?"],
    }
});
const movie = (0, mongoose_1.model)('movie', movieSchema);
exports.default = movie;
