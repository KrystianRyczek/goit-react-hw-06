import { useDispatch } from "react-redux"
import { addContact, filtreatingContacts } from "../redux/contacts/contactSlice";
import { useSelector } from "react-redux";

import * as Yup from 'yup';

export const useAddUserForm=()=>{
    const dispach = useDispatch()
    const filterValue = useSelector((state)=>state.value)

    const addNewContact=(values)=>{
      dispach(addContact(values))
      dispach(filtreatingContacts(filterValue))
    }
    const Shema = Yup.object().shape({
        name: Yup.string()
                 .min(2,"Name is too short")
                 .max(20,"Name is too long")
                 .required('Name is required'),
        number:  Yup.number()
                    .typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus")
                    .integer("A phone number can't include a decimal point")
                    .min(8)
                    .required('A phone number is required')
      })
         
    return {Shema, addNewContact}
}