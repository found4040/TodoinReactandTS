import React from 'react'
import { connect } from 'react-redux'

const AccoountBalance = ({balance}) => {
    return <div>
        <h3 className='mb-5' style={{ float: "right" }}>Balance:{balance}</h3>
    </div>

}
function mapStateToProps(state) {
    return {
        balance:state.account.balance
    }
}




export default connect(mapStateToProps)(AccoountBalance);