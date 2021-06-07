const apiRoutes = (app)=>{
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/user', require('./api/users'));
    app.use('/api/task', require('./api/tasks'));

//hbs routes
    app.use('/task', require('./hbs-routes/tasks'));

}

module.exports = {
    apiRoutes : apiRoutes
} ; 