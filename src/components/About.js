import React from 'react';
import creatorImage from '../assets/CreatorImg.jpg'; // Update with the actual path to the image
import './About.css';
function About() {
  
    return (
      <div className="container mt-5" style={{marginBottom:'5%'}}>
        <div style={{marginTop:'2%',marginLeft:'5%',marginRight:'5%',marginBottom:'5%'}}>
          <h2 className="text-primary" >Welcome to Blood Donor!</h2>
          <p style={{marginTop:'4%'}}>
          At Blood Donor, we extend a heartfelt welcome to you. Your presence on our platform signifies a shared commitment to making a positive impact on the lives of those in need. Together, we form a community bound by the noble act of blood donation—a gesture that holds the power to save lives and inspire hope.
          </p>
          <p>
          As a visitor, you play a crucial role in our mission to ensure a stable and accessible blood supply for medical emergencies, surgeries, and ongoing treatments. Your willingness to contribute is a testament to the compassion that drives our collective efforts.
          </p>
          <p>
          Thank you for being a vital part of Blood Donor. Together, let's create a legacy of compassion and generosity.
          </p>
          <p>
          Warm regards,<br/>
          The Blood Donor Team
          </p>
          
        </div>
        
  
        <div className="row mt-4" style={{marginLeft:'5%',marginRight:'5%'}}>
          <div className="col-md-4">
            <img src={creatorImage} alt="Creator's Image" className="img-fluid rounded-circle" style={{height:'50%',width:'40%'}}/>
          </div>
          <div className="col-md-8">
            <h3 className="text-success">My Mission</h3>
            <p>
              At my core, I aim to <em>provide a platform that can be used to help the people to receive and donate blood</em>. 
              Through this platform, I hope to <em>increase the blood donation rates</em>.
            </p>
            <h3 className="text-success">About Me</h3>
            <p>
              I have a passion for <em>Web development</em> and have created various projects using it. 
              My dedication to <em>have a positive impact on the society </em> has been a driving force in shaping this platform.
            </p>
            <h3 className="text-success">Contact Information</h3>
            <p>
              Feel free to reach out to me for any inquiries or collaborations. 
              You can contact me via email at <strong>[Kritarth_Soni@outlook.com]</strong>.
            </p>
          </div>
        </div>
  
        
  
        
      </div>
    );
  
}

export default About
