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
                window.localStorage.setItem("contacts", JSON.stringify(state.contacts))

        },
        filtreatingContacts: (state, action)=>{
            state.value = action.payload
            state.contacts.map(() =>{
                state.filtredContacts.pop()
            })
            state.contacts.map((item) =>{
                if(item.name.toLowerCase().includes(action.payload.toLowerCase())){
                    state.filtredContacts.push(item)}
            })
            // state.filtredContacts = state.contacts.reduce(
            //     (accumulator, contact) => {
            //         if(contact.name.includes(action.payload)){
            //             console.log(contact.name)
            //             accumulator= contact
            //         }
            //     }
            //     ,[]);
              
            
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

