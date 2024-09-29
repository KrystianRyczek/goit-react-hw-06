import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { filtreatingContacts, removeContact } from "../redux/contacts/contactSlice";



export const usePhoneBook=()=>{
    const filterValue = useSelector((state)=>state.value)
    const allContacts = useSelector((state)=>state.contacts)
    const searchingActive = filterValue.trim().length
    const filtratedContacts = useSelector((state)=>state.filtredContacts)

    const dispach = useDispatch()

    const remove = (id)=>{
        dispach(removeContact(id))
        dispach(filtreatingContacts(filterValue))
    }
    
    const friends = (() => {
        if(searchingActive){
            return filtratedContacts
        }
        return allContacts
       })()
       
    return{remove, searchingActive, friends}
}