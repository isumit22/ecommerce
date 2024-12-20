const products = [
  {
      id: 61,
      name: "Samsung 301 L, 3 Star, Convertible 5-in-1",
      price: 36590,
      image: "https://m.media-amazon.com/images/I/71MtOvu1H2L._SY741_.jpg",  
      rating: 4.8,
  },
  {
      id: 62,
      name: "Panasonic 7 Kg Wifi Fully-Automatic Top Loading Smart Washing Machine",
      price: 17299,
      image: "https://m.media-amazon.com/images/I/61mTnJjH0TL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 63,
      name: "Samsung 8 kg Top Load Washing Machine",
      price: 19900,
      image: "https://m.media-amazon.com/images/I/71+xeoh7giL._SY741_.jpg",
      rating: 4.6,
  },
  {
      id: 64,
      name: "Godrej 7 Kg 5 Star, Fully-Automatic Front Load Washing Machine",
      price: 25900,
      image: "https://m.media-amazon.com/images/I/61Eukt7rMwL._SX679_.jpg",
      rating: 4.9,
  },
  {
      id: 65,
      name: "Samsung 550 L,Frost Free French Door Refrigerator",
      price: 69397,
      image: "https://m.media-amazon.com/images/I/61hiUfz2CZL._SY741_.jpg",
      rating: 4.4,
  },
  {
      id: 66,
      name: "Godrej 180 L 5 Star Turbo Cooling Technology",
      price: 15999,
      image: "https://m.media-amazon.com/images/I/71HeZPXsVuL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 67,
      name: "MILTON Stainless Steel| Electric kettle |1000 Watt, 500 Ml ",
      price: 1379,
      image: "https://m.media-amazon.com/images/I/61A9viqInZL._SX679_.jpg",
      rating: 4.5,
  },
  {
      id: 68,
      name: "Haier 596 L, 3 Star, 100% Convertible Fridge Space, Expert Inverter",
      price: 59900,
      image: "https://m.media-amazon.com/images/I/618cNlDLyZL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 69,
      name: "Pigeon Electric Kettle, 1.5 litre",
      price: 690,
      image: "https://m.media-amazon.com/images/I/61Ch8E6qcZL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 70,
      name: "KENT Super Egg Boiler | 3 Boiling Modes |",
      price: 1090,
      image: "https://m.media-amazon.com/images/I/71+2IuZ78XL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 71,
      name: "TOM Digital Kitchen Food Weighing Scale ",
      price: 199,
      image: "https://m.media-amazon.com/images/I/51Jp1JZdU-L._SX522_.jpg",
      rating: 4.9,
  },
  {
      id: 72,
      name: "Samsung 653 L, 3 Star, Frost Free, Double Door AI Enabled",
      price: 79999,
      image: "https://m.media-amazon.com/images/I/61kqXpSm6eL._SY741_.jpg",
      rating: 4.8,
  },
  {
      id: 73,
      name: "LG 1.5 Ton 5 Star DUAL Inverter Split AC",
      price: 49899,
      image: "https://m.media-amazon.com/images/I/815QEibJCwL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 74,
      name: "Hitachi 2 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC",
      price: 58000,
      image: "https://m.media-amazon.com/images/I/61+AmKfVuLL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 75,
      name: "Crompton Amica Pro 15-L, 5 Star Rated Storage Water Heater",
      price: 6049,
      image: "https://m.media-amazon.com/images/I/61XhwNKrUlL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 76,
      name: "LG OLED 55inch TV",
      price: 89900,
      image: "https://m.media-amazon.com/images/I/810ni0-df5L._SX522_.jpg",
      rating: 4.9,
  },
  {
      id: 77,
      name: "Orient Electric Aura Rapid Pro | 5.9 Litre Instant Water Heater",
      price: 3999,
      image: "https://m.media-amazon.com/images/I/51x4m1v24pL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 78,
      name: "Panasonic 20 L Solo Microwave Oven ",
      price: 5998,
      image: "https://m.media-amazon.com/images/I/618hSd40v6L._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 79,
      name: "GLEN 60 cm 1200 m3/hr Angular Glass Kitchen Chimney",
      price: 11899,
      image: "https://m.media-amazon.com/images/I/41Q+qurpiUL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 80,
      name: "IFB 25 L Solo Microwave Oven ",
      price: 7699,
      image: "https://m.media-amazon.com/images/I/819s6STd6pL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 81,
      name: "LG 20 L Solo Microwave Oven ",
      price: 6930,
      image: "https://m.media-amazon.com/images/I/81diUrv+yiL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 82,
      name: "Crompton IntelliSense 60 cm Kitchen Chimney",
      price: 13990,
      image: "https://m.media-amazon.com/images/I/41hy4B+IfpL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 83,
      name: "Philips HL7756/01 750 Watt Mixer Grinder",
      price: 3905,
      image: "https://m.media-amazon.com/images/I/71mL2bdyRdL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 84,
      name: "Havells Vitonica 500WattsJuicer Mixer Grinder",
      price: 3900,
      image: "https://m.media-amazon.com/images/I/710qWSSMEsL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 85,
      name: "Crompton Insta Comfy 800 Watt Room Heater",
      price: 1490,
      image: "https://m.media-amazon.com/images/I/81NHnr5b6NL._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 86,
      name: "DADLM® Handy Electric Heater, 400 Watts Heater, Plug-In Heater, Mini Heater",
      price: 699,
      image: "https://m.media-amazon.com/images/I/618leR2JkBL._SX679_.jpg",
      rating: 4.7,
  },
  {
      id: 87,
      name: "PHILIPS Air Fryer NA120/00,  1500W, 4.2 Liter",
      price: 4779,
      image: "https://m.media-amazon.com/images/I/414ly0wsjYL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 88,
      name: "Aquaguard Marvel NXT 10-Stage Active Copper Tech Water Purifier",
      price: 12799,
      image: "https://m.media-amazon.com/images/I/41KHv2eC0tL._SX679_.jpg",
      rating: 4.6,
  },
  {
      id: 89,
      name: "Havells Dry Iron DIVA NXT R10",
      price: 1129,
      image: "https://m.media-amazon.com/images/I/41tC4ez+41L._SX679_.jpg",
      rating: 4.8,
  },
  {
      id: 90,
      name: "Kent Ultra storage+ 12 Stage, RO",
      price: 17299,
      image: "https://m.media-amazon.com/images/I/81J3vA0dhqL._SX679_.jpg",
      rating: 4.5,
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

  