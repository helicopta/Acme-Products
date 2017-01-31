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
	deleteProduct: function(id){
		var toDelete=this.getProducts().filter(function(product){
			return product.id===id;
		})[0];
		var idx= this.getProducts().indexOf(toDelete);
		this.getProducts().splice(idx, 1);
	}
};