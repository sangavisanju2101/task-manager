const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

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

UserSchema.pre('save', async function(){
    var user = this;
    if(user.password){
        user.password = await bcrypt.hash(user.password, 8)
    }
});

const User = mongoose.model("User", UserSchema); 
module.exports = User; 