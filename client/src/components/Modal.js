import React from 'react'
import { POSTAddchild, POSTDropchild, POSTNewcategory, POSTDropcategory, GETPaymenthistory,POSTPayment, POSTAddmoney , POSTaddtype} from '../utilities/axios/Paths'

const Modal = (props) => {
    const handleaddmoney = async (data) => {
        
      await POSTAddmoney(data);
      window.location.reload(false);
      }

      const handlenewcategory = async () => {
        const data = {
          senior_id: props.email,
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

    const [modalData, setModalData] = React.useState(
        {
            jid: "",
            amount: "", 
            spassword: "", 
        }
    )
    
    function handleChange(event) {
        const {name, value} = event.target
        setModalData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        
        event.preventDefault()          
        handleaddmoney(modalData);
    }

  return (
    // <form onSubmit={handleSubmit}>
    <>
            <input
                type="email"
                placeholder="Child Id"
                onChange={handleChange}
                name="jid"
                value={modalData.jid}
            />
            
            <input
                type="number"
                placeholder="Pay Amount"
                onChange={handleChange}
                name="amount"
                value={modalData.amount}
            />
            <input
                type="password"
                placeholder="Your Password"
                onChange={handleChange}
                name="spassword"
                value={modalData.spassword}
            />

        <button type="submit" onClick={handleSubmit}>submit</button>
        </>    
  );
}

export default Modal