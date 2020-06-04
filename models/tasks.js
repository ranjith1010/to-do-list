var mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    status: String,
    task: {
        type: String,
        required: true
    },
    due: Date,
    category: String,
    labels: [String],
    priority: Number
});

const Task = module.exports = mongoose.model('Task', TaskSchema);