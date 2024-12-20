window.onload = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContent = document.getElementById("cart-content");
    const totalItemsElement = document.getElementById("total-items");
    const totalPriceElement = document.getElementById("total-price");

    // Display the cart
    if (cart.length === 0) {
        cartContent.innerHTML = "<p>Your cart is empty!</p>";
        totalItemsElement.textContent = "Total Items: 0";
        totalPriceElement.textContent = "Total Price: ₹0";
        return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="cart-btn" onclick="increaseQuantity(${item.id})">+</button>
                <button class="cart-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <button class="cart-btn remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;

        cartContent.appendChild(cartItem);
    });

    totalItemsElement.textContent = `Total Items: ${totalItems}`;
    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
};

// Increase quantity
function increaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item.id === productId);
    if (item) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    } else if (item) {
        removeFromCart(productId);
    }
}

// Remove from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

// Update cart display without reload
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContent = document.getElementById("cart-content");
    const totalItemsElement = document.getElementById("total-items");
    const totalPriceElement = document.getElementById("total-price");

    // Clear cart display
    cartContent.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="cart-btn" onclick="increaseQuantity(${item.id})">+</button>
                <button class="cart-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <button class="cart-btn remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;

        cartContent.appendChild(cartItem);
    });

    totalItemsElement.textContent = `Total Items: ${totalItems}`;
    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
}

// Add to cart (called from product pages)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++; // Increase quantity if exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product
    }

    // Save cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart display on the cart page
    updateCartDisplay();
}
