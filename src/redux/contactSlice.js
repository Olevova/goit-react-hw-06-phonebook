import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addcontact(state, action) {
            state.push(action.payload)
        },
        delcontact(state, action) {
            return state.filter(i => i.id !== action.payload)
        }
    }
});

export const { addcontact, delcontact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
