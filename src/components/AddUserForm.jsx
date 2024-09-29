import {Field, Form, Formik, ErrorMessage} from "formik";
import{useAddUserForm} from '../hooks/useAddUserForm'

export const AddUserForm =()=>{

  const {Shema, addNewContact} = useAddUserForm()

return      (<div>
                <h2>Add New Constat</h2>
                <Formik 
                validationSchema={Shema}
                initialValues={{name:"", number:""}} 
                onSubmit={
                  (values, actions)=>{
                    addNewContact(values)
                    actions.resetForm()
                  }}>
                  <Form className="add-user-form">
                    {/* <labels></labels> useID()*/}
                    <div className="Add-user-box">
                    <Field className="add-user-name" type="text" name="name" placeholder="Name and Surneme"/>
                    <ErrorMessage name="name" as='span' className="error-msg"/>
                    </div>
                    <div>
                    <Field className="add-user-number" type="phone" name="number" placeholder="+48 111 111 111"/>
                    <ErrorMessage name="number" as='div' className="error-msg"/>
                    </div>
                    <button type="submit" className="add-user-buton">Add Contact</button>
                  </Form>
                </Formik>
             </div>)



      
}