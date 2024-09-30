import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "../utils/DummyBooks";

export const initialState={
    books:BOOKS
}

const Book=createSlice({
    name:"Book",
    initialState:initialState,
    reducers:{
        SearchBook:(state,action)=>{
            return state.books.includes(action.payload)
        },
        AddNewBook:(state,action)=>{
            return state.books.push(action.payload);
        }
    },
});

export default Book.reducer;