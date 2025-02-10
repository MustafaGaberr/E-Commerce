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

function cartElem() {
    const parent = document.getElementById("cart-elem");
    parent.innerHTML = ""; // تفريغ المنتجات القديمة

    for (const element of productsData) {
        let product = document.createElement("div");
        product.innerHTML = `
        <div class="d-flex align-items-center border-bottom pb-3 mb-3">
                    <img src="${element.img}" alt="Leather Crossbody Bag"
                        class="me-3" width="80" height="80">
                    <div class="flex-grow-1">
                        <h5 class="mb-1">${element.name}</h5>
                        <p class="mb-0">$129.99</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-sm">-</button>
                        <span class="mx-2">1</span>
                        <button class="btn btn-outline-secondary btn-sm">+</button>
                        <button class="btn btn-outline-danger btn-sm ms-3"><i class="bi bi-trash3"></i></button>
                    </div>
                </div>`;
        parent.appendChild(product);
    }
}
cartElem();