let cartItems = [];

// حفظ واسترجاع بيانات السلة من localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartCount();
    }
}

// تحديث عدد المنتجات في أيقونة السلة
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

// التنقل بين الصفحات
function navigateTo(page) {
    window.location.href = `${page}.html`;
}



// إضافة المنتجات إلى السلة
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
        saveCart();
        updateCartCount();
        alert(`${name} added to cart!`);
    });
});

// تحديث الكارت في صفحة cart.html
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
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm" onclick="removeItem('${item.id}')">Remove</button>
                </div>
            </div>`;
    });
    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").innerText = `$${(subtotal + 10).toFixed(2)}`;
}

// تحديث كمية المنتج في السلة
function updateQuantity(id, change) {
    id = id.toString();
    cartItems = cartItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    saveCart();
    updateCart();
    updateCartCount();
}

// إزالة منتج من السلة
function removeItem(id) {
    id = id.toString();
    cartItems = cartItems.filter(item => item.id !== id);
    saveCart();
    updateCart();
    updateCartCount();
}

// الانتقال لصفحة الدفع
function proceedToCheckout() {
    window.location.href = "checkout.html";
}

// تهيئة الكارت عند تحميل الصفحة
window.onload = function () {
    loadCart();
    if (window.location.pathname.includes("cart.html")) {
        updateCart();
    }
    updateCartCount();
};

// التحقق من نموذج "اتصل بنا"
document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});
