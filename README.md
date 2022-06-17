# _New Project_

#### By _Liam Campbell_

#### _{Brief description of application}_

![A pizza pie!](img/vote.jpeg)

## Technologies Used

* _HTML_
* _Jquery_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

# Describe: Pizza();

Test: "It should create a Pizza object with the property size.
Code: let pizza = new Pizza("small");
Expected Output: pizza{size: 'small'}

Test:"It should create a Pizza object with the properties size and price. 
Code: let pizza = new Pizza ("small", 16.99);
Expected Output: pizza {size: 'small', price: 16.99}

Test: "It should create a Pizza object with the properties size, price, and toppings."
Code: let pizza = new Pizza('small', 16.99, ['cheese']); pizza;
Expected Output: Pizza {size: 'small', price: 16..99, toppings: Array(1)}
# Describe: pizzaCost();

Test: "It should return a price for the pizza at 16.99."
Code: pizza.pizzaCost();
Expected Output: 16.99

Test: "It should return a price for a large sized pizza as 19.99"
Code: let largePizza = new Pizza("large", 0);
largePizza.pizzaCost();
Expected Output: 19.99

Test: "It should return a price for a large pizza with one topping as 19.99"
Code: let pizza = new Pizza('large', 0, ['cheese']);
			pizza.pizzaCost();
Expected Output: 19.99

Test: It should return a price for a large two topping pizza as 21.99."
Code: let largeTwoToppingPizza = new Pizza('large', 0, ['cheese', 'pepperoni'])
			largeTwoToppingPizza.pizzaCost();
Expected Output: 21.99

Test: "It should return the price for a small two topping pizza as 18.99"
Code: let small2ToppingPizza = new Pizza('small', 0 , ['cheese', 'pepperoni']);
			small2ToppingPizza.pizzaCost();
Expected Output: 18.99

# Describe addToppings();

Test:"It should add the inputted topping to pizza toppingsArray."
Code: let pizza1 = new Pizza('small', 0, []);
			pizza1.addToppings("cheese");
Expected Output:['cheese']

# Describe newPizza();
Test:"It should return a pizza with the values: ('',0,[])
Code: let pizza10 = new Pizza();
			pizza10.newPizza();
Expected Output: Pizza {size: '', price: 0, toppingsArray: Array(0)}

Test:
Code:
Expected Output:
## Setup/Installation Requirements

* _Clone the git repository github.com/lcmpbll/pizza-parlor.git to your desktop_
* _Navigate to the top level of the directory._
* _Open index.html in your browser._
* _easy-to-understand_




## Known Bugs

* NA

## License

_Feel free to reach out via [Github](github.com.lcmpbll) to provide feedback on this project or to view my other projects._

[Copyright](LICENSE) (c) _date_ _author name(s)_