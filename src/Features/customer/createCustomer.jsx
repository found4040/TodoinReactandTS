

import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { createCustomer } from './customerSlice';



const CreateCustomer = () => {

    const [fullname, setfullname] = useState("")
    const [nationalId,setNationalId] = useState("")

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        if(!fullname || !nationalId) {
            alert("Plese Enter FullName and NationalId")
        }
            

        dispatch(createCustomer(fullname,nationalId))
       

        
         
    }

  

   
    return (
        
        <div>
            <div>
                <h4>Create New Customer</h4>
                
                <form>
                    <div className="mb-3 col-md-6 ">
                        <label  className="form-label">Enter Customer Name</label>
                        <input value={fullname} onChange={(e)=>setfullname(e.target.value)} className="form-control"  />

                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Enter National ID</label>
                        <input value={nationalId}  className="form-control" onChange={(e)=>setNationalId(e.target.value)}  />
                    </div>

                    <button  onClick={handleSubmit} className="btn btn-primary mt-2">Create New Customer</button>
                </form>

               

            </div>

        </div>
        
    )
}

export default CreateCustomer;