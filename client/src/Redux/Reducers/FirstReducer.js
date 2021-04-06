import {
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
  UPDATE_LIST,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAILED,
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILED,
  // second todo
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,

  
  GET_TOPO_SUCCESS,
  GET_TODO_FAILED,

  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,

  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED
} from '../Types/types';

const initialState = {
  isLoading: true,
  todoList: [],
  error: null,
  secondTodo:[],
  secondLoading:true

};

const FirstReducer = (state = initialState, { type, payload ,id,idtodo}) => {
  // console.log(`payload.id`,payload);
  switch (type) {
    case ADD_POST:
    case  UPDATE_LIST:
     case DELETE_LIST: 
    case GET_POSTS:
    case ADD_TODO:
   
    
 return { ...state, isLoading: false };

 case ADD_TODO:
 case UPDATE_TODO:
 case DELETE_TODO:
 return { ...state, secondLoading: false };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        todoList: payload,
        isLoading: false,
      };
    case GET_POSTS_FAILED:
    case  DELETE_LIST_FAILED:
    return {
      ...state,
      error: payload,
      isLoading: false,
    };
  case DELETE_LIST_SUCCESS:
  // console.log(`chill 2`,state.todoList);
  // console.log(`allah 1`,payload);
    const newState = state.todoList.filter(todo => todo._id !== payload);
 
    return {
      // ...state,
      isLoading: false,
       todoList:newState
    };
    case ADD_POST_FAILED:
    
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case ADD_POST_SUCCESS:
    // console.log(`todd`,payload);
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, payload],
      };

      case  UPDATE_LIST_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case UPDATE_LIST_SUCCESS:
   
     let result=state.todoList.map((post) => (post._id === id ? payload : post));
      return {
        ...state,
        isLoading: false,
        todoList:result
      };

    // Second todo

    case ADD_TODO_FAILED:
    
      return {
        ...state,
        error: payload,
        secondLoading: false,
      };
    case ADD_TODO_SUCCESS:
    // console.log(`pp`,id);
    // console.log(`kk`,payload);
      return {
        ...state,
        secondLoading: false,
        secondTodo:  [...state.secondTodo, id.data],
      };
      case GET_TOPO_SUCCESS:
      // console.log(`idtodo.data`,idtodo.data);
      return {
        ...state, 
        secondTodo:  idtodo.data,
        secondLoading: false,
      };
    case GET_TODO_FAILED:

    case  UPDATE_TODO_FAILED:
    return {
      ...state,
      error: payload,
      secondLoading: false,
    };
  case UPDATE_TODO_SUCCESS:
 
   let update=state.secondTodo.map((post) => (post._id === id ? payload : post));
    return {
      ...state,
      secondLoading: false,
      secondTodo:update
    };

    case  DELETE_TODO_FAILED:
    return {
      ...state,
      error: payload,
      secondLoading: false,
    };
  case  DELETE_TODO_SUCCESS:
  // console.log(`chill`,state.secondTodo);
   console.log(`allah`,payload);
    const deleteTodo = state.secondTodo.filter(todo => todo._id !== payload);
    
 
    return {
       ...state,
      secondLoading: false,
      secondTodo:deleteTodo
    };

    default:
      return state;
  }
};

export default FirstReducer;
