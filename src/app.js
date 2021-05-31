require("./db/mongoose")
var bcrypt = require('bcryptjs');
const express = require("express");
const app = express();
const path = require ("path");
const routes = require('./routes');
var hbs = require('hbs');

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

hbs.registerHelper('select', function(selected, options) {
    return options.fn(this).replace(
        new RegExp(' value=\"' + selected + '\"'),
        '$& selected="selected"');
});

app.get('', (req,res)=> {
    res.send({
        "task-manager" : "home page"
    })
})

app.listen('7070', () => {
    console.log("the server is up on 7070 port")
})