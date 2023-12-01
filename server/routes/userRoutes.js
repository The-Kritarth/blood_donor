
const express = require ('express');
const {body,validationResult} = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/User');
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isoni1045@gmail.com",
    pass: "qcggqdrzmdubsnrk",
  },
});

// import UserContoller from '../controllers/UserController.js';
// import checkUserAuth from '../middlewares/auth-middleware.js';

//two type of routes 1. public routes and 2. private routes
// check user midleware routes
// router.use('/change-password', checkUserAuth);
// router.use('/logged-user', checkUserAuth);

//public routes
// router.post('/register', UserContoller.userResgistration);//when we insert value use post method
// router.post('/login', UserContoller.userLogin);//when we insert value use post method
// router.post('/reset-password-send-email', UserContoller.resetPasswordSendMail);
// router.post('/reset-password/:id/:token', UserContoller.userResetPassword);

//private routes
// router.post('/change-password', UserContoller.changePassword);
// router.get('/logged-user', UserContoller.loggedUser);
//Blog routes

//User SignUp
router.post('/createUser',[
    body('name').isLength({min:5}),
    body('email').isEmail(),
    body('password').isLength({min:8}),
    body('place').isLength({min:3})

],async(req,res)=>{
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(501).json({success:false,message:"Enter valid credentials"});
    }

    const {name,email,blood,place,password} = req.body;
    const u = user.findOne({email:req.body.email});

    if(u.length){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    

    //hashing of password
    const salt = bcrypt.genSaltSync(10);
    const securePassword = bcrypt.hashSync(password,salt);
    
    //Insert data
    console.log(req.body.blood);
    const ins= new user({
      name: name,
      email: email,
      blood: blood,
      place: place,
      password: securePassword
    });
    ins.save()
    .then(() => {
      console.log('User saved successfully');
      return res.status(200).json({success:"Data saved successfully"});
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      return error;
    });
    console.log("here");

})

//User Login
router.post('/login',async(req,res)=>{
  const {email,password}=req.body;
  const u = await user.findOne({ email: email });
  if (!u) {
    // No user found
    return res.status(202).json({ msg: "No user found" });
  }
  
  const isPasswordValid = bcrypt.compareSync(password, u.password);
  
  if (isPasswordValid) {
    // Password is valid, user is logged in successfully
    return res.status(200).json({ msg: "Logged in successfully" });
  } else {
    // Password is invalid
    return res.status(202).json({ msg: "Invalid password" });
  }
})

//User Request
router.post('/request',async(req,res)=>{
  const {fullName,bloodType,phone,nearestState1,nearestState2,nearestState3}=req.body;
  const states=[nearestState1,nearestState2,nearestState3]
  let donors = await user.find({blood:bloodType,state:{$in:states}});

  // console.log(fullName);
  // console.log(phone);
  // console.log(donors.length);

  for(let i=0;i<donors.length;i++){
    console.log(donors[i].email);
    let mailOptions = {
      from: 'isoni1045@gmail.com',
      to: donors[i].email,
      subject: 'Need Of Blood',
      // text:`There is a requirement of ${bloodType}, 
      // you can save someone's life. The requester is ${fullName}, 
      // you can reach out to him/her on the contact number: ${phone}`
      html: `
            <div>
              <h2 style="color: #007BFF;">Urgent Blood Requirement</h2>
              <p>Dear Donor,</p>
              <p>There is an urgent requirement for blood type ${bloodType}.</p>
              <p>You have the power to save a life!</p>
              <p>The requester, ${fullName}, needs your help.</p>
              <p>Please reach out to them on the contact number: ${phone}.</p>

              <h3 style="color: #28a745;">Security Tips for Blood Donation:</h3>
              <ul>
                <li>Always donate blood at recognized and authorized blood donation centers.</li>
                <li>Ensure the staff uses sterilized and disposable equipment for the donation process.</li>
                <li>Ask questions about the screening process to ensure the safety of the donated blood.</li>
                <li>Stay hydrated and have a light meal before donating blood.</li>
                <li>Rest for a short period after donating and avoid strenuous activities.</li>
                <li>Keep the donation site clean and dry to prevent infection.</li>
                <li>Report any unusual symptoms after donation to medical professionals.</li>
              </ul>

              <p>Thank you for your willingness to donate and make a difference.</p>
              <p>Best regards,</p>
              <p>Blood Donor</p>
            </div>
            `,
    }

    await transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
        console.error('Error in sending email:',error);
        return res.status(202).json({msg:'Error in sending the email'});
      }
    })

    
  }
  console.log("Email(s) sent successfully");
  return res.status(200).json({msg:'Email(s) sent successfully'});
  

})
module.exports = router;