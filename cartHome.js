// تحديث عدد العناصر في العربة
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// إضافة منتج إلى العربة
function addToCart(product) {
    // البحث عن المنتج في العربة
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // زيادة الكمية إذا كان المنتج موجود
        existingProduct.quantity += 1;
    } else {
        // إضافة المنتج إذا لم يكن موجود
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    // حفظ العربة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // تحديث عدد العناصر في العربة
    updateCartCount();

    // إظهار رسالة نجاح
    showAlert('تمت إضافة المنتج إلى العربة');
}

// إظهار رسالة نجاح
function showAlert(message) {
    // إنشاء عنصر التنبيه
    const alert = document.createElement('div');
    alert.className = 'alert alert-success position-fixed start-0 m-3';
    alert.style.zIndex = '1000';
    alert.style.maxWidth = '300px';
    alert.textContent = message;

    // إضافة التنبيه إلى الصفحة
    document.body.appendChild(alert);

    // إخفاء التنبيه بعد ثانيتين
    setTimeout(() => {
        alert.remove();
    }, 2000);
}

// إضافة مستمعي الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    // تحديث عدد العناصر في العربة عند تحميل الصفحة
    updateCartCount();

    // إضافة مستمع الحدث لكل أزرار "إضافة للسلة"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                image: this.dataset.image,
                category: this.dataset.category
            };
            addToCart(product);
        });
    });
});