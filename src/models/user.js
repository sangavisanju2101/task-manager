const mongoose = require('mongoose');
const validator = require('validator');
const UserSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    }, 
    email : {
        type : String, 
        reqired : true, 
        trim : true, 
        unique : true, 
        lowercase : true, 
        validate : function(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter valid email address');
            }
        }
    },
    password : {
        type : String,
        trim : true,
        reqired : true, 
        minlength : 8,
        validate : function(value){
            if(value.includes('password')){
                throw new Error("Password shouldn't contain the word password")
            }
        }
    }
}, {
    timestamps : true
}); 
const User = mongoose.model("User", UserSchema); 
module.exports = User; 