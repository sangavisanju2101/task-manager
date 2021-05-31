const express = require("express"); 
const router = express.Router(); 
const controller = require('./task.contoller'); 

router.get('/', controller.getTasks);
router.get('/add', controller.addTask);
router.get('/edit/:id', controller.editTask);

module.exports = router; 