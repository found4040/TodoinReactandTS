import React from 'react'
import CreateCustomer from '../Features/customer/createCustomer';
import Account from '../Features/accounts/account';
import CustomerName from '../Features/customer/customerName';
import { useSelector } from 'react-redux';




const Second = () => {
    const fullname = useSelector((store) => store.customer.fullname)
    const nationalId = useSelector((store)=> store.customer.nationalId)

    return (

        <>
            <div className='second '>

                {
                    fullname === "" || nationalId ==="" ? (

                        <CreateCustomer />
                    ) : (
                        <>
                            <CustomerName />

                            <Account />
                        </>

                    )
                }


            </div>
        </>

    )
}

export default Second;