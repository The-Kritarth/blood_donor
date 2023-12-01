import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import userIco from '../assets/emailIco.png';
import passwordIco from '../assets/passwordIco.png';
import homeImg from '../assets/homeImg.png';


function Home() {
  let navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const res = response.data;
      console.log(res)
      if (response.status===200) {
        localStorage.setItem('token', res.token);
        //alert(res.msg);
        navigate('./Request');
      } else {
        
        alert(res.msg);
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error appropriately, e.g., show an error message to the user
      alert(error.response.data.message, 'danger', error.message);
    }
  };

  return (
    <>
      <div className="parent">
        <img src={homeImg} alt="" />
        <div className="grid">
          <form onSubmit={handleSubmit}>      
            <div className="mb-3 inp" >
              <label htmlFor="email" className="form-label">
                <img src={userIco} alt="" />
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            
            <div className="mb-3 inp">
              <label htmlFor="password" className="form-label">
                <img src={passwordIco} alt="" />
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'              
                required
              />
            </div>
            
            {/* <div className='mt-4 d-flex flex-row'>
              <button type="submit">Sign in</button>
            </div> */}
            <div class="inp">
              <input type="submit" className="btn" value="Sign In"/>
            </div>
          
          </form>

          <p class="text--center">
            Not a member? 
            <Link to="/Signup" className="text-decoration-none"> Create new account</Link>
          </p>
        </div>  
      </div>
                                                                                                            
                  
    </>



    
  )
}

export default Home
