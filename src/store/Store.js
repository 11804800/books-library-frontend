import { configureStore } from "@reduxjs/toolkit";
import Book from "./Book";

export const store=configureStore({
    reducer:{
        books:Book
    }
});