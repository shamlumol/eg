// scrollleftandrightifung


function scrollRight() {
    const scrollWrapper = document.querySelector('.scrolling-wrapper');
    scrollWrapper.scrollBy({ left: 150, behavior: 'smooth' });
}

function scrollToLeft() {
      const scrollWrapper = document.querySelector('.scrolling-wrapper');
      scrollWrapper.scrollBy({ left: -150, behavior: 'smooth' });
  }


//   addcart

let cartCount = 0;
const cartSet = new Set();

function addToCart(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const itemId = card.querySelector('img').src; // Use image src or a unique identifier

    if (cartSet.has(itemId)) {
        // Item is already in the cart, so remove it
        cartSet.delete(itemId);
        cartCount--;
        button.classList.remove('in-cart');
        button.classList.add('not-in-cart');
    } else {
        // Add item to the cart
        cartSet.add(itemId);
        cartCount++;
        button.classList.remove('not-in-cart');
        button.classList.add('in-cart');
    }

    document.querySelector('.cart-count').textContent = cartCount;
}


// wishlis

let wishCount = 0;
const wishListSet = new Set();

function addToWishList(event) {
    const icon = event.currentTarget.querySelector('i');
    const card = event.currentTarget.closest('.card');
    const itemId = card.querySelector('img').src; // Use the image src or some unique identifier

    if (wishListSet.has(itemId)) {
        // Item is already in wishlist, so remove it
        wishListSet.delete(itemId);
        icon.style.color = '#d1d1d1'; // Default color
        wishCount--;
    } else {
        // Add item to wishlist
        wishListSet.add(itemId);
        icon.style.color = 'red'; // Change color to indicate it's in the wishlist
        wishCount++;
    }

    document.querySelector('.wish-count').textContent = wishCount;
}


// open the dropdown menu if the user clicks on the user icon

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

