import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import userIco from '../assets/userIco.png';
import emailIco from '../assets/emailIco.png';
import bloodIco from '../assets/bloodIco.png';
import locationIco from '../assets/locationIco.png';
import cpasswordIco from '../assets/cpasswordIco.png';
import passwordIco from '../assets/passwordIco.png';
import signupGif from '../assets/SignUpGif.gif';



function Signup() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [place, setPlace] = useState('');
  const [bloodType,setBloodType] = useState('');

  const handleSubmit = async (e) => {
    if(password !== cpassword){
      alert("Passwords doesn't match")
      return;
    }
    e.preventDefault();
    console.log(place);

    
    try {
      const response = await axios.post('http://localhost:5000/api/user/createUser', {
          name: username,
          email:email,
          blood:bloodType,
          place: place,
          password: password
          
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      const res = response.data;
      console.log(res);
      if (response.status===200) {
        // localStorage.setItem('token', res.token);
        //alert("SignUp in successfully", "success");
        navigate('/');
      } else {
        alert(res.message, "danger");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error appropriately, e.g., show an error message to the user
      alert(error.response.data.message, 'danger', error.message);
    }
  };

  return (
    <>
      <div className="parentSignup">
        <img src={signupGif} alt="" />
        <div className="gridSignup">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 inp">
              <label htmlFor="username" className="form-label">
                <img src={userIco} alt="" />
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Fullname'
                required
              />
            </div>

            <div className="mb-3 inp">
              <label htmlFor="email" className="form-label">
                <img src={emailIco} alt="" />
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>

            <div className='mb-3 inp'>
              <label htmlFor="bloodType" className="form-label">
                <img src={bloodIco} alt="" />
              </label>
              <select
                id="bloodType"
                className="form-control"
                value={bloodType}
                onChange={(e)=> setBloodType(e.target.value)}
                required
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="mb-3 inp">
              <label htmlFor="place" className="form-label">
                <img src={locationIco} alt="" />
              </label>
              <select
                id="place"
                className="form-control"
                value={place}
                onChange={(e)=> setPlace(e.target.value)}
                required
              >
                <option value="">Select Your State</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
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
            <div className="mb-3 inp">
              <label htmlFor="password_confirmation" className="form-label">
                <img src={cpasswordIco} alt="" />
              </label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder='Confirm Password'
                required
              />
            </div>
            
            <div className="inp">
              <input type="submit" className="btn" value="Sign Up"/>
            </div>
            
          </form>
        </div>
      </div>
    </>
            
          
  )
}

export default Signup
