const { Schema,model } = require("mongoose");

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('user', schema);