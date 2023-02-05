
import React, {useEffect, useState} from 'react'
// import img1 from '../components/Images/1.png'
// import img2 from '../components/Images/2.png'
// import img3 from '../components/Images/3.png'



export default function Card(props) {
// const Card(props) =>{

//}
const {addChild}=props;

const [profile, setProfile] = useState({});
  const [history, setHistory] = useState({});
  let localprofile = {};
  let localhistory = [];

  useEffect(() => {
    localprofile = JSON.parse(localStorage.getItem('Profile'));
    if (localprofile) setProfile(localprofile);
    console.log(localprofile)

    // if (localhistory) setHistory(localhistory);
    // console.log(history);
  }, []);


  return (
    // card taken from bootstrap

    <div className="d-flex flex-wrap">


      <div className="card mx-4 my-1 " style={{ "width": "15rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ "color": "#848586" }}>Your Balance</h5>
          <p className="card-text" style={{ "fontSize": "1.3rem", "color": "black" }}>₹ {profile.balance}</p>
        </div>
      </div>



      <div className="card mx-4 my-1" style={{ "width": "15rem" }}>
        <div className="card-body">
        {/* <div className="imgx">
            <img src={img2} alt="" />
          </div> */}
          <h5 className="card-title" style={{ "color": "#848586" }}>Link a Child</h5>
          <i onClick={addChild} className="card-link">Click here </i>
        </div>
      </div>


      



      {/* <div className="card mx-4 my-1" style={{ "width": "15rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ "color": "#848586" }}>Total Money spend by Childrens</h5>

          <p className="card-text" style={{ "fontSize": "1.3rem", "color": "black" }}>₹ 21,000</p>
          
          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ "height":"6px"}}>
  <div className="progress-bar" style={{"width":"84%"}}></div>
</div>
        </div>
      </div> */}


    </div>

  );
}