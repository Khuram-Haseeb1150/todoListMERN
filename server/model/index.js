const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId } = mongoose.Schema;
const todo =require('./todo');
const todoList = new Schema({
   name: {
        type: String
    }
   });


todoList.pre("remove", function(next) {
    todo.remove({ postedBy: this._id }).exec();
    next();
});


const list = mongoose.model("todoList", todoList);
module.exports = list;
