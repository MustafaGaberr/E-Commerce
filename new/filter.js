document.addEventListener('DOMContentLoaded', function () {
    // عناصر التحكم في الفلتر
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');

    // تحديث قيمة السعر المعروضة
    priceRange.addEventListener('input', function () {
        priceValue.textContent = this.value + ' ريال';
        filterProducts();
    });

    // إضافة مستمع الحدث لكل مربع اختيار
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // دالة الفلترة الرئيسية
    function filterProducts() {
        const maxPrice = parseFloat(priceRange.value);
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const products = document.querySelectorAll('#productsGrid .col-md-6');

        products.forEach(product => {
            const price = parseFloat(product.querySelector('.card-text').textContent);
            const category = product.querySelector('h6.card-title').textContent;

            const matchesPrice = price <= maxPrice;
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(getCategoryValue(category));

            if (matchesPrice && matchesCategory) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // دالة مساعدة لتحويل اسم الفئة العربي إلى القيمة المقابلة في الcheckbox
    function getCategoryValue(arabicCategory) {
        const categoryMap = {
            'الملابس': 'Clothing',
            'الأحذية': 'Shoes',
            'الإكسسوارات': 'Accessories',
            'التجميل': 'Beauty'
        };
        return categoryMap[arabicCategory];
    }
});
