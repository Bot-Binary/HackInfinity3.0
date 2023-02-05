import React from 'react'

const Transaction = ({ history }) => {
    // const {shopName,amount,date}=props;
    return (

        <div>
            {history.length ?
                history.map((item) => (
                    <>
                        <div className="container mb-2 text-center">
                            <div className="row">
                                <div className="col">{item.to}</div>
                                <div className="col">₹ {item.amount}</div>
                                <div className="col">{item.time}</div>
                            </div>
                        </div>
                    </>

                ))
                : "No Child found"
            }
        </div>

    )
}

export default Transaction
