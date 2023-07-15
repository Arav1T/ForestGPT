import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForestMain from './Components/Forest/ForestMain';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forgot from './Components/Forgot';
import ForestAbout from './Components/Forest/ForestAbout';
import ForestEnroll from './Components/Forest/ForestEnroll';
import ForestCustom from './Components/Forest/ForestCustom';
// import ForestExplore from './Components/Forest/ForestExplore';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path="/Forest" element={<ForestMain />} />
         <Route path="/" element={<Login />} />
         <Route path="/signUp" element={<Signup />} />
         <Route path="/forgot" element={<Forgot />} />
         <Route path="/forestabout" element={<ForestAbout />} />
         <Route path="/forestenroll" element={<ForestEnroll />} />
         <Route path="/forestcustom" element={<ForestCustom />} />
         {/* <Route path="/forestexplore" element={<ForestExplore />} /> */}
      </Routes>
    </Router>
     
    </>
  )
}

export default App
