// Sample product data
const products = [
    // Electronics
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.5,
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.2,
        description: "Feature-rich smartwatch with health monitoring."
    },
    {
        id: 3,
        name: "4K Smart TV",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.7,
        description: "Ultra HD Smart TV with built-in streaming apps."
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.3,
        description: "Portable Bluetooth speaker with deep bass and long battery life."
    },
    {
        id: 5,
        name: "Digital Camera",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.6,
        description: "High-resolution digital camera for professional photography."
    },
    {
        id: 6,
        name: "Gaming Console",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.8,
        description: "Next-generation gaming console for immersive gaming experience."
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.4,
        description: "True wireless earbuds with touch controls and charging case."
    },
    {
        id: 8,
        name: "Laptop",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Electronics",
        rating: 4.7,
        description: "Powerful laptop with high-performance processor and ample storage."
    },
    
    // Clothing
    {
        id: 9,
        name: "Men's Casual Shirt",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.0,
        description: "Comfortable and stylish casual shirt for men."
    },
    {
        id: 10,
        name: "Women's Dress",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.7,
        description: "Elegant dress for women, perfect for any occasion."
    },
    {
        id: 11,
        name: "Men's Jeans",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.3,
        description: "Classic denim jeans with comfortable fit and durability."
    },
    {
        id: 12,
        name: "Women's Blouse",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.2,
        description: "Stylish blouse with modern design and comfortable fabric."
    },
    {
        id: 13,
        name: "Men's Jacket",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.5,
        description: "Versatile jacket for men, suitable for various weather conditions."
    },
    {
        id: 14,
        name: "Women's Sweater",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.1,
        description: "Warm and cozy sweater for women with elegant design."
    },
    {
        id: 15,
        name: "Men's Polo Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.0,
        description: "Classic polo shirt for men, perfect for casual and semi-formal occasions."
    },
    {
        id: 16,
        name: "Women's Jeans",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Clothing",
        rating: 4.4,
        description: "Stylish and comfortable jeans for women with perfect fit."
    },
    
    // Home & Kitchen
    {
        id: 17,
        name: "Coffee Maker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Home & Kitchen",
        rating: 4.3,
        description: "Programmable coffee maker for the perfect brew."
    },
    {
        id: 18,
        name: "Blender",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Home & Kitchen",
        rating: 4.1,
        description: "Powerful blender for smoothies and more."
    },
    {
        id: 19,
        name: "Toaster",
        price: 34.99,
        image: "https://plus.unsplash.com/premium_photo-1719452894874-3da9fa3b882c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Home & Kitchen",
        rating: 4.0,
        description: "4-slice toaster with multiple browning settings."
    },
    {
        id: 20,
        name: "Cookware Set",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1622428051717-dcd8412959de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Home & Kitchen",
        rating: 4.6,
        description: "Complete cookware set with non-stick coating and durable construction."
    },
    {
        id: 21,
        name: "Knife Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Home & Kitchen",
        rating: 4.5,
        description: "Professional knife set with sharpening steel and wooden block."
    },
    {
        id: 22,
        name: "Stand Mixer",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1577495917765-9497a0de7caa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Home & Kitchen",
        rating: 4.8,
        description: "Powerful stand mixer for all your baking needs."
    },
    {
        id: 23,
        name: "Food Processor",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Home & Kitchen",
        rating: 4.4,
        description: "Versatile food processor with multiple attachments for various tasks."
    },
    {
        id: 24,
        name: "Dinnerware Set",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Home & Kitchen",
        rating: 4.2,
        description: "Elegant dinnerware set for 6 people, dishwasher and microwave safe."
    },
    
    // Beauty
    {
        id: 25,
        name: "Face Serum",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.6,
        description: "Hydrating face serum for radiant skin."
    },
    {
        id: 26,
        name: "Lipstick Set",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.4,
        description: "Set of premium lipsticks in various shades."
    },
    {
        id: 27,
        name: "Eyeshadow Palette",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.7,
        description: "Versatile eyeshadow palette with matte and shimmer shades."
    },
    {
        id: 28,
        name: "Facial Cleanser",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.3,
        description: "Gentle facial cleanser for all skin types."
    },
    {
        id: 29,
        name: "Hair Styling Kit",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.5,
        description: "Complete hair styling kit with dryer, straightener, and curling iron."
    },
    {
        id: 30,
        name: "Perfume",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.8,
        description: "Luxurious perfume with long-lasting fragrance."
    },
    {
        id: 31,
        name: "Makeup Brush Set",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.2,
        description: "Professional makeup brush set with soft bristles and ergonomic handles."
    },
    {
        id: 32,
        name: "Skincare Gift Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Beauty",
        rating: 4.6,
        description: "Complete skincare gift set with cleanser, toner, moisturizer, and mask."
    }
];

// Cart functionality
let cart = [];
let cartTotal = 0;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products
    displayProducts();
    
    // Initialize category page if on a category page
    initCategoryPage();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Cart sidebar toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.overlay');
    const closeCart = document.querySelector('.close-cart');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchBar && searchButton) {
        // Search on button click
        searchButton.addEventListener('click', function() {
            performSearch(searchBar.value);
        });
        
        // Search on Enter key press
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchBar.value);
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim() !== '') {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        });
    }
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Thank you for your purchase! Your order has been placed.');
                cart = [];
                updateCart();
                cartSidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else {
                alert('Your cart is empty. Add some products before checking out.');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Testimonial slider auto-scroll
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        let scrollAmount = 0;
        const testimonialWidth = testimonialSlider.querySelector('.testimonial').offsetWidth + 30; // width + gap
        
        setInterval(() => {
            scrollAmount += testimonialWidth;
            if (scrollAmount >= testimonialSlider.scrollWidth - testimonialSlider.offsetWidth) {
                scrollAmount = 0;
            }
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
    
    // Profile tabs functionality
    const profileTabs = document.querySelectorAll('.profile-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (profileTabs.length > 0 && tabContents.length > 0) {
        profileTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                profileTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Show the corresponding tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Display featured products
    displayFeaturedProducts();
});

// Initialize category page functionality
function initCategoryPage() {
    // Check if we're on a category page by looking for category-specific elements
    const categoryProductsGrid = document.querySelector('[id$="-products"]');
    if (!categoryProductsGrid) return;
    
    // Get the category name from the grid ID
    const categoryId = categoryProductsGrid.id.replace('-products', '');
    let categoryName;
    
    switch(categoryId) {
        case 'electronics':
            categoryName = 'Electronics';
            break;
        case 'clothing':
            categoryName = 'Clothing';
            break;
        case 'home-kitchen':
            categoryName = 'Home & Kitchen';
            break;
        case 'beauty':
            categoryName = 'Beauty';
            break;
        default:
            return; // Not a valid category page
    }
    
    // Filter products by category
    const categoryProducts = products.filter(product => product.category === categoryName);
    
    // Display category products
    displayCategoryProducts(categoryProducts, categoryProductsGrid);
    
    // Price filter functionality
    const priceFilter = document.getElementById('price-filter');
    const priceValue = document.getElementById('price-value');
    
    if (priceFilter && priceValue) {
        priceFilter.addEventListener('input', function() {
            const maxPrice = this.value;
            priceValue.textContent = `$${maxPrice}`;
            
            const filteredProducts = categoryProducts.filter(product => product.price <= maxPrice);
            displayCategoryProducts(filteredProducts, categoryProductsGrid);
        });
    }
    
    // Sort functionality
    const sortOptions = document.getElementById('sort-options');
    if (sortOptions) {
        sortOptions.addEventListener('change', function() {
            const sortValue = this.value;
            let sortedProducts = [...categoryProducts];
            
            switch(sortValue) {
                case 'price-low':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    sortedProducts.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    // Featured - no sorting needed
                    break;
            }
            
            const maxPrice = priceFilter ? priceFilter.value : 500;
            sortedProducts = sortedProducts.filter(product => product.price <= maxPrice);
            displayCategoryProducts(sortedProducts, categoryProductsGrid);
        });
    }
}

// Perform search
function performSearch(query) {
    if (!query.trim()) return;
    
    // Convert query to lowercase for case-insensitive search
    const searchQuery = query.trim().toLowerCase();
    
    // Filter products based on search query
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) || 
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
    
    // Display search results
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        // Clear current products
        productsGrid.innerHTML = '';
        
        // Update section title to show search results
        const sectionTitle = document.querySelector('.featured-products .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = `Search Results for "${query}"`;
        }
        
        // Display search results or "no results" message
        if (searchResults.length > 0) {
            searchResults.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            const addToCartButtons = productsGrid.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        } else {
            productsGrid.innerHTML = '<p class="no-results">No products found matching your search. Please try a different search term.</p>';
        }
        
        // Scroll to products section
        const productsSection = document.getElementById('products');
        if (productsSection) {
            window.scrollTo({
                top: productsSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }
}

// Create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    // Create rating stars
    let ratingStars = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        ratingStars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        ratingStars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        ratingStars += '<i class="far fa-star"></i>';
    }
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-badge">${product.category}</div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-rating">${ratingStars}</div>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    
    return productCard;
}

// Display products in the products grid
function displayProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    // Use featured products instead of just slicing the first 8
    const featuredProducts = getFeaturedProducts();
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Display category products
function displayCategoryProducts(products, container) {
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }
    
    // Limit to 12 products for Home & Kitchen category
    const limitedProducts = container.id === 'home-kitchen-products' ? products.slice(0, 12) : products;
    
    limitedProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = container.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Show cart sidebar
    const cartSidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.overlay');
    if (cartSidebar && overlay) {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Update cart display
function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalElement = document.getElementById('cart-total-price');
    
    if (!cartItems || !cartCount || !cartTotalElement) return;
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }
    
    // Calculate cart total
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Display cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Update cart total
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    
    // Add event listeners to cart item buttons
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateItemQuantity(productId, 'decrease');
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateItemQuantity(productId, 'increase');
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value);
            if (newQuantity > 0) {
                updateItemQuantity(productId, 'set', newQuantity);
            } else {
                this.value = 1;
                updateItemQuantity(productId, 'set', 1);
            }
        });
    });
}

// Update item quantity in cart
function updateItemQuantity(productId, action, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
    } else if (action === 'set') {
        item.quantity = newQuantity;
    }
    
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Get featured products (3 from each category)
function getFeaturedProducts() {
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty'];
    let featuredProducts = [];
    
    categories.forEach(category => {
        // Get products from this category
        const categoryProducts = products.filter(product => product.category === category);
        
        // Sort by rating (highest first) and take top 3
        const topRatedProducts = [...categoryProducts]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
            
        // Add to featured products
        featuredProducts = [...featuredProducts, ...topRatedProducts];
    });
    
    return featuredProducts;
}

// Display featured products
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (!featuredProductsContainer) return;
    
    const featuredProducts = getFeaturedProducts();
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = featuredProductsContainer.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
} 