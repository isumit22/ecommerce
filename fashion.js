const products = [
    {
      id: 31,
      name: "Puma Men's Cotton Standard Length Jacket",
      price: 1290,
      image: "https://m.media-amazon.com/images/I/51hL0GQlpwL._SX679_.jpg",  
      rating: 4.8,
    },
    {
      id: 32,
      name: "Allen Solly Men's Polyester Casual Jacket",
      price: 1259,
      image: "https://m.media-amazon.com/images/I/61xa0xNAnyL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 33,
      name: "Allen Solly Men's Slim Fit Shirt",
      price: 599,
      image: "https://m.media-amazon.com/images/I/61z9JOVTzaL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 34,
      name: "Women Solids: Grey Knit Jackets",
      price: 900,
      image: "https://m.media-amazon.com/images/I/61+c3dRCzTL._SY741_.jpg",
      rating: 4.9,
    },
    {
      id: 35,
      name: "U.S. POLO ASSN. Men's PolyesterTrench Coat",
      price: 2397,
      image: "https://m.media-amazon.com/images/I/611uZ4-GSZL._SX569_.jpg",
      rating: 4.4,
    },
    {
      id: 36,
      name: "Women's Fleece Zipper Hoodie Jacket",
      price: 699,
      image: "https://m.media-amazon.com/images/I/61Zlq275IoL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 37,
      name: "Women's Cotton Blend Casual Dress",
      price: 1989,
      image: "https://m.media-amazon.com/images/I/71UFOZlPdHL._SY741_.jpg",
      rating: 4.5,
    },
    {
      id: 38,
      name: "U.S. POLO ASSN. Men's Solid Regular Fit T-Shirt",
      price: 1099,
      image: "https://m.media-amazon.com/images/I/81QXIeMTP2L._SX569_.jpg",
      rating: 4.6,
    },
    {
      id: 39,
      name: "U.S. POLO ASSN. Men's Cotton Blend Hooded",
      price: 1790,
      image: "https://m.media-amazon.com/images/I/71PG-eaBGxL._SX569_.jpg",
      rating: 4.8,
    },
    {
      id: 40,
      name: " Polyester Round Neck Women's Midi Dress",
      price: 1900,
      image: "https://m.media-amazon.com/images/I/71QERu9TkXL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 41,
      name: "LVan Heusen Men Cotton Hooded ",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/6182edggGAL._SY741_.jpg",
      rating: 4.9,
    },
    {
      id: 42,
      name: "Bewakoof Men's Graphic Printed Cotton T-Shirt ",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61syNVEqFPL._SY741_.jpg",
      rating: 4.8,
    },
    {
      id: 43,
      name: "Men's Collar Tshirt ",
      price: 499,
      image: "https://m.media-amazon.com/images/I/61a6Sf1lOPL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 44,
      name: "Women's V-Neck Chiffon Maxi Dress",
      price: 1890,
      image: "https://m.media-amazon.com/images/I/81-rzgvsr8L._SY741_.jpg",
      rating: 4.8,
    },
    {
      id: 45,
      name: "ME VENTURES Men T-Shirt",
      price: 699,
      image: "https://m.media-amazon.com/images/I/611HYoHVKLL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 46,
      name: "Women's Georgette Solid Ready To Wear one Minute Saree",
      price: 980,
      image: "https://m.media-amazon.com/images/I/713d6HUGgyL._SY741_.jpg",
      rating: 4.9,
    },
    {
      id: 47,
      name: "Avantika Fashion Women's Pure Silk Banarasi Sarees ",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61pwSlkui9L._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 48,
      name: "Embroidered Sequinned Long Kurta",
      price: 1998,
      image: "https://m.media-amazon.com/images/I/71bNl3SQ-cL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 49,
      name: "SKAVIJ Men's Art Silk Dhoti Kurta Set Ethnic Dress",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/61S66y5cwLL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 50,
      name: "Raymond Men's Slim Pants",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71+jzIq2u4L._SX569_.jpg",
      rating: 4.8,
    },
    {
      id: 51,
      name: "Men's Trendy Shirt for Men",
      price: 430,
      image: "https://m.media-amazon.com/images/I/41Kmlwhpa4L.jpg",
      rating: 4.6,
    },
    {
      id: 52,
      name: "Bewakoof Men's Regular Fit T-Shirt",
      price: 390,
      image: "https://m.media-amazon.com/images/I/612v8NY4S5L._SY741_.jpg",
      rating: 4.8,
    },
    {
      id: 53,
      name: "Men Regular Fit Polo T-Shirt",
      price: 365,
      image: "https://m.media-amazon.com/images/I/61FUOCna5nL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 54,
      name: " Women Silk Blend Kurta",
      price: 649,
      image: "https://m.media-amazon.com/images/I/61lXK1IH8qL._SY741_.jpg",
      rating: 4.8,
    },
    {
      id: 55,
      name: "Women's Cotton Straight Kurta ",
      price: 990,
      image: "https://m.media-amazon.com/images/I/81cGPZJMQ1L._SY741_.jpg",
      rating: 4.8,
    },
    {
      id: 56,
      name: "Arrow Men's Formal Suit Pants Set",
      price: 6299,
      image: "https://m.media-amazon.com/images/I/71WstAN+CLL._SX569_.jpg",
      rating: 4.7,
    },
    {
      id: 57,
      name: "Jeans for Women || Bootcut Jeans for Women",
      price: 899,
      image: "https://m.media-amazon.com/images/I/51WSHbJi4eL._SY741_.jpg",
      rating: 4.6,
    },
    {
      id: 58,
      name: "Goggles For Men's and Women's -UV protected",
      price: 299,
      image: "https://m.media-amazon.com/images/I/51LThp+U14L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 59,
      name: "Combo of Black Men's Wallet, Sunglasses & Watch",
      price: 619,
      image: "https://m.media-amazon.com/images/I/91ZKKonKWzL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 60,
      name: "Allen Solly Women Light Blue Colour",
      price: 2749,
      image: "https://m.media-amazon.com/images/I/51D2iVwS4SL._SY695_.jpg",
      rating: 4.7,
    }
  ];
  
  // Now, this product data is ready to be displayed in the same way as before
  const productList = document.getElementById("product-list");
  const cartBtn = document.getElementById("cart-btn");
  let cartCount = 0;
  
  // Function to display products
  function loadProducts() {
    productList.innerHTML = ""; // Clear previous content
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

  