const express = require('express');
const router = express.Router();

const {
    createTodo,
     getTodo,
     updateTodo,
     deleteTodo
  
} = require('../controler/todo');
const {todoList} = require('../controler/index.js');


router.post('/createtodo/:todoId', createTodo);
 router.get('/gettodo/:todoId', getTodo);
 router.put("/updatetodo/:id",updateTodo);
 router.delete("/deletetodo/:id",deleteTodo);

router.param("todoId", todoList);
module.exports = router;
