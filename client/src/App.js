import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Sign_up'
import Login from './components/Login'
import Goterror from './components/Goterror';
// import Qrscanner from "./components/Qrscanner";
import Fake from './components/Fake';
import Dashboard from './components/Dashboard';
import ChildDash from './components/ChildDash';
import ChildHome from './components/ChildHome';
import ChildUsers from "./components/ChildUsers";
import ChildDetail from "./components/ChildDetail";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sfda" element={<Fake />} />
          <Route path="/fake" element={<Fake />} />

          {/* Junior */}
          <Route path="/senior" element={<Dashboard />} />
          <Route path="/senior/Child-Users" element={<ChildHome/>} />


          <Route path="/junior" element={<ChildDash />} />
          <Route path="/junior/profile" element={<Fake />} />

          <Route path="/childusers" element={<ChildUsers />} />
          <Route path="/childdetail" element={<ChildDetail />} />


          <Route path='*' element={<Goterror />}></Route>
        </Route>

        {/* 

        <Route path="/senior">
          <Route index element={<Fake />} />
          <Route path="/profile" element={<Fake />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
