let Cart = [];
let productsData = [
    {
        img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
        name: "جاكيت جينز",
        price: 79.99,
        category: "Clothing",
        id: 1
    },
    {
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        name: "حقيبة جلدية",
        price: 129.99,
        category: "Beauty",
        id: 2
    },
    {
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
        name: "ساعة ذهبية",
        price: 199.99,
        category: "Accessories",
        id: 3
    },
    {
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        name: "حذاء رياضي أبيض",
        price: 89.99,
        category: "Shoes",
        id: 4
    }
];

// دالة عرض المنتجات
function products() {
    const parent = document.getElementById("productsGrid");
    if (!parent) return; // التحقق من وجود العنصر

    parent.innerHTML = "";

    productsData.forEach(element => {
        const product = document.createElement("div");
        product.className = "col-md-4 product-card";
        product.setAttribute("data-price", element.price);
        product.setAttribute("data-category", element.category);

        product.innerHTML = `
            <div class="card h-100">
                <img src="${element.img}" class="card-img-top" alt="${element.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-text">${getCategoryNameInArabic(element.category)}</h6>
                    <p class="card-text">${element.price} ريال</p>
                    <button class="btn btn-primary add-to-cart" onclick="addToCart(${element.id})">
                        إضافة للسلة
                    </button>
                </div>
            </div>`;

        parent.appendChild(product);
    });
}

// تحويل اسم الفئة إلى العربية
function getCategoryNameInArabic(category) {
    const categories = {
        'Clothing': 'الملابس',
        'Beauty': 'التجميل',
        'Accessories': 'الإكسسوارات',
        'Shoes': 'الأحذية'
    };
    return categories[category] || category;
}

// دالة إضافة المنتجات للسلة
function addToCart(id) {
    const product = productsData.find(item => item.id === id);
    if (product) {
        Cart.push(product);
        updateCartCount();
        // إظهار رسالة نجاح
        alert(`تمت إضافة ${product.name} إلى السلة`);
    }
}

// تحديث عدد المنتجات في السلة
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = Cart.length;
        cartCount.style.display = Cart.length > 0 ? "flex" : "none";
    }
}

// تهيئة الفلترة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    let priceRange = [0, 500];
    let selectedCategories = [];

    // تبديل حالة الفئة
    function toggleCategory(category) {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            selectedCategories.push(category);
        } else {
            selectedCategories.splice(index, 1);
        }
        filterProducts();
    }

    // فلترة المنتجات
    function filterProducts() {
        document.querySelectorAll(".product-card").forEach(card => {
            const price = parseFloat(card.getAttribute("data-price"));
            const category = card.getAttribute("data-category");

            const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

            card.style.display = matchesPrice && matchesCategory ? "block" : "none";
        });
    }

    // تحديث نطاق السعر
    const range = document.getElementById("priceRange");
    if (range) {
        range.addEventListener("input", function () {
            priceRange[1] = parseFloat(this.value);
            const priceValue = document.getElementById("priceValue");
            if (priceValue) {
                priceValue.innerText = `${priceRange[1]} ريال`;
            }
            filterProducts();
        });
    }

    // تحديث الفئات المحددة
    document.querySelectorAll(".category-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleCategory(this.value);
        });
    });

    // تحميل المنتجات
    products();
});
