const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
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

AdminSchema.pre('save', async function(){
    var admin = this;
    if(admin.password){
        admin.password = await bcrypt.hash(admin.password, 8)
    }
});

AdminSchema.statics.findByCredential = async (email,password) => {
    var admin = await Admin.findOne({email:email}); 
    if(!admin){
        throw new Error("Unable to login");
    }

    var check = await bcrypt.compare(password,admin.password); 
    if(!check){
        throw new Error("Unable to login"); 
    }
    return admin;
}


const Admin = mongoose.model("Admin", AdminSchema); 
module.exports = Admin; 