const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 const { ObjectId } = mongoose.Schema;

const todo = new Schema({
  
 
    title: {
        type: String
    },
    dueDate:{
        type :String
    },
    marked:{
        type:Boolean
    },
    
    postedBy: {
        type: ObjectId,
        ref: 'todoList'
    }
   
     
  
});

const Todo = mongoose.model("todo", todo);

module.exports = Todo;
