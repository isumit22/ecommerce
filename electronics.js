const products = [
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 55990,
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",  
      rating: 4.8,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 79999,
      image: "https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 29999,
      image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Apple iPhone 16 Pro",
      price: 169900,
      image: "https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg",
      rating: 4.9,
    },
    {
      id: 5,
      name: "boAt Bassheads 152",
      price: 397,
      image: "https://m.media-amazon.com/images/I/61dXeWYn4ZL._SX522_.jpg",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Canon EOS R Camera",
      price: 89999,
      image: "https://m.media-amazon.com/images/I/61TyCpcEVCL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 7,
      name: "OnePlus Nord 4 5G",
      price: 29999,
      image: "https://m.media-amazon.com/images/I/61NbiB1GU-L._SX679_.jpg",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Bose QuietComfort Earbuds",
      price: 19999,
      image: "https://m.media-amazon.com/images/I/512mPubhJdL._SX522_.jpg",
      rating: 4.6,
    },
    {
      id: 9,
      name: "HP Spectre x360 Ultra 7 155H",
      price: 171690,
      image: "https://m.media-amazon.com/images/I/71Sq9WQoZ4L._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 10,
      name: "Lenovo Legion Pro 7 Intel Core i9-14900HX",
      price: 290900,
      image: "https://m.media-amazon.com/images/I/81ZHTZ2kQIL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 11,
      name: "Logitech MX Master 3",
      price: 8999,
      image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SX522_.jpg",
      rating: 4.9,
    },
    {
      id: 12,
      name: "Samsung Galaxy Watch Ultra ",
      price: 59999,
      image: "https://m.media-amazon.com/images/I/81acmzia3+L._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 13,
      name: "Apple Watch Series 10",
      price: 49899,
      image: "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 14,
      name: "Apple MacBook Air M3",
      price: 108000,
      image: "https://m.media-amazon.com/images/I/71x9JI-Il0L._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 15,
      name: "Samsung Galaxy Tab S10 Plus",
      price: 90999,
      image: "https://m.media-amazon.com/images/I/61LVFxbwEPL._SX522_.jpg",
      rating: 4.7,
    },
    {
      id: 16,
      name: "LG OLED 55inch TV",
      price: 89900,
      image: "https://m.media-amazon.com/images/I/810ni0-df5L._SX522_.jpg",
      rating: 4.9,
    },
    {
      id: 17,
      name: "Samsung 55-inch QLED TV",
      price: 103999,
      image: "https://m.media-amazon.com/images/I/71UAKFlcpHL._SX522_.jpg",
      rating: 4.7,
    },
    {
      id: 18,
      name: "JBL Flip 5 Bluetooth Speaker",
      price: 6998,
      image: "https://m.media-amazon.com/images/I/71Xyg9SwRwL._SX522_.jpg",
      rating: 4.6,
    },
    {
      id: 19,
      name: "Portronics SoundDrum 1 10W",
      price: 999,
      image: "https://m.media-amazon.com/images/I/51kgud4rC6S._SX522_.jpg",
      rating: 4.7,
    },
    {
      id: 20,
      name: "Apple AirPods Pro 4",
      price: 12899,
      image: "https://m.media-amazon.com/images/I/61oCISLE+PL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 21,
      name: "Microsoft Surface Pro 9",
      price: 119930,
      image: "https://m.media-amazon.com/images/I/51L40XTsN+L._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 22,
      name: "Asus ROG Zephyrus G14 Laptop",
      price: 174990,
      image: "https://m.media-amazon.com/images/I/81x+1vl1kCL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 23,
      name: "Dell Alienware m18 R1 Gaming Laptop,Intel Core i9",
      price: 367905,
      image: "https://m.media-amazon.com/images/I/71BxDqP7L5L._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 24,
      name: "Acer Predator Helios Neo 16 Gaming Laptop 14th Gen Intel Core i9",
      price: 164900,
      image: "https://m.media-amazon.com/images/I/61uAqdpa2ML._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 25,
      name: "Apple iPad Pro 13″ (M4)",
      price: 149990,
      image: "https://m.media-amazon.com/images/I/7131GFmmnCL._SX679_.jpg",
      rating: 4.8,
    },
    {
      id: 26,
      name: "MSI Cyborg 15 AI, Intel Core Ultra 7 155H",
      price: 106199,
      image: "https://m.media-amazon.com/images/I/71H1XcA87cL._SX679_.jpg",
      rating: 4.7,
    },
    {
      id: 27,
      name: "realme Buds Wireless 3 Neo",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/61+esOKPDVL._SX522_.jpg",
      rating: 4.6,
    },
    {
      id: 28,
      name: "Ambrane 20000mAh Powerbank with 22.5W Fast Charging",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/712c05cF-SL._SX679_.jpg",
      rating: 4.6,
    },
    {
      id: 29,
      name: "TCL 65-inch 4K TV",
      price: 60919,
      image: "https://m.media-amazon.com/images/I/51NgbwDFlpL._SY300_SX300_QL70_FMwebp_.jpg",
      rating: 4.7,
    },
    {
      id: 30,
      name: "Xiaomi Mi 11X Pro",
      price: 27749,
      image: "https://m.media-amazon.com/images/I/716FVMg72GS._SY679_.jpg",
      rating: 4.7,
    }
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

  