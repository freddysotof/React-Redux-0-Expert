import { createSlice } from '@reduxjs/toolkit';

export const templatwSlice = createSlice({
name: 'name',
initialState: {
counter: 10
},
reducers: {
increment: (state, /* action */ ) => {
state.counter += 1;
},
}
});
// Action creators are generated for each case reducer function
export const { increment } = templatwSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start