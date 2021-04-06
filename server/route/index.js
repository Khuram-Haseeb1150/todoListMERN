const express = require('express');
const router = express.Router();

const {createTodoList,getTodoList,updateTodoList,deleteTodoList,todoList} = require('../controler/index');



router.post('/createlist', createTodoList);
router.get('/getlist', getTodoList);
router.put("/updatelist/:id",updateTodoList);
router.delete("/deletelist/:todoId",deleteTodoList);

router.param("todoId", todoList);
module.exports = router;
