import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Sign_up'
import Login from './components/Login'
import Goterror from './components/Goterror';
import Qrscanner from "./components/Qrscanner";
import Fake from './components/Fake';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/qrscan" element={<Qrscanner />} />
          <Route path="/fake" element={<Fake />} />

          {/* Junior */}
          <Route path="/junior" element={<Fake />} />
          <Route path="/junior/profile" element={<Fake />} />


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
