var _products=[
	{
		id:1,
		name:'apple'
	},
	{
		id:4,
		name:'banana'
	}
];

module.exports = {
	getProducts: function(){
		return _products;
	},
	addProduct: function(product){
		let maxId=_products.reduce(function(max, product){
			if(product.id>max){
				max=product.id;
			}
			return max
		},0);
		product.id=maxId;
		_products.push(product);
		
	},
	editProduct: function(name){
		
	},
	deleteProduct: function(id){
		//naming-- just call this product
		var toDelete=this.getProducts().filter(function(product){
			return product.id===id;
		})[0];
		var idx= this.getProducts().indexOf(toDelete);
		this.getProducts().splice(idx, 1);
	}
};
