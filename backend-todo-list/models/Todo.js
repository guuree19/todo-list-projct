//require mongoose
const mongoose = require('mongoose')
//todoliste schema
const TodoSchema = new  mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    createdOn: {
        type: Date,
        required: true
    },
    done:{
        type: Boolean,
        required: true
    }
})
 
module.exports = mongoose.model('todos', TodoSchema)