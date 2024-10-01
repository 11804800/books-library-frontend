import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "../utils/DummyBooks";

export const initialState = {
  books: BOOKS,
  searched: BOOKS,
};

const Book = createSlice({
  name: "Book",
  initialState: initialState,
  reducers: {
    AddNewBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { SearchBook, AddNewBook } = Book.actions;
export default Book.reducer;
