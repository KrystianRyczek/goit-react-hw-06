import { createSlice, nanoid} from "@reduxjs/toolkit";

if(JSON.parse(window.localStorage.getItem("contacts"))===null){
    window.localStorage.setItem("contacts", JSON.stringify([]))
  }
const storedContacts=JSON.parse(window.localStorage.getItem("contacts"))

const initialState ={
    contacts: storedContacts,
    value:"",
    filtredContacts:[]
}

export const contactSlice = createSlice({
    name: "phoneBook",
    initialState,
    reducers:{
        addContact: (state, action) =>{
                const contact={
                    id: nanoid(),
                    name: action.payload.name,
                    number: action.payload.number,
                }
                state.contacts.push(contact)

        },
        filtreatingContacts: (state, action)=>{
            state.value = action.payload
            state.filtredContacts=[]
            if(state.value!==""){
            state.contacts.map((item) =>{
                if(item.name.toLowerCase().includes(action.payload.toLowerCase())){
                    state.filtredContacts.push(item)}
            })}
             
        },
        removeContact: (state, action) =>{
            console.log("action.payload", action.payload)
            state.contacts = state.contacts.filter((item) =>
                item.id!==action.payload)
            window.localStorage.setItem("contacts", JSON.stringify(state.contacts))
        }
    },
    
})

export const {addContact, filtreatingContacts, removeContact} = contactSlice.actions

export default contactSlice.reducer

