// script.js

// Handle Search Bar Input
const searchInput = document.querySelector('.nav-search input');
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}`);
    }
});

// Handle Profile Dropdown Selection
const profileDropdown = document.querySelector('.profile');
profileDropdown.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
  if (selectedOption === 'log out') {
            // Handle log out
            alert('You have logged out successfully.');
            // Optionally clear session or redirect
            // Example: Redirect to the login page
            window.location.href = "ebay-login.html";
        } else if (selectedOption === 'My profile') {
            // Handle redirect to the user's profile
            alert('Redirecting to your profile...');
            window.location.href = '/profile.html';
        }
});

// Handle Country Dropdown Selection
const countryDropdown = document.querySelector('.nav-country select');
countryDropdown.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    alert(`Language/Region changed to: ${selectedCountry}`);
});

// Simple Slider Functionality
const sliderImages = ['./image/slider img1.jpg', './image/slider img2.jpg', './image/slider img3.jpg'];
let currentSlide = 0;

const sliderElement = document.querySelector('.slider-img');

function changeSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    sliderElement.src = sliderImages[currentSlide];
}
setInterval(changeSlide, 2000);

///----------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "HEAD PHONE",
            image: "/image/boximg1.jpg",
            price: "$50",
            location: "New York, USA",
            delivery: "3-5 business days HEAD PHONE High-quality sound and comfort, perfect for music and gaming."
        },
        {
            name: "SPEAKER",
            image: "/image/boximg2.jpg",
            price: "$100",
            location: "Los Angeles, USA",
            delivery: "5-7 business days Speaker: Powerful speaker with clear, crisp sound and deep bass for any occasion."
        },
        {
            name: "TOY",
            image: "/image/boximg3.jpg",
            price: "$30",
            location: "Chicago, USA",
            delivery: "4-6 business days   Toy: Fun and educational toys for kids, helping to spark creativity and learning."
        },
            {
            name: "GAMING ACCESSORIES",
            image: "/image/boximg4.jpg",
            price: "$900",
            location: "PESHAWR",
            delivery: "1  day business days  Gaming Accessories: Essential accessories for gamers, from controllers to headsets, for an enhanced experience."
        },
        {
            name: "KEY BOARD",
            image: "/image/boximg5.jpg",
            price: "$10",
            location: "hayat abad phase 2",
            delivery: "4-6 business days   Keyboard: Ergonomic and durable keyboard, ideal for work and gaming with responsive keys."
        },
            {
            name: "TEET CARE ",
            image: "/image/boximg6.jpg",
            price: "$10",
            location: "karhano peshawar",
            delivery: "4-6 business days  Teeth Care: Advanced oral care products like electric toothbrushes and whitening kits for a brighter smile."
        },
            {
            name: "LAP TOP",
            image: "/image/boximg7.jpg",
            price: "$30",
            location: "Chicago, USA",
            delivery: "4-6 business days Laptop: A powerful and portable laptop with great performance for work, study, and entertainment"
        },
            {
            name: "CHAIRS FOR OFFICE",
            image: "/image/boximg8.jpg",
            price: "$550",
            location: "peshawar",
            delivery: "4 business days Chairs for Office: Comfortable office chairs designed to support long hours of sitting and improve posture."
        },
            {
            name: "GAMING CHAIR",
            image: "/image/boximg9.jpg",
            price: "$30",
            location: "Chicago, USA",
            delivery: "4-6 business days Gaming Chair: Designed for gamers, offering comfort and support with adjustable features."
        },
         {
            name: "WATCHS",
            image: "/image/boximg10.jpg",
            price: "$30",
            location: "phase 2 hayat abad",
            delivery: "1 business days Laptop: Watches: Elegant timepieces for both style and function, perfect for any occasion"
        }
        // Add the rest of the products here...
    ];

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        const link = card.querySelector('a');
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const product = products[index];
            const query = new URLSearchParams(product).toString();
            window.location.href = `product-detail.html?${query}`;
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.nav-search input');
    const productCards = document.querySelectorAll('.product-card');
    const cartButton = document.querySelector('.nav-cart');
    const cartCountDisplay = document.createElement('span');
    const cart = [];

    // Add cart count display to the cart button
    cartCountDisplay.classList.add('cart-count', 'badge', 'bg-primary', 'ms-1');
    cartCountDisplay.textContent = '0';
    cartButton.appendChild(cartCountDisplay);

    // Function to update cart count display
    const updateCartDisplay = () => {
        cartCountDisplay.textContent = cart.length;
    };

    // Function to search for products
    searchInput.addEventListener('input', function (e) {
        const searchValue = e.target.value.toLowerCase();
        let matchedProduct = false;

        productCards.forEach(card => {
            const productName = card.querySelector('p').textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                card.style.display = 'block';
                if (!matchedProduct) {
                    // matchedProduct = true;
                    // Scroll to the matching product
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                card.style.display = 'none';
            }
        });

        if (!matchedProduct) {
            alert('No matching products found!');
        }
    });

    // Function to add product to the cart
    productCards.forEach(card => {
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('btn', 'btn-primary', 'm-2');

        card.appendChild(addToCartButton);

        addToCartButton.addEventListener('click', function () {
            const productName = card.querySelector('p').textContent;
            cart.push(productName);
            updateCartDisplay();
            alert(`${productName} has been added to the cart!`);
        });
    });

    // Display cart items
    cartButton.addEventListener('click', function () {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert(`Your cart contains: \n${cart.join('\n')}`);
        }
    });
});


 // Content for English and Urdu
        const languageContent = {
            "EN": {
                "site-name": "Ebay",
                "panel-content": ["Become a Seller", "Daraz Affiliater", "Help & Support", "Ebay Logistic", "Safe & Saver"],
                "imp-points": ["Safe Payment", "National Delivery", "Free & Easy Returns", "Best Price Guaranteed", "100% Authentic Product", "Ebay Verified"],
                "cart-text": "Cart"
            },
            "UR": {
                "site-name": "ای بے",
                "panel-content": ["بیچنے والا بنیں", " افیلیئیٹ", "مدد اور سپورٹ", "داراز لاجسٹک", "محفوظ اور محفوظ"],
                "imp-points": ["محفوظ ادائیگی", "قومی ترسیل", "آسان واپسی", "بہترین قیمت کی ضمانت", "100٪ اصلی مصنوعات", "ای بے کی تصدیق شدہ"],
                "cart-text": "کارٹ"
            }
        };

        // Function to switch content based on selected language
        function switchLanguage(language) {
            const content = languageContent[language];
            document.getElementById("site-name").innerText = content["site-name"];
            document.getElementById("panel-content").querySelectorAll("p").forEach((p, index) => {
                p.innerText = content["panel-content"][index];
            });
            document.getElementById("imp-points").querySelectorAll("p").forEach((p, index) => {
                p.innerText = content["imp-points"][index];
            });
            document.getElementById("cart-text").innerText = content["cart-text"];
        }

        // Event listener for language change when the user selects Pakistan (Urdu)
        document.getElementById("country-select").addEventListener("change", (e) => {
            if (e.target.value === "UR") {
                switchLanguage("UR");  // Change content to Urdu
            } else {
                switchLanguage("EN");  // Change content back to English
            }
        });

        // Initial load: default language is English
        switchLanguage("EN");

