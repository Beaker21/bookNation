var ShoppingCart = (function($) {
    "use strict";
    

    var products = document.querySelector(".products"),
        cart =     document.querySelector(".shopping-cart-list"),
        productQuantity = document.querySelector(".product-quantity"),
        emptyCart = document.querySelector(".empty-cart-btn"),
        cartCheckout = document.querySelector(".cart-checkout"),
        totalPrice = document.querySelector(".total-price");
    
  
    var products = []
     
        productsInCart = [];
    
  
    var generateProductList = function() {
      products.forEach(function(item) {
        var product = document.createElement("div");
        product.className = "product";
        product.innerHTML = `<div class="product-image">
                               <img src="${item.imageUrl}" alt="${item.name}">
                               </div>
                               <div class="product-name"><span>Product:</span> ${item.name}</div>
                               <div class="product-description"><span>Description:</span> ${item.description}</div>
                               <div class="product-price"><span>Price:</span> ${item.price} $</div>
                               <div class="product-add-to-cart">
                                 <a href="#0" class="button see-more">More Details</a>
                                 <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                               </div>
                            </div>`;
                               
  products.appendChild(product);
      });
    }
    
 
    var generateCartList = function() {
      
      cart.innerHTML = "";
      
      productsInCart.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      });
      
      productQuantity.innerHTML = productsInCart.length;
      
      generateCartButtons()
    }
    

    var generateCartButtons = function() {
      if(productsInCart.length > 0) {
        emptyCart.style.display = "block";
        cartCheckout.style.display = "block"
        totalPrice.innerHTML = "$ " + calculateTotalPrice();
      } else {
        emptyCart.style.display = "none";
        cartCheckout.style.display = "none";
      }
    }
    
  
    var setupListeners = function() {
      productsEl.addEventListener("click", function(event) {
        var el = event.target;
        if(el.classList.contains("add-to-cart")) {
         var Id = el.dataset.id;
         addToCart(Id);
        }
      });
    
      emptyCart.addEventListener("click", function(event) {
        if(confirm("Are you sure?")) {
          productsInCart = [];
        }
        generateCartList();
      });
    }
    

    var addToCart = function(id) {
      var obj = products[id];
      if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
        productsInCart.push({product: obj, quantity: 1});
      } else {
        productsInCart.forEach(function(item) {
          if(item.product.id === obj.id) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    }
    
    

    var productFound = function(productId) {
      return productsInCart.find(function(item) {
        return item.product.id === productId;
      });
    }
  
    var calculateTotalPrice = function() {
      return productsInCart.reduce(function(total, item) {
        return total + (item.product.price *  item.quantity);
      }, 0);
    }
    
 
    var init = function() {
      generateProductList();
      setupListeners();
    }
    

    return {
      init: init
    };
    
   
  })(jQuery);
  
  ShoppingCart.init();