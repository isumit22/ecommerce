const products = [
    {
      id: 121,
      name: "Cockatoo ADB-01 2.5 KG- 24 Kg Adjustable Dumbbell Set",
      price: 16990,
      image: "https://m.media-amazon.com/images/I/61WIJuElBKL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 122,
      name: "Boldfit Nylon Wrist Supporter for Gym Wrist",
      price: 199,
      image: "https://m.media-amazon.com/images/I/71rnjOkkJZL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 123,
      name: "Boldfit Gym Belt for Workout Lever Deadlift Belt",
      price: 899,
      image: "https://m.media-amazon.com/images/I/71j7pmaU+IL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 124,
      name: "Pull up Bar for Home Pull up Bar Max Load 200KG",
      price: 1900,
      image: "https://m.media-amazon.com/images/I/61pKEEV-yKL._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 125,
      name: "Dumbbells Set 8 Kg to 20 Kg",
      price: 1597,
      image: "https://m.media-amazon.com/images/I/81ID5T+YGZL._SL1500_.jpg",
      rating: 4.4,
    },
    {
      id: 126,
      name: "TEGO CORE Yoga Mat ",
      price: 1399,
      image: "https://m.media-amazon.com/images/I/51umyfWJZoL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 127,
      name: "MAXPRO Force 4.5 HP Peak DC Motor Folding Treadmill for Home",
      price: 28989,
      image: "https://m.media-amazon.com/images/I/619dxxveEjL._SX679_.jpg",
      rating: 4.5,
    },
    {
      id: 128,
      name: "Fit Pro Spin Fitness Bike with 6Kg Flywheel",
      price: 10099,
      image: "https://m.media-amazon.com/images/I/71fpOwKlDeL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 129,
      name: "Adidas ADYG-10100BL EVA Yoga Mat Trace Blue 8mm",
      price: 2990,
      image: "https://m.media-amazon.com/images/I/51Oz4-XDjSL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 130,
      name: "YONEX Astrox Lite 27i Graphite Strung Badminton Racket",
      price: 1900,
      image: "https://m.media-amazon.com/images/I/61JaOAYztAL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 131,
      name: "Yonex Mavis 200i Nylon Shuttle Cock",
      price: 479,
      image: "https://m.media-amazon.com/images/I/71XJ3j9NhaL._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 132,
      name: "Whitedot Falcon Kashmir Willow Cricket Combo Kit Set",
      price: 4699,
      image: "https://m.media-amazon.com/images/I/71FpY4M5afL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 133,
      name: "Cricket Batting Gloves, Size - Mens, Right Hand",
      price: 1129,
      image: "https://m.media-amazon.com/images/I/61aiYI8CcML._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 134,
      name: "Vector X Neo Rubber Moulded Football",
      price: 389,
      image: "https://m.media-amazon.com/images/I/81WtzO3X2pL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 135,
      name: "Nivia Storm Football | Rubberized Moulded",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61RpRYFb2wL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 136,
      name: "TRACER Football Shoes for Men's Stylish & Comfortable",
      price: 1980,
      image: "https://m.media-amazon.com/images/I/71OErzCk4gL._SY695_.jpg",
      rating: 4.9,
    },
    {
      id: 137,
      name: "Regular Fit Ultra Lightweight Dryfit Track Pant",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61lhL9yQQYL._SY741_.jpg",
      rating: 4.7,
    },
    {
      id: 138,
      name: "Campus Men's North Running Shoe",
      price: 1198,
      image: "https://m.media-amazon.com/images/I/71UZLYpHA9L._SY695_.jpg",
      rating: 4.6,
    },
    {
      id: 139,
      name: "Action-NITRO-722 Running Sports Shoes for Men",
      price: 1899,
      image: "https://m.media-amazon.com/images/I/71gt7-UlgaL._SY695_.jpg",
      rating: 4.7,
    },
    {
      id: 140,
      name: "Swimming Goggles & Blue Embossed Swimming Caps for Men & Women",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/71zfBlVRSoL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 141,
      name: "GYMNCO Mini Wood Table Tennis Table (6x3 ft) with Wheel",
      price: 9830,
      image: "https://m.media-amazon.com/images/I/61lSQDHUORL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 142,
      name: "Costume for Men Swimming Trunk for Men",
      price: 490,
      image: "https://m.media-amazon.com/images/I/61BSGovQ0IL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 143,
      name: "Two Racket with Three Ball and One Adjustable & Foldable TT Net",
      price: 945,
      image: "https://m.media-amazon.com/images/I/61eZFhWNTtL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 144,
      name: "Olympic Barbell/Rod Rubber Olympic weight Plates Barbell plates Gym weights ",
      price: 1949,
      image: "https://m.media-amazon.com/images/I/71bzn6YfdHL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 145,
      name: "Women's Cotton Straight KurtaAlloy Steel Fitness 5 Feet Straight Olympic Barbell Rod",
      price: 2490,
      image: "https://m.media-amazon.com/images/I/61pemEkEoDL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 146,
      name: "Urban Terrain UT1000S26 Cycle/Bicycle MTB (21 Speed) Gear Cycle",
      price: 10299,
      image: "https://m.media-amazon.com/images/I/617F0XeXvDL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 147,
      name: "Hero Cycles Typhoon 26T IBC",
      price: 5899,
      image: "https://m.media-amazon.com/images/I/51bsBxmpCgL.jpg",
      rating: 4.6,
    },
    {
      id: 148,
      name: "Bodyband Abs Roller for Men & Women",
      price: 199,
      image: "https://m.media-amazon.com/images/I/71Vt2Pgy4hL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 149,
      name: "Training Bands 4 Tubes Body Trimmer",
      price: 419,
      image: "https://m.media-amazon.com/images/I/61Vj5QK3alS._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 150,
      name: "Resistance Bands & Hand Gripper Set",
      price: 749,
      image: "https://m.media-amazon.com/images/I/71ENsThbnQL._SX679_.jpg",
      rating: 4.7,
    },
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

  