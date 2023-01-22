import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const contactSlice = createSlice({
    name: 'contacts',
    initialState: { contacts:[]},
    reducers: {
        addcontact(state, action) {
            state.contacts.push(action.payload)
        },
        delcontact(state, action) {
            return {contacts: state.contacts.filter(i => i.id !== action.payload) }
        }
    }
});


const persistConfig = {
    key: 'contacts',
    storage,
};


export const { addcontact, delcontact } = contactSlice.actions;
export const contactFormReducer = persistReducer(persistConfig, contactSlice.reducer);