import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const filterInitialState: string = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
