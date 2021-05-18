const add = (x,y) => {
    return new Promise((resolve, reject) => {
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("X and Y should be a number..")
        }
        setTimeout(() => {
            resolve(x+y);
        }, 3000);
    }); 
}; 

const sub = (x,y) => {
    return new Promise((resolve, reject) => {
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("X and Y should be a number..")
        }
        setTimeout(() => {
            resolve(x-y);
        }, 3000);
    }); 
}; 

const mul = (x,y) => {
    return new Promise((resolve, reject) => {
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("X and Y should be a number..")
        }
        setTimeout(() => {
            resolve(x*y);
        }, 3000);
    }); 
}; 

const div = (x,y) => {
    return new Promise((resolve, reject) => {
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("X and Y should be a number..")
        }
        setTimeout(() => {
            resolve(x/y);
        }, 3000);
    }); 
}; 

add(5, 5).then((res1) => {
    console.log("Addition:", res1)
    return sub(res1,2);
}).then((res2) => {
    console.log("Subtraction:", res2)
    return mul(res2,2);
}).then((res3) => {
    console.log("Multiplication:", res3)
    return div(res3,4);
}).then((res4)=> {
    console.log("Division: ", res4)
}).catch((err)=> {
    console.log("Error:", err); 
})


//CRUD operation for user table to post data

app.post('/api/user', (req,res) => {
    var user = new User(req.body); 
    user.save().then((user) => {
        res.status(201).send({
            "user" : user
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for task table to post data

app.post('/api/task', (req,res) => {
var task = new Task(req.body); 
task.save().then((task) => {
    res.status(201).send({
        "Task" : task
    })
}).catch((err) => {
    res.status(500).send(err); 
})
})

//CRUD operation for user table to get data

app.get('/api/user', (req,res) => {
console.log(req.query);  
User.find(req.query).then((users) => {
    res.status(200).send({
        users : users
    })
}).catch((err) => {
    console.log("Error : ", err);
    res.status(500).send(err);
})
})

//CRUD operation for task table to get data

app.get(('/api/task'), (req,res) =>{
console.log(req.query);  
Task.find(req.query).then((tasks) => {
    res.status(200).send({
        tasks : tasks
    })
}).catch((err) => {
    console.log("Error : ", err);
    res.status(500).send(err);
})
})

//CRUD operation for user table to put data(update)

app.put('/api/user/:id', (req,res) => { 
User.findByIdAndUpdate(req.params.id,req.body).then((updateuser) => {
    res.status(200).send("Updated Successfully...")
}).catch((err) => {
    res.status(500).send(err)
})
})

//CRUD operation for user table to delete data
app.delete('/api/user/:id', (req,res) => { 
User.findByIdAndDelete(req.params.id).then((updateuser) => {
    res.status(200).send("Deleted Successfully...")
}).catch((err) => {
    res.status(500).send(err)
})
})