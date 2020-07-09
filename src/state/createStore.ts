import { composeWithDevTools } from 'redux-devtools-extension';
import orm from '../models/todos'
import { createStore, combineReducers } from "redux";
import { createReducer } from "redux-orm";


//Added ORM to reducer
const rootReducer = combineReducers({
  orm: createReducer(orm), // This will be the Redux-ORM state.
  // … potentially other reducers
});

export default () => { 
  return createStore(
    rootReducer,
    composeWithDevTools()) 
  };
