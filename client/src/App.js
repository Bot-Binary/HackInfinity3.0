import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Sign_up'
import Login from './components/Login'
import Goterror from './components/Goterror';
// import Qrscanner from "./components/Qrscanner";
import Fake from './components/Fake';
import Dashboard from './components/Dashboard';
import ChildDash from './components/ChildDash';
// import ChildHome from './components/ChildHome';   -- Childuser
import ChildUsers from "./components/ChildUsers";
import ChildDetail from "./components/ChildDetail";
import Profile from "./components/Profile";
import ChildProfile from "./components/ChildProfile";

function App() {
  
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/">
           <Route index element={<Login />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/fake" element={<Fake />} />
           <Route path="/Profile" element={<Profile />} />
           <Route path="/ChildProfile" element={<ChildProfile />} />

           {/* Parent */}
           <Route path="/Parent" element={<Dashboard />} />
           <Route path="/Parent/Child-Users" element={<ChildUsers/>} />
           <Route path="/Parent/Child-Details" element={<ChildDetail />} />


          {/* Child */}
           <Route path="/Child" element={<ChildDash />} />


           <Route path='*' element={<Goterror />}></Route>
         </Route>

        
{/* 
         <Route path="/senior">
           <Route index element={<Fake />} />
           <Route path="/profile" element={<Fake />} />
         </Route>  */}
       </Routes>
     </BrowserRouter>

  );
}

export default App;
