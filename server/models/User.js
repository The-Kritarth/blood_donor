const mongoose = require ("mongoose");
const userSchema = new mongoose.Schema({ //attribute for user schema(is a method define for decelare in)
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,//for not spaces separated
    },
    blood:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,   
    }
    
})
const UserModel = mongoose.model("user",userSchema);//convert schema to model object
// export default UserModel;
module.exports = UserModel;