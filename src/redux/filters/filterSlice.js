import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:"start",
    filtredContacts:[]
}

export const filterSlice = createSlice({
    name: "phoneBook",
    initialState,
    reducers:{
        filtreatingContacts: (state, action)=>{
            console.log("action.payload", action.payload)
            state.value=action.payload
        },
    },
    
})
export const { filtreatingContacts } = filterSlice.actions
export default filterSlice.reducer

