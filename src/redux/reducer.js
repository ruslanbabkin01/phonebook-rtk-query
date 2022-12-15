import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './actions';

const contacts = createReducer([], {
  [fetchingInProgress]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchingInProgress]: () => true,
  [fetchingSuccess]: () => false,
  [fetchingError]: () => false,
});

const error = createReducer(null, {
  [fetchingInProgress]: () => null,
  [fetchingError]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  isLoading,
  error,
});
