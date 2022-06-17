//Business Logic

//Pizza
function Pizza(size, price, toppingsArray) {
	this.size = size;
	this.price = price;
	this.toppingsArray = toppingsArray;
}
// Pizza.prototype.newPizza = function () {
// 	this.toppingsArray = [];
// 	this.size = "";
// 	this.price = 0;
// }

//Cost
Pizza.prototype.pizzaCost = function () {
	this.price = 16.99;
	if (this.size === "large" && this.toppingsArray.length > 1) {
		this.price = this.price + 3 + 1 * this.toppingsArray.length;
	} else if (this.size === "large") { 
		this.price = this.price +3
	} else if (this.size === "small" && this.toppingsArray.length > 1) {
		this.price = this.price + 1 * this.toppingsArray.length
	} else {this.pizza = 16.99}
	return this.price;
}

//Toppings
// Pizza.prototype.addToppings = function (toppings) {
// 	this.toppingsArray.push(toppings);
// 	return this.toppingsArray;
// }

//Size
// Pizza.prototype.smallOrLarge = function(pizzaSize) {
// 	if (pizzaSize === "large"){
// 		this.size = "large"
// 	} else {
// 		this.size = "small"
// 	}
// 	return this.size
// }

//User Interface Logic

$(document).ready(function(){
	$(".btn").click(function(event){
		event.preventDefault();
		$("#confirm-order").show();
		const inputtedName = $("input#name").val();
		$(".name").text(inputtedName);
		const inputtedPizzaSize = $("input:radio[name=size]:checked").val();
		$("#size").html(inputtedPizzaSize);
		const inputtedToppingsArray = $("input:checkbox[name=toppings]:checked").map(function(){
			return $(this).val()}).get();
		$("#toppings").text(inputtedToppingsArray.join(" "));
		//making the pizzas	
		let pizza = new Pizza(inputtedPizzaSize, 0, inputtedToppingsArray);
		let total = pizza.pizzaCost();
		$(".price").html(total);
	});
});
