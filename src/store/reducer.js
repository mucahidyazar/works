import { combineReducers } from '@reduxjs/toolkit';
import articlesReducer from './articles/slice';
import mainReducer from './main/slice';

export const rootReducer = combineReducers({
  main: mainReducer,
  articles: articlesReducer
});
