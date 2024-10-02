import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "../utils/DummyBooks";

export const initialState = {
  books: BOOKS,
  image:""
};

const Book = createSlice({
  name: "Book",
  initialState: initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push(action.payload);
    },
    SetImage:(state,action)=>{
      state.image=action.payload;
    }
  },
});

export const {  AddBook,SetImage } = Book.actions;
export default Book.reducer;
