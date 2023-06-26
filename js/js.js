/*
    ========================================
    BURGER-MENU
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function() {
        menu.parentElement.classList.toggle("show");
        burgerMenu.classList.toggle("active");
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.parentElement.classList.remove("show");
            burgerMenu.classList.remove("active");
        });
    });
});

/*
    ========================================
    Validation
    ========================================
*/
// Отримати посилання на форму
var form = document.querySelector('form');

// Додати обробник події 'submit' до форми
form.addEventListener('submit', function(event) {
    // Перевірка валідації перед відправкою форми
    if (!validateForm()) {
        event.preventDefault(); // Скасувати стандартну відправку форми, якщо валідація не пройдена
    }
});

// Функція для валідації форми
function validateForm() {
    // Отримати значення полів форми
    var nameInput = document.querySelector('input[name="name"]');
    var surnameInput = document.querySelector('input[name="surname"]');
    var phoneInput = document.querySelector('input[name="phone"]');
    var interestInput = document.querySelector('input[name="interest"]');
    var checkboxInput = document.querySelector('input[name="car"]');

    // Перевірка валідації для кожного поля

    // 1) Перевірка валідації для полів ім'я та прізвище
    var name = nameInput.value;
    var surname = surnameInput.value;
    var nameRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'`]+$/; // Регулярний вираз для перевірки, що в полі можуть бути тільки букви

    if (!nameRegex.test(name)) {
        alert('Будь ласка, введіть дійсне ім\'я.');
        return false;
    }

    if (!nameRegex.test(surname)) {
        alert('Будь ласка, введіть дійсне прізвище.');
        return false;
    }

    // 2) Перевірка валідації для поля з номером
    var phone = phoneInput.value;
    var phoneRegex = /^\d{12}$/; // Регулярний вираз для перевірки, що в полі можуть бути тільки 12 цифр

    if (!phoneRegex.test(phone)) {
        alert('Будь ласка, введіть дійсний номер телефону (12 цифр).');
        return false;
    }

    // 3) Перевірка валідації для поля "Мене більше цікавить"
    var interest = interestInput.value;
    var validInterests = ['developer', 'QA'];

    if (validInterests.indexOf(interest) === -1) {
        alert('Будь ласка, введіть "developer" або "QA".');
        return false;
    }

    // 4) Перевірка валідації для поля checkbox
    if (!checkboxInput.checked) {
        alert('Будь ласка, погодьтесь з Політикою Конфіденційності.');
        return false;
    }

    return true; // Повертаємо true, якщо всі перевірки успішні
}
/*
    ========================================
    Slider for course
    ========================================
*/

$(document).ready(function() {
    $('.slider_course').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

/*
    ========================================
    Slider for reviews
    ========================================
*/
$(document).ready(function() {
    $('.reviews_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
    });
});
/*
    ========================================
    Slider for mentors
    ========================================
*/
$(document).ready(function() {
    $('.slider__mentors').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
    });
});