import{usePhoneBook} from '../hooks/usePhoneBook'


const Btn = ({componentId})=>{
    const {remove} = usePhoneBook()
    return  (
        <button onClick={()=>{remove(componentId)}} >Delete</button>
      );
}

export const PhoneBook =()=>{
    const {searchingActive, friends} = usePhoneBook()
                                return (friends.length !==0 ? (<div>
                                                               <h1>Phonebook</h1>
                                                               <div className="contacts-box">
                                                                   {friends.map((item)=>{
                                                                   return(
                                                                   <div key={item.id} className="contact-box">
                                                                       <div>
                                                                           <p  className="contact-name">{item.name}</p>
                                                                           <p  className="contact-number">{item.number}</p>
                                                                       </div>
                                                                       <Btn
                                                                           key={item.id}
                                                                           componentId={item.id}
                                                                       />
                                                                   </div>)
                                                               })}
                                                               </div>
                                                           </div>)
                                                         : searchingActive? <h2>Result not found</h2>
                                                                          : <h1>Your phonebook is empty</h1>)}
    

