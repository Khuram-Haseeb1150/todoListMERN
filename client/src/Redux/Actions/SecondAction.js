import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  GET_TODO,
  GET_TOPO_SUCCESS,
  GET_TODO_FAILED,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED
} from "../Types/types";

export const addTodo = (id, payload) => ({
  type: ADD_TODO,
  id,
  payload,
});

export const addTodoSuccess = (id, payload) => ({
  type: ADD_TODO_SUCCESS,
  id,
  payload,
});

export const addTodoFailed = (id, payload) => ({
  type: ADD_TODO_FAILED,
  id,
  payload,
});

export const getTodo = (idtodo) => ({
  type: GET_TODO,
  idtodo,
});

export const getTodoSuccess = (idtodo) => ({
  type: GET_TOPO_SUCCESS,
  idtodo,
});

export const getTodoFailed = (idtodo) => ({
  type: GET_TODO_FAILED,
  idtodo,
});

export const updateTodo = (id, payload) => ({
  type: UPDATE_TODO,
  id,
  payload,
});

export const updateTodoSuccess = (id, payload) => ({
  type: UPDATE_TODO_SUCCESS,
  id,
  payload,
});

export const updateTodoFailed = (id, payload) => ({
  type: UPDATE_TODO_FAILED,
  id,
  payload,
});


export const DelteTodo = (payload) => ({
  type:  DELETE_TODO,
 
  payload,
});


export const DelteTodoSuccess = (payload) => ({
  type: DELETE_TODO_SUCCESS,
 
  payload,
});

export const DelteTodoFailed = (payload) => ({
  type: DELETE_TODO_FAILED,
  payload,
});


