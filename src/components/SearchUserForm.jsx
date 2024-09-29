import {Field, Form, Formik} from "formik"
import{useSearchUserForm} from '../hooks/useSearchUserForm'

export const SearchUserForm =()=>{

  const {filterValue, updateFilterValue} = useSearchUserForm()

  console.log("filterValue:", filterValue)
return      (<div>
                <h1>Searching contact by name</h1>
                <Formik 
                initialValues={{filter:""}}
                onSubmit={(event)=>{}}
                >
                  <Form>
                    <Field 
                    type="text" 
                    name="filter"
                    placeholder="Search..."
                    value= {filterValue}
                    onChange={(event)=>{
                      updateFilterValue(event.target.value)
                                       }}
                    />
                  </Form>
                </Formik>
             </div>)
}
