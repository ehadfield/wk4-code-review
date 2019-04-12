//Back end

//Constructors
function Pizza(size, ingredients) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};
function Customer(name) {
  this.name = name;
}
//Price Formula
Pizza.prototype.price = function() {
  var price = 10;
  if (this.pizzasize === "Large Pizza") {
    price += 10;
  } else if (this.pizzasize === "Medium Pizza") {
    price += 5;
  } else if (this.pizzasize === "Small Pizza") {
    price += 2;
  } else {
    price += 0;
  }

  if (this.pizzaingredients.length === 0) {
    price += 0;
  } else {
    price += this.pizzaingredients.length;
  }
  return price;
};


//Front End Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedPizzaSize = $("select#pizza-size").val();
    var newCustomer = new Customer(inputtedName);
    var newPizza = new Pizza(inputtedPizzaSize);

 $.each($("input[name='toppings']:checked"), function() {
   newPizza.pizzaingredients.push($(this).val());
 });

 $("ul#pizza-order-list").append("<li><button type='submit' class='btn '><span class='pizzaOrder'>" + "Are You Sure?" + "</button></span></li>");

 $(".pizzaOrder").last().click(function() {
   $("#pizza-order-detail").show();
   $(".name").text(newCustomer.name);
   $(".pizza-size").text(newPizza.pizzasize);
   $(".pizza-ingredients").text(newPizza.pizzaingredients);
   $(".order-total").text(newPizza.price());
   });
 });
});
