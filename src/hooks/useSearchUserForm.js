import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { filtreatingContacts } from "../redux/contacts/contactSlice";


export const useSearchUserForm=()=>{
    const filterValue = useSelector((state)=>state.value)


    const dispach = useDispatch()
    const updateFilterValue = (curentFilterValue)=>{
          dispach(filtreatingContacts(curentFilterValue))
    }
       
    return {filterValue, updateFilterValue}
}