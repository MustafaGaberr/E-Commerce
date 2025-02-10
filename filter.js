let Cart = [];
let productsData = [
    {
        img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
        name: "Denim Jacket",
        price: 79.99,
        category: "Clothing",
        id: 1
    },
    {
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        name: "Leather Crossbody Bag",
        price: 129.99,
        category: "Beauty",
        id: 2
    },
    {
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
        name: "Gold Watch",
        price: 199.99,
        category: "Accessories",
        id: 3
    },
    {
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        name: "Classic White Sneakers",
        price: 89.99,
        category: "Shoes",
        id: 4
    }
];

// دالة عرض المنتجات
function products() {
    const parent = document.getElementById("productsGrid");
    parent.innerHTML = ""; // تفريغ المنتجات القديمة

    for (const element of productsData) {
        let product = document.createElement("div");
        product.innerHTML = `
            <div class="card">
                <img src="${element.img}" class="card-img-top">
                <div class="card-body text-center">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-text">${element.category}</h6>
                    <p class="card-text">$${element.price}</p>
                    <button class="btn btn-primary add-to-cart" onclick="addToCart(${element.id})">
                        Add to Cart
                    </button>
                </div>
            </div>`;
        product.className = "col-md-4 product-card";
        product.setAttribute("data-price", element.price);
        product.setAttribute("data-category", element.category);
        parent.appendChild(product);
    }
}



// دالة إضافة المنتجات للسلة
function addToCart(id) {
    let product = productsData.find((item) => item.id === id);
    Cart.push(product);
    updateCartCount();
    console.log(Cart);
}

// تحديث عدد المنتجات في السلة
function updateCartCount() {
    document.getElementById("cartCount").innerText = Cart.length;
}

// فلترة المنتجات
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

    // تحديث السعر عند تحريك الـ Range
    let range = document.getElementById("priceRange");
    range.addEventListener("input", function () {
        priceRange[1] = parseFloat(this.value);
        document.getElementById("priceValue").innerText = `$${priceRange[1]}`;
        filterProducts();
    });

    // تحديث الفئات عند تغيير الـ Checkbox
    document.querySelectorAll(".category-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleCategory(this.value);
        });
    });

    // تحميل المنتجات عند تشغيل الصفحة
    products();

});
