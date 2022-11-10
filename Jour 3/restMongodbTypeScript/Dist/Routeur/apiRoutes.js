"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movieSchema_js_1 = __importDefault(require("../Models/movieSchema.js"));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const selectedMovie = yield movieSchema_js_1.default.find({ _id: req.params.id });
    console.log(selectedMovie);
    res.status(200).json(selectedMovie);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movieSchema_js_1.default.find({});
    console.log(movies);
    res.status(200).json(movies);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    new movieSchema_js_1.default({
        name: req.body.name,
        year: req.body.year,
        note: req.body.note,
        url: req.body.url
    }).save();
    const movies = yield movieSchema_js_1.default.find({});
    console.log(movies);
    res.status(201).json(movies);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMovie = yield movieSchema_js_1.default.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: req.body.name,
        year: req.body.year,
        note: req.body.note,
        url: req.body.url
    });
    console.log(updatedMovie);
    const movies = yield movieSchema_js_1.default.find({});
    console.log(movies);
    res.status(200).json(movies);
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMovie = yield movieSchema_js_1.default.findOneAndDelete({
        _id: req.params.id
    });
    console.log(deletedMovie);
    const movies = yield movieSchema_js_1.default.find({});
    console.log(movies);
    res.status(200).json(movies);
}));
exports.default = router;
