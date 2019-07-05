const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: Date, default: Date.now },

});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;