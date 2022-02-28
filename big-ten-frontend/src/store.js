import { createStore } from 'redux';
import thunk from redux-thunk;
import collegeReducer from './reducers/collegeReducer';

export default createStore(collegeReducer, thunkMiddleware(thunk))