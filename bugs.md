# Bugs Report And Fixes.

# Bug 1. 
* App component class decorator was terminated with a comma and it was also not wrapped right on top of class

* Same bug as above in Add to cart component class


# Bug 2.
* Add to cart component was being rendered inside the App Component but it was not added to the imports array.


# Bug 3.
* Inside the add-to-cart-component, decreaseProductItem() function. 
* The initial check condition is checking if this.quantity < 1 before decreasing it, 
  which means the quantity decreases first, then you check if it’s too low and that is too late.
  Even if this.quantity === 1, it passes the check (1 < 1 is false), so it skips the condition and 
  still decreases to 0.

* My fix:
decreaseProductItem() {
  if (this.quantity === 1) {
    this.isAddedToCart = false;
  } else {
    this.quantity--;
  }
}


