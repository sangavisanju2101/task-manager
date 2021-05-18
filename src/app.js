require("./db/mongoose")
const express = require("express");
const app = express();
const path = require ("path");
const User = require('./models/user');
const Task = require('./models/task');
const routes = require('./routes'); 

const taskService = require('./api/tasks/tasks.service');
const userService = require('./api/users/users.service');

const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.apiRoutes(app); 

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

app.get('/task', (req,res)=> {
    taskService.getTask(req).then((taskArr)=> {
        res.render('task', {
            title : 'Task page',
            taskArr : taskArr
        })
    }).catch((err)=> {
        console.log("error", err);
        res.status(500).send('Unable to render page');
    })
})

app.get('/task/add', (req,res)=>{
    userService.getUser(req).then((user)=>{
        res.render('addTask',{
            user : user
        })
    })
    
})

app.get('', (req,res)=> {
    res.send({
        "task-manager" : "home page"
    })
})

app.listen('7070', ()=>{
    console.log("the server is up on 7070 port")
})