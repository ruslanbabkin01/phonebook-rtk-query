const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
