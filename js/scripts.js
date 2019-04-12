//Back end

//Constructors
function Pizza(size, ingredients) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

function Customer(name) {
  this.name = name;
}












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

 $("ul#pizza-order-list").append("<li><button type='submit' class='btn '><span class='pizzaOrder'>" + "Verify Order" + "</button></span></li>");

 $(".pizzaOrder").last().click(function() {
   $("#pizza-order-detail").show();
   $(".name").text(newCustomer.name);
   $(".pizza-size").text(newPizza.pizzasize);
   $(".pizza-ingredients").text(newPizza.pizzaingredients);
   $(".order-total").text(newPizza.price());

   });
 });
});
