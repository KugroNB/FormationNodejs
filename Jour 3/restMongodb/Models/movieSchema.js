import {Schema, model} from 'mongoose';

const movieSchema = new Schema({
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

const movie = model('movie', movieSchema);
export default movie;