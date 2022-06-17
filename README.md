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

Test: "It should return a price for a large pizza with one topping as 22.99"
Code: let pizza = new Pizza('small', 16.99, ['cheese']);
			pizza.pizzaCost();
Expected Output: 22.99

Test: 
Code:
Expected Output:
## Setup/Installation Requirements

* _Clone the git repository github.com/lcmpbll/voter.git to your desktop_
* _Navigate to the top level of the directoy._
* _Open index.html in your browser._
* _easy-to-understand_




## Known Bugs

* NA

## License

_Feel free to reach out via [Github](github.com.lcmpbll) to provide feedback on this project or to view my other projects._

[Copyright](LICENSE) (c) _date_ _author name(s)_