//Business Logic
//Pizza
function Pizza(size, price) {
	this.size = size;
	this.price = price;
}
//Cost
Pizza.prototype.pizzaCost = function () {
	this.price = 16.99;
	if (this.size = "large"){
		this.price = this.price + 3;
	}
	return this.price;
}