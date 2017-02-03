const express = require('express');
const path = require('path');
const swig = require('swig');
const methodOverride = require('method-override');
const bodyParser=require('body-parser');
swig.setDefaults({cache:false});

var products=require('./products.model')

const app=express();

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/',function(req,res,next){
	res.render('home', {title:'Home'});
});

//you can use ()=> {} instead of function()
app.get('/products/update',function(req,res,next){
	//products.editProduct(req.body);
	//give yourself room... {fizz:'buzz'} not good.. do { fizz: 'buzz' }
	res.render('update', {title:'update',});
});

app.get('/products',function(req,res,next){
	res.render('products', {title:'Products',products:products.getProducts()});
});

app.post('/products',function(req,res,next){
	products.addProduct(req.body);
	res.redirect('/products');
});

//use a router so you don't have to keep on repeating /products
app.patch('/products/:name',function(req,res,next){
	products.editProduct(req.params.name);
	res.redirect('/products');
});

app.delete('/products/:id', function(req,res,next){
	products.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

app.listen(process.env.PORT, function(){
	//you can use backticks `listening on port ${port}`
	console.log('listen on '+process.env.PORT);
});
