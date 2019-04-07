import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { footballReducer } from '../football/reducers';

/**
 * Root reducer for App Football
 */
const rootReducer = combineReducers({football: footballReducer});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
  return store;
}