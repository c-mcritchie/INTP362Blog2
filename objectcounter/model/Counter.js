const {Schema, model} = require('mongoose');

//Account model
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
    },
    accountId: {
        type: String,
        required: true
    }
});

const counterModel = model('counter', CounterSchema);

module.exports = counterModel;