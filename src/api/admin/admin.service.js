const Admin = require('../../models/admin');

const getAdmin = (req,res) => {
    try{
        return Admin.find(req.query);
    } catch(err){
        throw Error(err);
    }
}

const saveAdmin = (req) => {
    try{
        var admin = new Admin(req.body);
        return admin.save();
    } catch(err) {
        throw new Error(err);
    }
}

const updateAdmin = (req) => {
    try{
        return Admin.findByIdAndUpdate(req.params.id,req.body);
    } catch{
        throw new Error(err);
    }
}

const deleteAdmin = (req) => {
    try{
        return Admin.findByIdAndDelete(req.params.id);
    } catch{
        throw new Error(err);
    }
}

module.exports = {
    getAdmin : getAdmin,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin
}