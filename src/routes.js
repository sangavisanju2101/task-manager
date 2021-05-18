const apiRoutes = (app)=>{
    app.use('/api/user', require('./api/users'));
    app.use('/api/task', require('./api/tasks'));
}

module.exports = {
    apiRoutes : apiRoutes
} ; 