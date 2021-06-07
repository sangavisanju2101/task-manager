const service = require('./admin.service');
const Admin = require('../../models/admin');

const getAdmin = (req,res) => {
    service.getAdmin(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const saveAdmin = (req,res) => {
    service.saveAdmin(req).then((result) => {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateAdmin = (req,res) => {
    service.updateAdmin(req).then((result) => {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

const deleteAdmin = (req,res) => {
    service.deleteAdmin(req).then((result) => {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

const loginAdmin = (req,res) => {
    Admin.findByCredential(req.body.email, req.body.password).then((admin) => {
        res.status(200).send(admin);
    }).catch((err) => {
        res.status(500).send("Unable to login");
    })
}

module.exports = {
    getAdmin : getAdmin,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin,
    loginAdmin : loginAdmin
}