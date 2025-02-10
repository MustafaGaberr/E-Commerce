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

function productsCar() {
    const parent = document.getElementById("car-product");
    parent.innerHTML = ""; // تفريغ المنتجات القديمة

    for (const element of productsData) {
        let product = document.createElement("div");
        product.innerHTML = `
        <div class="card">
            <img src="${element.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6 class="card-text">${element.category}</h6>
                <p class="card-text">$${element.price}</p>
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${element.id})">
                    Add to Cart
                </button>
            </div>
        </div>`;
        product.className = "col-md-3 product-card";
        product.setAttribute("data-price", element.price);
        product.setAttribute("data-category", element.category);
        parent.appendChild(product);
    }
}
productsCar();

function productsCard() {
    const parent = document.getElementById("car-product2");
    parent.innerHTML = ""; // تفريغ المنتجات القديمة

    for (const element of productsData) {
        let product = document.createElement("div");
        product.innerHTML = `
        <div class="card">
            <img src="${element.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                                <h6 class="card-text">${element.category}</h6>
                <p class="card-text">$${element.price}</p>
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${element.id})">
                    Add to Cart
                </button>
            </div>
        </div>`;
        product.className = "col-md-3 product-card";
        product.setAttribute("data-price", element.price);
        product.setAttribute("data-category", element.category);
        parent.appendChild(product);
    }
}
productsCard();
