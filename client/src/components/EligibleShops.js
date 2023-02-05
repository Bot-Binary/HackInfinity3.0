import React, { useEffect } from 'react'

const EligibleShops = ({ shops }) => {


    return (


        <div>
            {shops ?
                shops.map((item) => (
                    <>
                        <div className="container mb-2 text-center">
                            <div className="row">
                                {/* <div className="col">{item.}</div> */}
                                <div className="col"> {item.id}</div>
                            </div>
                        </div>
                    </>

                ))
                : "No Allowed Shops found"
            }

        </div>
    )
}

export default EligibleShops
