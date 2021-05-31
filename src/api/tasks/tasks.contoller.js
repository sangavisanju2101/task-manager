const service = require('./tasks.service'); 

const getTask = (req,res) => {
    service.getTask(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getTaskById = (req,res) => {
    service.getTaskById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveTask = (req,res) => {
    service.saveTask(req).then((result) => {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateTask = (req,res) => {
    service.updateTask(req).then((result) => {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

const deleteTask = (req,res) => {
    service.deleteTask(req).then((result) => {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=> {
        res.status(500).send(err)
    })
}

module.exports = {
    getTask : getTask,
    getTaskById : getTaskById,
    saveTask : saveTask,
    updateTask : updateTask,
    deleteTask : deleteTask
}