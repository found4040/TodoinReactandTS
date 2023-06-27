import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw, requestLoan, loan } from './accountSlice'
import AccoountBalance from './AccoountBalance'




const Account = () => {

    const [Deposit, setDeposit] = useState("")

    const [Withdraw, setWithdraw] = useState("")

    const [loanAmount, setloanAmount] = useState("")
    const [loanPurpose, setloanPurpose] = useState("")
    const [currency, setCurrency] = useState("USD")
    const send = useDispatch();


    const {
        loan: currentLoan,
        loanPurpose: currentLoanPurpose,
        // balance,
    } = useSelector((store) => store.account)

    // console.log(balance)


    function depositHandle() {

        if (!Deposit) {
            alert("Please enter deposit Amount")
        }

        send(deposit(Deposit, currency))
        console.log((Deposit, currency))
        setDeposit("")
        setCurrency("")


    }





    function withdrawHandle() {

        if (!Withdraw) {
            alert("Please enter a withdraw Amount")
        }
        send(withdraw((Withdraw)))
        setWithdraw("")

    }


    function loanRequestHandle() {

        if (!loanAmount || !loanPurpose) {
            alert("Please enter a loan Amount and a loan Purpose")

        }
        send(requestLoan(loanAmount, loanPurpose))
        setloanAmount("")
        setloanPurpose("")


    }


    function payBackHandle() {
        send(loan());

    }







    return (
        <div className='mt-4 p-4 border rounded border-success p-3'>
            <AccoountBalance />

            <h5 className='mb-3'>Do Your Account Operatons</h5>

            <div className="col-md-8 mb-4 border rounded border-info p-3">

                <input value={Deposit} onChange={(e) => setDeposit(+e.target.value)} className="form-control" placeholder='Deposit' />
                <select value={currency} className="form-select mt-3" onChange={(e) => setCurrency(e.target.value)} >
                    <option value="USD">Doller</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">British Pond</option>


                </select>
                <button onClick={depositHandle} className="btn btn-primary mt-2">{Deposit} Deposit</button>

            </div>
            <div className="col-md-8 mb-4 border rounded border-info p-3">
                <input value={Withdraw} onChange={(e) => setWithdraw(e.target.value)} className="form-control mb-4" placeholder='withdraw' />
                <button onClick={withdrawHandle} className="btn btn-primary mt-2">Withdraw</button>
            </div>

            <div className="col-md-8 mb-4 border rounded border-info p-3">
                <input value={loanAmount} onChange={(e) => setloanAmount(e.target.value)} className="form-control mb-3" placeholder='Loan Amount' />
                <input value={loanPurpose} onChange={(e) => setloanPurpose(e.target.value)} className="form-control" placeholder='Loan Perpose' />
                <button onClick={loanRequestHandle} className="btn btn-primary mt-2  mb-2 ">Request loan</button>
            </div>






            {
                currentLoan > 0 && (
                    <div className="col-md-8 border rounded border-info p-3">
                        <h5>Pay loan {currentLoan} | {currentLoanPurpose}</h5>
                        <button onClick={payBackHandle} className="btn btn-primary ms-3">Pay loan</button>

                    </div>


                )
            }

        </div>
    )
}

export default Account;