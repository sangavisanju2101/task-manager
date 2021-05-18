const service = require('./users.service');

const getUser = (req,res) => {
    service.getUser(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const saveUser = (req,res) => {
    service.saveUser(req).then((result) => {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateUser = (req,res) => {
    service.updateUser(req).then((result) => {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

const deleteUser = (req,res) => {
    service.deleteUser(req).then((result) => {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

module.exports = {
    getUser : getUser,
    saveUser : saveUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}