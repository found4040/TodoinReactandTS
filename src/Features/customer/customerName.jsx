import React from 'react'
import { useSelector } from 'react-redux'


const CustomerName = () => {

    const customer = useSelector((state) => state.customer.fullname)
    
    
  return (
    <div>
         <h4 className='mt-5'>Welcome Back : {customer}</h4>
    </div>
  )
}

export default CustomerName