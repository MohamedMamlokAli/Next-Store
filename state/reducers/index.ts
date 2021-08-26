import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
