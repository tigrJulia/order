$(document).ready(function () {
    $('.choice').slick({
        infinite: false,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        variableWidth: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 866,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })
});


$(document).ready(function () {
    $('.gallery').slick({
        infinite: false,
        rows: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        speed: 300,
        responsive: [
            {
                breakpoint: 1261,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 867,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                    dots: false,
                    arrows: true,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 866,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 683,
                settings: {
                    rows: 2,
                    slidesToShow: 4,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 659,
                settings: {
                    rows: 2,
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 508,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentCard = this.closest('.card');
            if (this.checked) {
                parentCard.style.border = '1px solid #E70658';
            } else {
                parentCard.style.border = '1px solid transparent'; // Повертаємо початковий стиль
            }
        });
    });
});


const interiorsCheckboxes = document.querySelectorAll('#interiors .interiors__choice input[type="checkbox"]');
const exteriorsCheckboxes = document.querySelectorAll('#exteriors .interiors__choice input[type="checkbox"]');
const interiorsSelect = document.querySelector('#interiors .interiors__select');
const exteriorsSelect = document.querySelector('#exteriors .interiors__select');

let interiorsCount = 0;
let exteriorsCount = 0;

interiorsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      interiorsCount++;
    } else {
      interiorsCount--;
    }
    interiorsSelect.textContent = `${interiorsCount}/30 select`;
  });
});

exteriorsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      exteriorsCount++;
    } else {
      exteriorsCount--;
    }
    exteriorsSelect.textContent = `${exteriorsCount}/30 select`;
  });
});