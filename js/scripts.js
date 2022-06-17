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
	if (this.size != "small" && this.toppings.length > 1) {
		this.price = this.price + 3 + 1 * this.toppings.length;
	} else if (this.size != "small") { this.price = this.price +3
	} else if (this.size != "large" && this.toppings.length > 1) {
		this.price = this.price + 1 * this.toppings.length
	} else {this.pizza = 16.99}
	return this.price;
}

//Toppings
Pizza.prototype.addToppings = function (toppings) {
	this.toppingsArray = [];
	this.toppingsArray.push(toppings);
	return this.toppingsArray;
}