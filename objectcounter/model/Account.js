const {Schema, model} = require('mongoose');

//Account model
const AccountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    counters: {
        type: Array,
        default: []
    }
});

const accountModel = model('account', AccountSchema);

module.exports = accountModel;