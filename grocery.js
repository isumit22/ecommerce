const products = [
    {
      id: 91,
      name: "MAGGI 2-Minute Instant Noodles ( Pack Of 12 )",
      price: 160,
      image: "https://m.media-amazon.com/images/I/61Nge+2s2fL._SL1001_.jpg",  
      rating: 4.8,
    },
    {
      id: 92,
      name: "Dabur Vedic Tea - 500gram (Black Tea)",
      price: 205,
      image: "https://m.media-amazon.com/images/I/61DMPchFPLL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 93,
      name: "Fortune Sunlite Refined Sunflower Oil, 1L",
      price: 158,
      image: "https://m.media-amazon.com/images/I/81ILzuTdkbL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 94,
      name: "Tata Salt 1 Kg",
      price: 25,
      image: "https://m.media-amazon.com/images/I/614mm2hYHyL._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 95,
      name: "Tata Sampann Masoor Dal, Whole, 1kg",
      price: 157,
      image: "https://m.media-amazon.com/images/I/7130+omz8HL._SX679_.jpg",
      rating: 4.4,
    },
    {
      id: 96,
      name: "Sunfeast Farmlite Digestive Biscuit, 800 g Pack",
      price: 120,
      image: "https://m.media-amazon.com/images/I/9168NMg+3sL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 97,
      name: "Tata Sampann Unpolished Green Moong Dal (Whole), 500g",
      price: 84,
      image: "https://m.media-amazon.com/images/I/71i2t2VhdWL._SX679_.jpg",
      rating: 4.5,
    },
    {
      id: 98,
      name: "Tata Tea Agni | Strong chai With 10% Extra Strong Leaves | Black Tea | 1 kg",
      price: 219,
      image: "https://m.media-amazon.com/images/I/61WKAjRcg-L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 99,
      name: "Fortune 100% Chana Dal Besan,1 kg",
      price: 130,
      image: "https://m.media-amazon.com/images/I/81N-mEgb7VL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 100,
      name: "Nutrela SOYA Chunks 1 kg",
      price: 156,
      image: "https://m.media-amazon.com/images/I/51ciafS6eZL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 101,
      name: "Sunfeast Dark Fantasy Choco Fills, 275g",
      price: 99,
      image: "https://m.media-amazon.com/images/I/81Gpq9w9TUL._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 102,
      name: "NIVEA Soft Light Moisturizer, 300 ml",
      price: 375,
      image: "https://m.media-amazon.com/images/I/51cXkIfVBtL._SX522_.jpg",
      rating: 4.8,
    },
    {
      id: 103,
      name: "UNIBIC FOODS Cashew Badam Cookies, 500 g",
      price: 75,
      image: "https://m.media-amazon.com/images/I/6101LsNX0wL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 104,
      name: "Haldiram's Delhi Bhujia Masala | 400g",
      price: 108,
      image: "https://m.media-amazon.com/images/I/71hPJnCDUNL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 105,
      name: "Surf Excel Matic Top Load Liquid",
      price: 599,
      image: "https://m.media-amazon.com/images/I/51-R1pQ1rjL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 106,
      name: "Fresh Potato, 1kg",
      price: 40,
      image: "https://m.media-amazon.com/images/I/41QKCkQ2A5L._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 107,
      name: "Himalaya Pure Skin Neem Facial Kit",
      price: 169,
      image: "https://m.media-amazon.com/images/I/71NJLgKIVNL._SX522_.jpg",
      rating: 4.7,
    },
    {
      id: 108,
      name: "Dabur Raw Organic Honey 500g | 100% Pure and Natural ",
      price: 338,
      image: "https://m.media-amazon.com/images/I/71j7J4b7y5L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 109,
      name: "Nuts About You Premium ALMONDS, 200 g | New Crop | Premium",
      price: 199,
      image: "https://m.media-amazon.com/images/I/819aX+sYzCL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 110,
      name: "Del Monte Tomato Ketchup - Classic Blend, 900 grams",
      price: 76,
      image: "https://m.media-amazon.com/images/I/51Kghh1CZeL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 111,
      name: "Kellogg's Muesli Fruit Nut & Seeds 750G ",
      price: 369,
      image: "https://m.media-amazon.com/images/I/71BsckBgy3L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 112,
      name: "Horlicks Chocolate Nutrition Drink || 1 kg Refill Pack",
      price: 337,
      image: "https://m.media-amazon.com/images/I/61zCNgA76JL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 113,
      name: "Vim Fresh Lemon Fragrance Dishwash Liquid Gel 2L Refill Pack",
      price: 340,
      image: "https://m.media-amazon.com/images/I/610DprJKeRL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 114,
      name: "Tata Sampann Turmeric Powders, 200g, Haldi Powder",
      price: 84,
      image: "https://m.media-amazon.com/images/I/614yEbeREJL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 115,
      name: "India Gate Basmati Rice Everyday 5 kg",
      price: 350,
      image: "https://m.media-amazon.com/images/I/81aOZbkML1L._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 116,
      name: "Fortune Chakki Fresh Atta, 5 kg",
      price: 211,
      image: "https://m.media-amazon.com/images/I/61fV8xIUXlL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 117,
      name: "Unibic Cookies, Assorted Cookies, 75 G(Pack Of 10)",
      price: 229,
      image: "https://m.media-amazon.com/images/I/81pku5wrK9L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 118,
      name: "Sugar Free Gold, 500 Pellets| India s No.1 Sweetner",
      price: 267,
      image: "https://m.media-amazon.com/images/I/71U+mYLHcWL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 119,
      name: "Fortune Premium Kachi Ghani Pure Mustard Oil, 1Litre",
      price: 170,
      image: "https://m.media-amazon.com/images/I/61A1MNF8b2L._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 120,
      name: "Dettol Antiseptic Liquid, 1 Litre",
      price: 396,
      image: "https://m.media-amazon.com/images/I/51XQjz9YN4L._SX679_.jpg",
      rating: 4.7,
    },
];

  // Now, this product data is ready to be displayed in the same way as before
  const productList = document.getElementById("product-list");
  const cartBtn = document.getElementById("cart-btn");
  let cartCount = 0;
  
  // Function to display products
  function loadProducts() {
    productList.innerHTML = "";//
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p class="rating">⭐ ${product.rating} / 5</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
 // Function to handle "Add to Cart"
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    // Get the current cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart button count
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBtn.textContent = `Cart (${cartCount})`;

    alert(`${product.name} has been added to your cart!`);
  }
}

// Update cart count on page load
window.onload = () => {
  loadProducts();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBtn.textContent = `Cart (${cartCount})`;
};

  