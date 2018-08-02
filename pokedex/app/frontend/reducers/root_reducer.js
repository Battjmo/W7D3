import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducers.js';

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;
