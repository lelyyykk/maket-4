/*
    ========================================
    BURGER-MENU
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".header__burger-menu");
    const menu = document.querySelector("ul");

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
$(document).ready(function() {
    // Form validation
    $("form").submit(function(event) {
        event.preventDefault();

        var form = $(this);
        var inputs = form.find("input[type='text'], input[type='tel'], input[type='email']");
        var isValid = true;

        inputs.each(function() {
            var input = $(this);
            var errorContainer = input.siblings(".error-message");
            var errorMessage = "Це поле обов'язкове";
            var fieldType = input.attr("type");

            if (input.val().trim() === "") {
                input.addClass("error");
                input.attr("placeholder", errorMessage);
                isValid = false;
            } else {
                if (fieldType === "text" && !/^[a-zA-Zа-яА-ЯіїєІЇЄґҐ']{2,}$/.test(input.val())) {
                    if (input.attr("name") === "surname") {
                        errorMessage = "Введіть коректне прізвище";
                    }
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", errorMessage);
                    isValid = false;
                } else if (fieldType === "tel" && !/^[\d-()+ ]{10,}$/.test(input.val())) {
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", "Введіть коректний номер телефону.");
                    isValid = false;
                } else if (fieldType === "email" && (!/^.{15,}$/.test(input.val()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.val()))) {
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", "Введіть коректну адресу електронної пошти.");
                    isValid = false;
                } else {
                    input.removeClass("error");
                }
            }
        });

        var checkbox = form.find("input[type='checkbox']");
        if (!checkbox.prop("checked")) {
            var errorMessage = "Будь ласка, погодьтесь з Політикою Конфіденційності.";
            checkbox.siblings("span").addClass("error");
            checkbox.siblings("a").addClass("error");
            checkbox.siblings("a").attr("data-error", errorMessage);
            isValid = false;
        } else {
            checkbox.removeClass("error");
            checkbox.siblings("span").removeClass("error");
            checkbox.siblings("a").removeClass("error");
            checkbox.siblings("a").removeAttr("data-error");
        }

        var interest = form.find("input[name='interest']");
        var interestValue = interest.val().trim().toLowerCase();
        if (interestValue !== "developer" && interestValue !== "qa") {
            var errorMessage = "Будь ласка, введіть 'developer' або 'QA'.";
            interest.addClass("error");
            interest.val("");
            interest.attr("placeholder", errorMessage);
            isValid = false;
        } else {
            interest.removeClass("error");
        }

        if (isValid) {
            form[0].reset();

            // Reset placeholders
            inputs.each(function() {
                var input = $(this);
                input.removeClass("error");
                input.attr("placeholder", input.attr("title"));
            });
        }
    });
});


/*
    ========================================
    Slider for course
    ========================================
*/

$(document).ready(function() {
    $('.slider-course').slick({
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
                    slidesToShow: 1,
                    fade:true
                }
            }
        ]
    });
});

/*
    ========================================
    Slider for reviews mentors
    ========================================
*/
$(document).ready(function() {
    $('.reviews_slider, .slider__mentors').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        fade: true
    });
});
