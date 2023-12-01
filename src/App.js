import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FAQS from './components/FAQS';
import Error from './components/Error';
import Signup from './components/Signup';
import Request from './components/Request';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Navbar/>
          
          <Routes>
            
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="about" element={<About/>}></Route>
            <Route exact path="faqs" element={<FAQS/>}></Route>
            <Route exact path="signup" element={<Signup/>}></Route>
            <Route exact path="request" element={<Request/>}></Route>
            <Route exact path="*" element={<Error/>}></Route>
          </Routes>
        </Router>
        
        
      </div>
  );
}

export default App;
