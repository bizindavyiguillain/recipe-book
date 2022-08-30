import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { install, LoopReducer, StoreCreator } from 'redux-loop';
import type { Actions } from './actions.types';
import rootReducer from './reducer';
import { RecipesState } from './types';

const enhancedStore = createStore as StoreCreator;
const loopReducer = rootReducer as LoopReducer<RecipesState, Actions>;

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = enhancedStore(
  loopReducer,
  undefined,
  compose(install(), applyMiddleware(logger)),
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
