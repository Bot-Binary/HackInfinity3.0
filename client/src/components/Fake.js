import React from 'react'
import { POSTAddjunior } from '../utilities/axios/Paths'
import { res } from '../utilities/axios/Paths'

const Fake = () => {
  const handlenewchild = () => {
    
    const data = {
      sid : "sanghanijay36@gmail.com",
      spassword: "aaa111!!!",
      jid : "sanghanijay36@gmail.com",
      jpassword : "aaa111!!!"
    };

    POSTAddjunior(data);
  }

  return (
    <div>
      <h1>
      this is fake path.
      <button onClick={handlenewchild}>addchild</button>
</h1>
    </div>
  )
}

export default Fake
