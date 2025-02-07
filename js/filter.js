
document.querySelector('.filter-2').addEventListener('click', function() {
    var filterContent = document.querySelector('.filter-content');
    var productGrid = document.querySelector('.product-grid');
    
    filterContent.classList.toggle('open'); // Перемикаємо клас для фільтру

    // Якщо фільтр відкривається, зсуваємо сітку вниз, інакше повертаємо назад
    if (filterContent.classList.contains('open')) {
        productGrid.classList.add('shift-down');
    } else {
        productGrid.classList.remove('shift-down');
    }
});
//фільтр-2
document.addEventListener('DOMContentLoaded', function() {
    // Для мобільного фільтра
    const formMobile = document.querySelector('.filters-2 form');
    const flowerTypeSelectMobile = document.getElementById('flower-type-2');
    const priceRangeMobile = document.getElementById('price-range-2');
    const priceValueMobile = document.getElementById('price-value-2');
    const colorSelectMobile = document.getElementById('color-2');
    const productCards = document.querySelectorAll('.product-card');

    // Оновлення значення ціни для мобільного фільтра
    priceRangeMobile.addEventListener('input', function() {
        priceValueMobile.textContent = priceRangeMobile.value + ' грн';
    });

    // Обробник події для фільтрації товарів на мобільному екрані
    formMobile.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedType = flowerTypeSelectMobile.value;
        const selectedColor = colorSelectMobile.value;
        const selectedPrice = priceRangeMobile.value;

        productCards.forEach(function(card) {
            const type = card.getAttribute('data-type');
            const color = card.getAttribute('data-color');
            const price = card.getAttribute('data-price');

            // Перевірка, чи товар відповідає обраним фільтрам
            const isTypeMatch = selectedType === 'Всі' || selectedType === type;
            const isColorMatch = selectedColor === 'Всі' || selectedColor === color;
            const isPriceMatch = parseInt(price) <= parseInt(selectedPrice);

            // Показуємо або ховаємо товар в залежності від відповідності фільтрам
            if (isTypeMatch && isColorMatch && isPriceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});