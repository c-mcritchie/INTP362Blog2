const {Schema, model} = require('mongoose');

//Counter model
const CounterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    }
});

const counterModel = model('counter', CounterSchema);

module.exports = counterModel;