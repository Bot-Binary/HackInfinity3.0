import React from 'react'
import { POSTAddchild, POSTDropchild, POSTNewcategory, POSTDropcategory, GETPaymenthistory,POSTPayment } from '../utilities/axios/Paths'
import { res } from '../utilities/axios/Paths'
import toast, { Toaster } from 'react-hot-toast';

const Fake = () => {
  const handlenewchild = () => {

    const data = {
      sid: "sanghanijay36@gmail.com",
      jid: "202101464@daiict.ac.in",
      jpassword: "aaa111!!!"
    };

    POSTAddchild(data);
  }

  const handledropchild = () => {
    const data = {
      sid: "sanghanija36@gmail.com",
      jid: "202101464@daiict.ac.in",
      jpassword: "aaa111!!!"
    };

    POSTDropchild(data);
  }

  const handlenewcategory = async () => {
    const data = {
      senior_id: "sanghanijay36@gmail.com",
      junior_id: "202101464@daiict.ac.in",
      senior_password: "aaa111!!!",
      category: "Grocery",
    };
    await POSTNewcategory(data);
  }

  const handledropcategory = async () => {
    const data = {
      senior_id: "sanghanijay36@gmail.com",
      junior_id: "202101464@daiict.ac.in",
      senior_password: "aaa111!!!",
      category: "Grocjjery",
    };
    await POSTDropcategory(data);
  }

  const handlegethistory = async () => {
    const data ={
      body:{
        'junior_id':'0762201688@bot'
      }
    };

    await GETPaymenthistory(data);
  }

  const handlepayment = async () => {
    const data = {
        password:"aaa111!!!",
        // seniorid:"sanghanijay36@gmail.com",
        juniorid:"202101464@daiict.ac.in",
        category:"Grocery",
        amount:50
    };
    await POSTPayment(data);
  }

  return (
    <>
      <Toaster />
      <div>
        <h1>
          this is fake path.
        </h1>
        {/* <br> */}
        <button className="btn btn-primary" onClick={handlenewchild}>Add Child</button>
        <button className="btn btn-primary mx-5 my-5" onClick={handledropchild}>Drop Child</button>
        <button className="btn btn-primary mx-5 my-5" onClick={handlenewcategory}>Add category </button>
        <button className="btn btn-primary mx-5 my-5" onClick={handledropcategory}>drop category </button>
        <button className="btn btn-primary mx-5 my-5" onClick={handlegethistory}>get history</button>
        <button className="btn btn-primary mx-5 my-5" onClick={handlepayment}>pay now</button>
      </div>
    </>
  )
}

export default Fake