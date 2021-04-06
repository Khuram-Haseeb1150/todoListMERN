const mongoose = require("mongoose");
const Todo = require("../model/todo");

 exports.createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        dueDate:req.body.dueDate,
        marked:req.body.marked
      });
            todo.postedBy = req.profile;
            //console.log(`postesby`,post.postedBy);
            
            todo.save((err, result) => {
                // console.log("result",result);
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }
                res.json(result);
            });
        
    };


    exports.getTodo = (req, res) => {
      console.log(`reqkkk`,req.body);
        Todo.find({ postedBy: req.profile._id })
            .populate('postedBy', '_id')
            .select("_id title dueDate marked")
          
            .exec((err, todos) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }
                res.json(todos);
            });
    };


    exports.updateTodo = (req, res) => {
        Todo.findById(req.params.id, function (err, todo) {
          if (!todo) res.status(404).send("data is not found");
          else 
          {
            todo.title= req.body.title;
            todo.dueDate=req.body.dueDate;
            todo.marked=req.body.marked;
            
            }
      
          todo
            .save()
            .then((todo) => {
              res.json("Todo updated!");
            })
            .catch((err) => {
              res.status(400).send("Update not possible");
            });
        });
      };
      

      exports.deleteTodo = (req, res) => {
        Todo.deleteOne({ _id: req.params.id })
          .then(() => {
            res.status(200).json({
              message: "Deleted!",
            });
          })
          .catch((error) => {
            res.status(400).json({
              error: error,
            });
          });
      };
      