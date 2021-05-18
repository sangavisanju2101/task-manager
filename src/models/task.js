const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    description : {
        type : String, 
        required : true,
        trim : true
    }, 
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Task'
    }
}, {
    timestamps : true
}); 
const task = mongoose.model("Task", TaskSchema); 
module.exports = task;  