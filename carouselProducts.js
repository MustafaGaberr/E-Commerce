const productsData = [
    {
        img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
        name: "جاكيت جينز",
        price: 79.99,
        category: "الملابس",
        id: 1
    },
    {
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        name: "حقيبة جلدية",
        price: 129.99,
        category: "الإكسسوارات",
        id: 2
    },
    {
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
        name: "ساعة ذهبية",
        price: 199.99,
        category: "الإكسسوارات",
        id: 3
    },
    {
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        name: "حذاء رياضي أبيض",
        price: 89.99,
        category: "الأحذية",
        id: 4
    }
];

// عرض المنتجات في القسم الأول من السلايدر
function productsCar() {
    const parent = document.getElementById("car-product");
    if (!parent) return;

    parent.innerHTML = "";
    renderProducts(parent);
}

// عرض المنتجات في القسم الثاني من السلايدر
function productsCard() {
    const parent = document.getElementById("car-product2");
    if (!parent) return;

    parent.innerHTML = "";
    renderProducts(parent);
}

// دالة مساعدة لعرض المنتجات
function renderProducts(container) {
    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "col-md-3 product-card";
        productElement.innerHTML = `
            <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-text">${product.category}</h6>
                    <p class="card-text">${product.price} ريال</p>
                    <button class="btn btn-primary add-to-cart" onclick="addToCart(${product.id})">
                        إضافة للسلة
                    </button>
                </div>
            </div>`;
        container.appendChild(productElement);
    });
}

// تحديث السلة
let Cart = [];

function addToCart(id) {
    const product = productsData.find(item => item.id === id);
    if (!product) return;

    Cart.push(product);
    updateCartCount();
    showNotification(`تمت إضافة ${product.name} إلى السلة`);
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (!cartCount) return;

    cartCount.innerText = Cart.length;
    cartCount.style.display = Cart.length > 0 ? "flex" : "none";
}

function showNotification(message) {
    alert(message);
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    productsCar();
    productsCard();
});