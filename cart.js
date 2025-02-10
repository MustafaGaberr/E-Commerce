// بيانات المنتجات
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

// عرض منتجات السلة
function cartElem() {
    const parent = document.getElementById("cart-elem");
    if (!parent) return;

    parent.innerHTML = "";

    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <div class="d-flex align-items-center border-bottom pb-3 mb-3">
                <img src="${product.img}" alt="${product.name}"
                    class="me-3 rounded" width="80" height="80" style="object-fit: cover;">
                <div class="flex-grow-1">
                    <h5 class="mb-1">${product.name}</h5>
                    <p class="mb-0">${product.price} ريال</p>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span class="mx-2">1</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${product.id}, 1)">+</button>
                    <button class="btn btn-outline-danger btn-sm ms-3" onclick="removeFromCart(${product.id})">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>`;
        parent.appendChild(productElement);
    });
}

// تحديث السلة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', cartElem);