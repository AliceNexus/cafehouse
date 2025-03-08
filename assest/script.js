document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav_menu');
    const openmenu = document.getElementById('menu__icon');
    const closemenu = document.getElementById('close__icon');

    /* Menu Show */
    if (openmenu) {
        openmenu.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    /* Menu Hidden */
    if (closemenu) {
        closemenu.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Search Bar Elements
    const searchMain = document.getElementById('search_input_main');
    const closeSearch = document.getElementById('nav_search_closeicon');
    const openSearch = document.getElementById('nav_search_icon');

    // Open Search
    if (openSearch) {
        openSearch.addEventListener('click', () => {
            searchMain.classList.add('show-search'); // Assuming this class will show the search input
        });
    }

    // Close Search
    if (closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchMain.classList.remove('show-search'); // Assuming this class will hide the search input
        });
    }
});

const slides = document.querySelectorAll('.slider-card');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideInterval;

// Show the slide based on index
const showSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length; // Wrap around
    document.querySelector('.slider-box').style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.toggle('active', dot === dots[currentSlide]));
};

// Start auto sliding
const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
};

// Stop auto sliding
const stopAutoSlide = () => clearInterval(autoSlideInterval);

// Event listener for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
    });
});

// Start the auto slide
startAutoSlide();

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const imageContainer = document.querySelector('.section-image-container');
    
    const scrollDistance = 700; // Adjust scroll distance as needed

    function handleScroll(event) {
        if (event.target === leftArrow) {
            imageContainer.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        } else if (event.target === rightArrow) {
            imageContainer.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        }
    }

    leftArrow.addEventListener('click', handleScroll);
    rightArrow.addEventListener('click', handleScroll);
});

// ===========================================================================

const products = [
    { id: 1, name: 'Tiramisu', type: 'desserts', img: 'assest/img/tiramisu.png'}, 
    { id: 2, name: 'Cheesecake', type: 'sweets', img: 'assest/img/strawberry.png' }, 
    { id: 3, name: 'Choco Lava Cake', type: 'desserts', img: 'assest/img/Delicious chocolate lava cake -2.png' }, 
    { id: 4, name: 'Croissants', type: 'sweets', img: 'assest/img/corrstiant.png' }, 
    { id: 5, name: 'Panna Cotta', type: 'desserts', img: 'assest/img/pannacotta.png'}, 
    { id: 6, name: 'Macarons', type: 'sweets', img: 'assest/img/macrooons.png'}, 
    { id: 7, name: 'Fruit Tart', type: 'desserts', img: 'assest/img/furittart.png'}, 
    { id: 8, name: 'Brownies', type: 'sweets', img: 'assest/img/brownies.png'}
    // Add more products here...
];

// Function to display products based on the selected filter
function displayProducts(filter = 'all') {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';  // Clear previous products
    
    // Filter products based on type
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.type === filter);

    filteredProducts.forEach(product => {
        // Create product box HTML structure
        const productBox = document.createElement('div');
        productBox.className = 'product-box';
        productBox.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product1-img">
            <h3>${product.name}</h3>
            <div class="description">Delicious ${product.name}</div>
            <div class="quantity-controls">
                <button onclick="changeQuantity(${product.id}, -1)">-</button>
                <input type="text" id="quantity-${product.id}" class="quantity" value="0" readonly>
                <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productBox);
    });
}

// Function to filter products by type (e.g., 'desserts', 'sweets')
function filterProducts(type) {
    displayProducts(type);
}

// Function to change the quantity of the selected product
function changeQuantity(productId, delta) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityInput.value); // Ensure it's a number
    currentQuantity = Math.max(0, currentQuantity + delta); // Ensure quantity doesn't go below 0
    quantityInput.value = currentQuantity;
}

// Function to add the selected product to the cart
function addToCart(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        alert(`Added ${quantity} of product ID ${productId} to cart!`);
    } else {
        alert('Please select a quantity greater than 0.');
    }
}

// Initial display of all products on page load
displayProducts();


// Get the left and right arrow elements
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

// Get the card list (the container that holds the cards)
const cardList = document.querySelector('.card-list');

// Scroll left when the left arrow is clicked
scrollLeft.addEventListener('click', () => {
    cardList.scrollBy({
        left: -350,  // Scroll by the width of one card (350px)
        behavior: 'smooth',  // Smooth scrolling
    });
});

// Scroll right when the right arrow is clicked
scrollRight.addEventListener('click', () => {
    cardList.scrollBy({
        left: 350,  // Scroll by the width of one card (350px)
        behavior: 'smooth',  // Smooth scrolling
    });
});
