document.querySelectorAll('.item__close').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.item').remove();
    });
});

document.querySelectorAll('.order__descr__close').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.order').remove();
    });
});

document.querySelectorAll('.item__quantity__btn__minus').forEach(button => {
    button.addEventListener('click', function() {
        const numberElement = this.closest('.item__quantity').querySelector('.item__quantity__num');
        let currentNumber = parseInt(numberElement.textContent);
        if (currentNumber > 1) {
            numberElement.textContent = currentNumber - 1;
        }
    });
});
document.querySelectorAll('.item__quantity__btn__plus').forEach(button => {
    button.addEventListener('click', function() {
        const numberElement = this.closest('.item__quantity').querySelector('.item__quantity__num');
        let currentNumber = parseInt(numberElement.textContent);
        numberElement.textContent = currentNumber + 1;
    });
});

document.querySelectorAll('.order__descr__quantity__plus').forEach(button => {
    button.addEventListener('click', function() {
        updateTotal(button, 1); // або -1, залежно від вашої логіки
    });
});
document.querySelectorAll('.order__descr__quantity__minus').forEach(button => {
    button.addEventListener('click', function() {
        updateTotal(button, -1); // або -1, залежно від вашої логіки
    });
});

function updateTotal(button, change) {
    const item = button.closest('.order');
    const priceElement = item.querySelector('.order__descr__price__num');
    const quantityElement = item.querySelector('.order__descr__quantity__num');
    const totalElement = item.querySelector('.order__descr__total');

    let price = parseFloat(priceElement.textContent.replace(/,/g, '').replace(' USD', ''));
    let quantity = parseInt(quantityElement.textContent);

    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;

    const total = price * quantity;
    totalElement.textContent = total.toLocaleString() + ' USD';
};

document.querySelectorAll('.counter__btn__minus').forEach(button => {
    button.addEventListener('click', function() {
        const numberElement = this.closest('.counter').querySelector('.counter__num');
        let currentNumber = parseInt(numberElement.textContent);
        if (currentNumber > 1) {
            numberElement.textContent = currentNumber - 1;
        }
    });
});
document.querySelectorAll('.counter__btn__plus').forEach(button => {
    button.addEventListener('click', function() {
        const numberElement = this.closest('.counter').querySelector('.counter__num');
        let currentNumber = parseInt(numberElement.textContent);
        numberElement.textContent = currentNumber + 1;
    });
});