// BloodRequestForm.js
import axios from 'axios';
import './Home.css';
import userIco from '../assets/userIco.png';
import phoneIco from '../assets/phoneIco.png';
import bloodIco from '../assets/bloodIco.png';
import nearestIco from '../assets/nearestIco.png';
import React, { useState } from 'react';
import requestImg from '../assets/Request.png';

const Request = () => {
  
  const [fullName,setfullName] = useState('');
  const [phoneNumber,setphoneNumber] = useState('');
  const [bloodType,setBloodType] = useState('');
  const [nearestState1,setnearestState1] = useState('');
  const [nearestState2,setnearestState2] = useState('');
  const [nearestState3,setnearestState3] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/user/request', {
          fullName: fullName,
          phone: phoneNumber,
          bloodType: bloodType,
          nearestState1:nearestState1,
          nearestState2:nearestState2,
          nearestState3:nearestState3
          
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      const res = response.data;
      console.log(bloodType);
      if (response.status===200) {
        // localStorage.setItem('token', res.token);
        alert(res.msg, "success");
        // navigate('/');
      } else {
        alert(res.msg, "danger");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error appropriately, e.g., show an error message to the user
      alert(error.response.data.message, 'danger', error.message);
    }
  };
  return (
    <>
      <div className='parentSignup'>
        <img src={requestImg} alt=""  style={{height:'30%',width:'30%', marginTop:'10%', marginLeft:'4%', marginRight:'5%'}}/>
        <div className='gridSignup' style={{marginLeft:'15%',marginTop:'7%'}}>
          <form onSubmit={handleSubmit}>
              
            <div className='mb-3 inp'>
              <label htmlFor="fullName">
                <img src={userIco} alt="" />
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                name="fullName"
                value={fullName}
                onChange={(e)=> setfullName(e.target.value)}
                placeholder='Fullname'
                required
              /> 
            </div>

            <div className='mb-3 inp'>
              <label htmlFor="phoneNumber">
                <img src={phoneIco} alt="" />
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e)=> setphoneNumber(e.target.value)}
                placeholder='Phone number'
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // placeholder="Format: 123-456-7890"
                required
              /> 
            </div>

            <div className='mb-3 inp'>
              <label htmlFor="bloodType">
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

            <div className='mb-3 inp'>
              <label htmlFor="nearestState1">
                <img src={nearestIco} alt="" />
              </label>
              <select
                id="nearestState1"
                name="nearestState1"
                value={nearestState1}
                onChange={(e)=> setnearestState1(e.target.value)}
                required
              >
                <option value="">Select Nearest State</option>
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

            <div className='mb-3 inp'>
              <label htmlFor="nearestState2">
                <img src={nearestIco} alt="" />
              </label>
              <select
                id="nearestState2"
                name="nearestState2"
                value={nearestState2}
                onChange={(e)=> setnearestState2(e.target.value)}
                required
              >
                <option value="">Select Nearest State</option>
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
            <div className='mb-3 inp'>
              <label htmlFor="nearestState3">
                <img src={nearestIco} alt="" />
              </label>
              <select
                id="nearestState3"
                name="nearestState3"
                value={nearestState3}
                onChange={(e)=> setnearestState3(e.target.value)}
                required
              >
                <option value="">Select Nearest State</option>
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
            <div className="inp">
              <input type="submit" className="btn" value="Submit Request"/>
            </div>
          </form>
        </div>
      </div>
      
    </>
    
  );
};

export default Request;
