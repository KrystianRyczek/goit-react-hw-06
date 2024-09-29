import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { filtreatingContacts, removeContact } from "../redux/contacts/contactSlice";



export const usePhoneBook=()=>{
    const filterValue = useSelector((state)=>state.value)
    const dispach = useDispatch()

    const remove = (id)=>{
        dispach(removeContact(id))
        dispach(filtreatingContacts(filterValue))
    }

    const filtrValue = useSelector((state)=>state.value)
    const searchingActive = filtrValue.trim().length
    const filtratedContacts = useSelector((state)=>state.filtredContacts)
    const allContacts = useSelector((state)=>state.contacts)

    const friends = (() => {
        if(searchingActive){
            return filtratedContacts
        }
        return allContacts
       })()
       
    return{remove, searchingActive, friends}
}