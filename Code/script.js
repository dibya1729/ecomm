// Function for the search bar
function searchProducts() {
    const input = document.querySelector('.search-bar input[type="text"]');
    alert('Searching for: ' + input.value);
}

// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Image Slider functionality
const slides = document.querySelector('.slides');
const images = slides.children; // Get the images inside the slides
let currentIndex = 0; // Start at the first image

function showNextImage() {
    // Check if we are at the last image
    if (currentIndex === images.length - 1) {
        // Wait for 3 seconds before showing the first image
        setTimeout(() => {
            currentIndex = 0; // Reset to first image
            updateSliderPosition();
        }, 3000);
    } else {
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    const offset = -currentIndex * 100; // Calculate offset for the current image
    slides.style.transform = `translateX(${offset}%)`; // Update the transform property
}

// Automatically move to the next image every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 3000);

// Product list array with sample products
const products = [
    {
        title: "Wireless Headphones",
        price: "₹ 1299",
        image: "/Picture/headphone.webp",
        details: "High-quality noise-canceling headphones."
    },
    {
        title: "Smartphone",
        price: "₹ 22000",
        image: "/Picture/mobile.jpeg",
        details: "Latest model with top features."
    },
    {
        title: "Laptop",
        price: "₹ 58000",
        image: "/Picture/laptop.jpeg",
        details: "Lightweight and powerful for daily use."
    },
    {
        title: "Smartwatch",
        price: "₹ 4999",
        image: "/Picture/smart watch.jpeg",
        details: "Track your fitness and notifications."
    },
    {
        title: "Bluetooth Speaker",
        price: "₹ 2499",
        image: "/Picture/speaker.jpeg",
        details: "Portable speaker with clear sound."
    },
    {
        title: "Gaming Console",
        price: "₹ 65000",
        image: "/Picture/gaming.jpeg",
        details: "Enjoy the latest games in HD."
    },
    {
        title: "Digital Camera",
        price: "₹ 86000",
        image: "/Picture/camera.jpeg",
        details: "Capture stunning photos and videos."
    },
    {
        title: "4K TV",
        price: "₹ 129999",
        image: "/Picture/tv.jpeg",
        details: "Ultra HD resolution with smart features."
    },
    {
        title: "Tablet",
        price: "₹ 45000",
        image: "/Picture/tablet.jpeg",
        details: "Light and versatile for everyday tasks."
    },
    {
        title: "Fitness Tracker",
        price: "₹ 8999",
        image: "/Picture/fitness.jpeg",
        details: "Monitor your activity and health."
    },
    {
        title: "Air bags",
        price: "₹ 6900",
        image: "/Picture/air bags.webp",
        details: "Carry your lodge gabes."
    },
    {
        title: "CPU",
        price: "₹ 18000",
        image: "/Picture/cpu.jpeg",
        details: "Powerful cpu to game video fata."
    }
];

// Function to render the product list on the page
function renderProductList() {
    const productList = document.querySelector('.product-list');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-details">${product.details}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        
        productList.appendChild(productCard);
    });
}

// Call the function to render the product list
document.addEventListener('DOMContentLoaded', renderProductList);

// Function to handle the explore button click
function exploreCategory(categoryName) {
    alert(`Exploring the ${categoryName} category!`);
    // You can navigate to category page or load products dynamically here
}


