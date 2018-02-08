var bodyParser= require('body-parser');

var data=[{item: 'xyz'},{item:'ACB'},{item:'KLA'}];
var urlencodedParser= bodyParser.urlencoded({extended: false});


module.exports=function(app){

	app.use(bodyParser.urlencoded({ extended: false }))

	// parse application/json
	app.use(bodyParser.json())
	app.set('view engine','ejs');

	app.get('/todo',function(req,res)
	{
		res.render('todo',{todos: data});
	});

	app.post('/todo/addItem',function(req,res)
	{
		data.push(req.body);
		res.render('todo',{todos: data});
	});

	app.delete('/todo/:item',function(req,res)
	{
		data=data.filter(function(todo){
			return  todo.item.replace(/ /g,'-')!== req.params.item;
	});
	res.json(data);
});
}
