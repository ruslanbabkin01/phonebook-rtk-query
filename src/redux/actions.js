import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchingInProgress = createAction('contacts/fetchInProgress');
//fulfielled
export const fetchingSuccess = createAction('contacts/fetchISuccess');
//rejected
export const fetchingError = createAction('contacts/fetchError');
