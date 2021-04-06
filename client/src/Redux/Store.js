import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga';
import rootReducer from "./Reducers/index";
import rootSaga from './saga/index';


const sagaMiddleware = createSagaMiddleware();
const initialState={}

// const store = createStore(
//   rootReducer,
 
//   applyMiddleware(...middlewares)
// );
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

 export const store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(sagaMiddleware)));
// export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export default store;
