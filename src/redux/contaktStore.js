import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/contactSlice";
import filterReducer from "./filters/filterSlice";



// export const contactStore = configureStore({
//     reducer: {contacts: contactReducer, 
//               filter: filterReducer,
//              }
// })
export const contactStore = configureStore({
    reducer: contactReducer
})