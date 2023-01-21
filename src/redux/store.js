import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
// import { createSlice } from '@reduxjs/toolkit';

// export const myaction = createAction('myValue/myaction');

// const myReducer = createReducer([], (builder) => {
//     builder.addCase(myaction, (state, action) => { state.push(action.payload)})
// });


// const myValueSlicce = createSlice({
//     name: 'myValue',
//     initialState: [],
//     reducers: {
//         myaction(state, action) {
//             state.push(action.payload)
//         },
//         mydel(state, action) {
//             return state.filter(i => i.id!==action.payload)
//         }
//     }
// })

// export const {myaction, mydel} =myValueSlicce.actions
// // import rootReducer from './reducers'

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer

}, });