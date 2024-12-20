// Dummy products data
const products = [
    { id: 1, name: "Apple iPhone 15 (128 GB)", price: 66100, image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg" },
    { id: 2, name: "HP Victus 15 i5 13th Gen", price: 68956, image: "https://m.media-amazon.com/images/I/71mu9GLMuHL._SX522_.jpg" },
    { id: 3, name: "Samsung 301 L, 3 Star", price: 36500, image: "https://m.media-amazon.com/images/I/31CWT3NuxNL._SX342_SY445_QL70_FMwebp_.jpg" },
    { id: 4, name: "Fashion || Tshits || Casuals", price: 3999, image: "https://m.media-amazon.com/images/G/31/img21/MA2024/AW24FLIP/Winterbrands/Variant_1_978x1420._SY530_QL85_FMpng_.png" },
];

// DOM Elements
const productList = document.getElementById("product-list");
const loginBtn = document.getElementById("loginButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const cartBtn = document.getElementById("cart-btn");

// Load Products
function loadProducts() {
    productList.innerHTML = ""; // Ensure no duplicate entries
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="exploreMore(${product.id})">Explore More</button>
        `;
        productList.appendChild(productCard);
    });
}

// "Explore More" button functionality

function exploreMore(productId) {
    const product = products.find((p) => p.id === 4);
    if (product) {
        // Here, you can redirect to a new page and pass the product ID via the query string or session storage
        const productDetailsPage = `#?id=${product.id}`; // Change to your product details page
        window.location.href = productDetailsPage; // Redirect to product details page
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

// Close button functionality
const closeAdButton = document.getElementById('close-ad');
const advertisementPopup = document.getElementById('advertisement');

closeAdButton.addEventListener('click', () => {
  advertisementPopup.style.display = 'none'; // Hide the advertisement
});

// Optional: Automatically hide the ad after 5 seconds
setTimeout(() => {
  advertisementPopup.style.display = 'none';
}, 5000);