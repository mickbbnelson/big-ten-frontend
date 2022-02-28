import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import collegeReducer from './reducers/collegeReducer';

export default createStore(collegeReducer, applyMiddleware(thunk))