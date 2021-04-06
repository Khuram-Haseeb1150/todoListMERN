const mongoose = require("mongoose");
const TodoList = require("../model/index");

exports.todoList = (req, res, next, id) => {
  TodoList.findById(id)
    
    .select("_id")
    .exec((err, todo) => {
      // console.log(`users populate by id`, user);
      if (err || !todo) {
        return res.status(400).json({
          error: "todo not found",
        });
      }
      req.profile = todo; // adds profile object in req with user info
      // console.log(`req.profile`, req.profile);
      next();
    });
};

exports.createTodoList = (req, res) => {
  console.log(req.body);

  const todoList = new TodoList({
    id: req.body.id,
    name: req.body.name,
  });

  todoList
    .save()
    .then((data) => {
       console.log("saved user", data);
      res.send(data);
    })
    .catch((err) => {
      console.log("Err ", err);
      res.send(err);
    });
  // res.send(req.body)
};

exports.getTodoList = (req, res) => {
  TodoList.find()

    .then((listData) => {
      res.json(listData);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTodoList = (req, res) => {
  console.log(`req.body`,req.body);
  TodoList.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else todo.name = req.body.name;

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

exports.deleteTodoList = (req, res,next) => {
  console.log(`req`,req.body);
  let todo = req.profile;
    todo.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ message: 'todo deleted successfully' });
    });
};
