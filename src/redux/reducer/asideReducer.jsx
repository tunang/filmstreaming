import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = false;

const asideReducer = createSlice({
    name: 'asideStatus',
    initialState: false,
    reducers:{
        changeAsideStatus: (state, action) => {
            return !state;
        }
    }
})

export const { changeAsideStatus } = asideReducer.actions;

export default asideReducer.reducer;
