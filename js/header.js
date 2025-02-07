document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.filters form');
    const flowerTypeSelect = document.getElementById('flower-type');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const colorSelect = document.getElementById('color');
    const productCards = document.querySelectorAll('.product-card');

    // Оновлення значення ціни
    priceRange.addEventListener('input', function() {
        priceValue.textContent = priceRange.value + ' грн';
    });

    // Обробник події для фільтрації товарів
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedType = flowerTypeSelect.value;
        const selectedColor = colorSelect.value;
        const selectedPrice = priceRange.value;

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


// Отримуємо елементи бургер-меню та навігації
const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector(".nav-menu");

// Додаємо подію для відкриття/закриття меню при кліку на бургер
burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const startX = Math.random() * window.innerWidth;
    
    const randomX = Math.random() * 60 - 30;
    flower.style.left = `${startX}px`;
    flower.style.animation = `fall 5s ease-in-out infinite`;
    flower.style.transform = `translateX(${randomX}px)`;

    document.getElementById('flowerContainer').appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 300);
