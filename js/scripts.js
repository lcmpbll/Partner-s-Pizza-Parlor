//Business Logic

//Pizza
function Pizza(size, price, toppingsArray) {
	this.size = size;
	this.price = price;
	this.toppingsArray = toppingsArray;
}

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

//User Interface Logic

$(document).ready(function(){
	$(".btn").click(function(event){
		event.preventDefault();
		const inputtedPizzaSize = $("input:radio[name=size]:checked").val();
		const inputtedName = $("input#name").val();
		const inputtedToppingsArray = $("input:checkbox[name=toppings]:checked").map(function(){
			return $(this).val()}).get();
		$("#confirm-order").show();
		$(".name").text(inputtedName);
		$("#size").html(inputtedPizzaSize);
		$("#toppings").text(inputtedToppingsArray.join(" "));
		let pizza = new Pizza(inputtedPizzaSize, 0, inputtedToppingsArray);
		let total = pizza.pizzaCost();
		$(".price").html(total);
	});
});
