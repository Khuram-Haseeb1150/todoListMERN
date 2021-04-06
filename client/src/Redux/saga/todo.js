import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
 
  getPostsSuccess,
  getPostsFailed,
 
  addPostFailed,
  addPostSuccess,
  updateTodoListSuccess,
  updateTodoListFailed,
  DelteTodoListSuccess,
  DelteTodoListFailed,
 
} from '../Actions/FirstAction';

import { 
  addTodoSuccess,
  addTodoFailed,
  getTodoFailed,
  getTodoSuccess,
  updateTodoSuccess,
  updateTodoFailed,
  DelteTodoFailed,
  DelteTodoSuccess

} from '../Actions/SecondAction';

import { GET_POSTS, ADD_POST, UPDATE_LIST,DELETE_LIST,ADD_TODO,GET_TODO,UPDATE_TODO,DELETE_TODO} from '../Types/types'
import { getPosts, addPost ,updateList,deleteTodoList,
  addTodo,getTodo,updatetodo,deleteTodo

} from '../../api/api';

function* getPostsSaga() {
  try {
    const data = yield call(getPosts);
    
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

function* getPostsWatcher() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}

function* addPostSaga(action) {
  
  try {
    const data = yield call(addPost, action.payload);
    yield put(addPostSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addPostFailed(error.message));
  }
}

function* addPostWatcher() {
  yield takeLeading(ADD_POST, addPostSaga);
}



function* updateListTodo(action) {
  // console.log(`action`,action.payload);
  try {
    const data = yield call(updateList, action.id,action.payload);
    yield put(updateTodoListSuccess(action.id,action.payload));
  } catch (error) {
    yield put(updateTodoListFailed(error.message));
  }
}

function* updatewatchList() {
  yield takeLeading(UPDATE_LIST, updateListTodo);
}


function* deleteListTodo(action) {
  //  console.log(`action`,action);
  try {
    const data = yield call(deleteTodoList,action.payload);
     console.log(`action`,action.payload);
    yield put(DelteTodoListSuccess( action.payload ));
  } catch (error) {
    yield put(DelteTodoListFailed(error.message));
  }
}

function* deletewatchList() {
  yield takeLeading(DELETE_LIST, deleteListTodo);
}



// todo single


function* addTodoSaga(action) {
  // console.log(`action.payload`,action.payload);
  try {
    const data = yield call(addTodo, action.id,action.payload);
    // console.log(`jj`,data);
    yield put(addTodoSuccess({ ...action.payload,...data }));
  } catch (error) {
    yield put(addTodoFailed(error.message));
  }
}

function* addTodoWatcher() {
  yield takeLeading(ADD_TODO, addTodoSaga);
}



function* getTodoSaga(action) {
  // console.log(`action.id`,action.id);

  try {
    const data = yield call(getTodo,action.idtodo,action.payload);
    // console.log(`data`,data);
    yield put(getTodoSuccess(data));
  } catch (error) {
    yield put(getTodoFailed(error.message));
  }
}

function* getTodoWatcher() {
  yield takeEvery(GET_TODO, getTodoSaga);
}



function* updateTodo(action) {
  // console.log(`action`,action.payload);
  try {
    const data = yield call(updatetodo, action.id,action.payload);
    yield put(updateTodoSuccess(action.id,action.payload));
  } catch (error) {
    yield put(updateTodoFailed(error.message));
  }
}

function* updatewatchTodo() {
  yield takeLeading(UPDATE_TODO, updateTodo);
}


function* deleteSingleTodo(action) {
  //  console.log(`action`,action);
  try {
    const data = yield call(deleteTodo,action.payload);
    //  console.log(`action`,action.payload);
    yield put(DelteTodoSuccess( action.payload ));
  } catch (error) {
    yield put(DelteTodoFailed(error.message));
  }
}

function* deletewatchtodo() {
  yield takeLeading(DELETE_TODO, deleteSingleTodo);
}


export default function* postsSaga() {
  yield all([getPostsWatcher(), addPostWatcher(),updatewatchList(),deletewatchList(),
    addTodoWatcher(),getTodoWatcher(),updatewatchTodo(),deletewatchtodo()]);
}