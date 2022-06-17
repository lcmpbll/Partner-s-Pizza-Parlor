//Business Logic
//Pizza
function Pizza(size, price, toppings) {
	this.size = size;
	this.price = price;
	this.toppingsArray = toppingsArray;
}
//Cost
Pizza.prototype.pizzaCost = function () {
	this.price = 16.99;
	if (this.size = "large" && this.toppings.length != 0){
		this.price = this.price + 6;
	}
	return this.price;
}