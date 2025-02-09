let cartItems = [];

// Navigation Function
function navigateTo(page) {
    window.location.href = `${page}.html`;
}

// Search Toggle
document.getElementById("searchToggle").addEventListener("click", function () {
    let searchBar = document.getElementById("searchBar");
    searchBar.style.display = searchBar.style.display === "none" ? "block" : "none";
});

// Update Cart Count
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = "flex";
    } else {
        cartCountElement.style.display = "none";
    }
}

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.closest('.card').querySelector('img').src;

        const existingItem = cartItems.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ id, name, price, quantity: 1, image });
        }
        updateCartCount();
        alert(`${name} added to cart!`);
    });
});

// Filter Products
document.addEventListener("DOMContentLoaded", function () {
    let priceRange = [0, 500];
    let selectedCategories = [];

    function toggleCategory(category) {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            selectedCategories.push(category);
        } else {
            selectedCategories.splice(index, 1);
        }
        filterProducts();
    }

    function filterProducts() {
        document.querySelectorAll(".product-card").forEach(card => {
            const price = parseFloat(card.getAttribute("data-price"));
            const category = card.getAttribute("data-category");
            const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
            card.style.display = matchesPrice && matchesCategory ? "block" : "none";
        });
    }

    document.getElementById("priceRange").addEventListener("input", function () {
        priceRange[1] = parseInt(this.value);
        document.getElementById("priceValue").innerText = `$${priceRange[1]}`;
        filterProducts();
    });

    document.querySelectorAll(".category-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleCategory(this.value);
        });
    });
});

// Cart Functions
function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="row align-items-center border-bottom py-3">
                <div class="col-md-2"><img src="${item.image}" class="img-fluid rounded"></div>
                <div class="col-md-3">${item.name}</div>
                <div class="col-md-2">$${item.price.toFixed(2)}</div>
                <div class="col-md-3">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>`;
    });
    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").innerText = `$${(subtotal + 10).toFixed(2)}`;
}

function updateQuantity(id, change) {
    cartItems = cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item);
    updateCart();
    updateCartCount();
}

function removeItem(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    updateCart();
    updateCartCount();
}

function proceedToCheckout() {
    alert("Proceeding to checkout...");
    // Redirect to checkout page or show a form
}

// Initialize Cart
window.onload = function () {
    if (window.location.pathname.includes("cart.html")) {
        updateCart();
    }
    updateCartCount();
};