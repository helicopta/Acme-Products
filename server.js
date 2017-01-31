const express = require('express');
const path = require('path');
const swig = require('swig');
const methodOverride = require('method-override');
swig.setDefaults({cache:false});

var products=require('./products.model')

const app=express();

app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/',function(req,res,next){
	res.render('home', {title:'Home'});
});

app.get('/products',function(req,res,next){
	res.render('products', {title:'Products',products:products.getProducts()});
});

app.delete('/products/:id', function(req,res,next){
	products.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

app.listen(process.env.PORT, function(){
	console.log('listen on '+process.env.PORT);
});