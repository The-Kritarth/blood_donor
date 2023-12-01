const mongoose = require("mongoose");
const DATABASE_URL = 'mongodb://localhost:27017/blood_donor'


const connectDB = () => {
    mongoose.connect(DATABASE_URL).then(()=>{console.log("Connected successfully")}).catch((e)=>{console.log("Error connecting")});
}


module.exports = connectDB;