const SHIPPING_COST = 20; // تكلفة الشحن الثابتة

// تحديث عدد العناصر في العربة
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-badge');
    if (cartCountElements) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElements.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'block' : 'none';
        });
    }
}

// تحديث عرض المنتجات في العربة
/*function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const subtotalElements = document.querySelectorAll('.cart-subtotal');
    const totalElements = document.querySelectorAll('.cart-total');
    const shippingElements = document.querySelectorAll('.cart-shipping');

    updateCartCount();

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="card">
                <div class="card-body text-center py-5">
                    <i class="bi bi-cart-x" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">العربة فارغة</h4>
                    <a href="index.html" class="btn btn-primary mt-3">تسوق الآن</a>
                </div>
            </div>
        `;
        subtotalElements.forEach(el => el.textContent = '0 ريال');
        shippingElements.forEach(el => el.textContent = '0 ريال');
        totalElements.forEach(el => el.textContent = '0 ريال');
        return;
    }

    let cartHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        cartHTML += `
            <div class="card shadow-sm w-100 mb-3">
                <div class="card-body p-3">
                    ${
                      window.innerWidth >= 992
                        ? `
                    <!-- Desktop View -->
                    <div class="row align-items-center">
                        <div class="col-2">
                            <div class="ratio ratio-1x1">
                                <img src="${item.image}" 
                                    class="rounded-3 object-fit-cover" 
                                    alt="${item.name}">
                            </div>
                        </div>
                        
                        <div class="col-7">
                            <h5 class="card-title mb-2">${item.name}</h5>
                            <p class="card-text text-muted mb-1">${item.category}</p>
                            <p class="card-text fw-bold text-primary mb-0">${item.price} ريال</p>
                        </div>
                        
                        <div class="col-3">
                            <div class="d-flex justify-content-end align-items-center gap-3">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                        style="width: 32px; height: 32px;"
                                        onclick="updateQuantity('${item.id}', -1)">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <span class="mx-3 fw-bold">${item.quantity}</span>
                                    <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                        style="width: 32px; height: 32px;"
                                        onclick="updateQuantity('${item.id}', 1)">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                                <button class="btn btn-link text-danger p-0" 
                                    onclick="removeItem('${item.id}')"
                                    style="font-size: 1.2rem;">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    `
                        : `
                    <!-- Mobile View -->
                    <div class="text-center mb-3">
                        <div  >
                            <img src="${item.image}" 
                                class="ratio ratio-1x1 rounded-3 object-fit-cover" 
                                style="max-height: 250px;"
                                alt="${item.name}">
                        </div>
                    </div>
                    
                    <div class="text-center mb-3">
                        <h5 class="card-title mb-1">${item.name}</h5>
                        <p class="card-text text-muted small mb-1">${item.category}</p>
                        <p class="card-text fw-bold text-primary mb-2">${item.price} ريال</p>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-link text-danger" 
                            onclick="removeItem('${item.id}')"
                            style="font-size: 1.1rem;">
                            <i class="bi bi-trash"></i>
                        </button>

                        <div class="d-flex align-items-center">
                            <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                style="width: 28px; height: 28px;"
                                onclick="updateQuantity('${item.id}', -1)">
                                <i class="bi bi-dash"></i>
                            </button>
                            <span class="mx-3 fw-bold">${item.quantity}</span>
                            <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                style="width: 28px; height: 28px;"
                                onclick="updateQuantity('${item.id}', 1)">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    `
                    }
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;

    // تحديث الأسعار
    subtotalElements.forEach(el => el.textContent = `${subtotal.toFixed(2)} ريال`);
    shippingElements.forEach(el => el.textContent = `${SHIPPING_COST.toFixed(2)} ريال`);
    const total = subtotal + SHIPPING_COST;
    totalElements.forEach(el => el.textContent = `${total.toFixed(2)} ريال`);
}*/

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  const subtotalElements = document.querySelectorAll(".cart-subtotal");
  const totalElements = document.querySelectorAll(".cart-total");
  const shippingElements = document.querySelectorAll(".cart-shipping");

  updateCartCount();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
            <div class="card">
                <div class="card-body text-center py-5">
                    <i class="bi bi-cart-x" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">العربة فارغة</h4>
                    <a href="index.html" class="btn btn-primary mt-3">تسوق الآن</a>
                </div>
            </div>
        `;
    subtotalElements.forEach((el) => (el.textContent = "0 ريال"));
    shippingElements.forEach((el) => (el.textContent = "0 ريال"));
    totalElements.forEach((el) => (el.textContent = "0 ريال"));
    return;
  }

  let cartHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    cartHTML += `
            <div class="card shadow-sm w-100 mb-3">
                <div class="card-body p-3"> 
                    <!-- Desktop View -->
                    <div class="row align-items-center">
                        <div class="col-2">
                            <div class="ratio ratio-1x1">
                                <img src="${item.image}" 
                                    class="rounded-3 object-fit-cover" 
                                    alt="${item.name}">
                            </div>
                        </div>
                        
                        <div class="col-7">
                            <h5 class="card-title mb-2">${item.name}</h5>
                            <p class="card-text text-muted mb-1">${item.category}</p>
                            <p class="card-text fw-bold text-primary mb-0">${item.price} ريال</p>
                        </div>
                        
                        <div class="col-3">
                            <div class="d-flex justify-content-end align-items-center gap-3">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                        style="width: 32px; height: 32px;"
                                        onclick="updateQuantity('${item.id}', -1)">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <span class="mx-3 fw-bold">${item.quantity}</span>
                                    <button class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" 
                                        style="width: 32px; height: 32px;"
                                        onclick="updateQuantity('${item.id}', 1)">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                                <button class="btn btn-link text-danger p-0" 
                                    onclick="removeItem('${item.id}')"
                                    style="font-size: 1.2rem;">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  cartContainer.innerHTML = cartHTML;

  // تحديث الأسعار
  subtotalElements.forEach(
    (el) => (el.textContent = `${subtotal.toFixed(2)} ريال`)
  );
  shippingElements.forEach(
    (el) => (el.textContent = `${SHIPPING_COST.toFixed(2)} ريال`)
  );
  const total = subtotal + SHIPPING_COST;
  totalElements.forEach((el) => (el.textContent = `${total.toFixed(2)} ريال`));
}
// تحديث كمية المنتج
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity < 1) {
            // إذا أصبحت الكمية صفر، قم بحذف المنتج
            removeItem(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartCount();
        }
    }
}

// حذف منتج من العربة
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount(); // تحديث الكاونتر
}

// إتمام الشراء
function proceedToCheckout() {
    const toast = new bootstrap.Toast(document.getElementById('checkoutToast'), {
        animation: true,
        autohide: true,
        delay: 2000,
        position: 'top-center'
    });

    toast.show();

    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 2000);
}

// تحديث عرض العربة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    updateCartDisplay();
    updateCartCount(); // تحديث الكاونتر عند تحميل الصفحة
});