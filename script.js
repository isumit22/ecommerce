// Dummy products data
const products = [
    { id: 1, name: "Apple iPhone 15 (128 GB)", price: 66100, image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg" },
    { id: 2, name: "HP Victus 15 i5 13th Gen", price: 68956, image: "https://m.media-amazon.com/images/I/71mu9GLMuHL._SX522_.jpg" },
    { id: 3, name: "boAt Rockerz 425 Bluetooth", price: 1100, image: "https://m.media-amazon.com/images/I/61XvYOrqVeL._SX522_.jpg" },
    { id: 4, name: "Drift Cat 5 Ultra II Sneaker", price: 3999, image: "https://m.media-amazon.com/images/I/81L20mwLykL._SY695_.jpg" },
];

// DOM Elements
const productList = document.getElementById("product-list");
const loginBtn = document.getElementById("loginButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const cartBtn = document.getElementById("cart-btn");


let cartCount = 0;

// Load Products
function loadProducts() {
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}
function loadProducts() {
    productList.innerHTML = ""; // Ensure no duplicate entries
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cartCount++;
        cartBtn.textContent = `Cart (${cartCount})`;
        alert(`${product.name} has been added to your cart!`);
    }
}

// Toggle Dropdown Menu
loginBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the event from propagating to document click
    dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
});




// Initialize
window.onload = loadProducts;
