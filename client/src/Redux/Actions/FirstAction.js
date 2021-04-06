import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  UPDATE_LIST,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAILED,
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILED,
} from "../Types/types";

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailed = (payload) => ({
  type: GET_POSTS_FAILED,
  payload,
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const addPostSuccess = (payload) => ({
  type: ADD_POST_SUCCESS,
  payload,
});

export const addPostFailed = (payload) => ({
  type: ADD_POST_FAILED,
  payload,
});

export const updateTodoList = (id,payload) => ({
  type: UPDATE_LIST,
  id,
  payload,
});


export const updateTodoListSuccess = (id,payload) => ({
  type:  UPDATE_LIST_SUCCESS,
  id,
  payload,
});

export const updateTodoListFailed = (id,payload) => ({
  type: UPDATE_LIST_FAILED,
 
  payload,
});



export const DelteTodoList = (payload) => ({
  type:  DELETE_LIST,
 
  payload,
});


export const DelteTodoListSuccess = (payload) => ({
  type: DELETE_LIST_SUCCESS,
 
  payload,
});

export const DelteTodoListFailed = (payload) => ({
  type: DELETE_LIST_FAILED,
  payload,
});



