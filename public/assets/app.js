var express =require('express');
var todoController = require('./todoController');
var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use('/todo',express.static('./'));

todoController(app);
app.listen(3000);
console.log('Your are listening to port 3000');
