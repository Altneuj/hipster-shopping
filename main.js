var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
var cart = [];

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item').getAttribute('data-name');
    var itemPrice = e.target.closest('.item').getAttribute('data-price');

    var product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);
  }
  renderCart();
});

var renderCart = function () {
  var cartList = document.getElementsByClassName('cart-list')[0];
  var cartTotal = document.getElementsByClassName('total')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  var items = '';
  var total = '';

  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';

      //found here https://stackoverflow.com/questions/8976627/how-to-add-two-strings-as-if-they-were-numbers
       total = +total + +cart[i].price;
      totalHTML = "<span>" + total + '</span>';
  }

  cartList.innerHTML = items;
  cartTotal.innerHTML = totalHTML;
};

var clearCart = function () {
  var cartList = document.getElementsByClassName('cart-list')[0];
  var cartTotal = document.getElementsByClassName('total')[0];
  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
    }
    cart = [];
    cartTotalReset = "<span>" + 0 + "</span>"
    cartTotal.innerHTML = cartTotalReset;


};

document.getElementsByClassName('clear-cart')[0].addEventListener('click', function(){
  debugger;
  clearCart();
});
