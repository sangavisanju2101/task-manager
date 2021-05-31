const taskService = require('../../api/tasks/tasks.service');
const userService = require('../../api/users/users.service');

const getTasks = (req,res) => {
    taskService.getTask(req).then((taskArr)=> {
        res.render('task', {
            title : 'Task page',
            taskArr : taskArr
        })
    }).catch((err)=> {
        console.log("error", err);
        res.status(500).send('Unable to render page');
    })
}

const addTask = (req,res) => {
    userService.getUser(req).then((user)=>{
        res.render('addTask',{
            user : user
        })
    }).catch((err)=> {
        console.log("error", err);
        res.status(500).send('Unable to render page');
    })
}

const editTask = async (req,res) => {
    try{
        var users = await userService.getUser(req);
        var tasks = await taskService.getTaskById(req);
        res.render('addTask',{
            title : "Edit task",
            task : tasks,
            user : users
        })
    }catch(err){
        console.log(err)
        res.status(500).send('Unable to render page');
    }
}

module.exports = {
    getTasks : getTasks,
    addTask : addTask,
    editTask : editTask
}