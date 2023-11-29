console.log("Hello world")

const header = document.querySelector('header');

let lastScrollPosition = window.scrollY;

window.onscroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Прокрутка вниз: ховаємо хедер плавно
        header.style.transition = 'opacity 0.5s ease';
        header.style.visibility = "hidden"
        header.style.opacity = 0;
    } else {
        // Прокрутка вгору: показуємо хедер плавно
        header.style.transition = 'opacity 0.9s ease';
        header.style.opacity = 1;
        header.style.visibility = "visible";
    }

    lastScrollPosition = currentScrollPosition;
};

const container = document.querySelector('.instagram-elements-container');
const elementContainer = document.querySelector('.instagram-elements');

container.addEventListener('mouseenter', () => {
    container.style.animationPlayState = 'paused';
});

container.addEventListener('mouseleave', () => {
    container.style.animationPlayState = 'running';
});

// Додайте цей код для додавання втрачених елементів
container.addEventListener('animationiteration', () => {
    const clonedElement = elementContainer.firstElementChild.cloneNode(true);
    elementContainer.appendChild(clonedElement);
});



const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Виконати анімацію, коли елемент стає видимим
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
});

// Отримайте посилання на кнопку та блок
const closeButton = document.getElementById("close-icon");
const openButton = document.getElementById("menu")
const blockToClose = document.getElementById("mobile-header");
const blockToClose1 = document.getElementById("container-header");

openButton.addEventListener("click", function () {
    // Змініть стиль блоку, щоб його приховати (змініть display на "none")
    blockToClose.style.display = "flex";
    blockToClose1.style.display = "none";
});

// Додайте обробник події на кнопку
closeButton.addEventListener("click", function () {
    // Змініть стиль блоку, щоб його приховати (змініть display на "none")
    blockToClose1.style.display = "flex";
    blockToClose.style.display = "none";
});

const button = document.getElementById("instagram-head__button");
const containerInst = document.getElementById("instagram-elements-container");
const head = document.querySelector(".instagram-head");

let isMobileView = false;

function reorderButton() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 426 && !isMobileView) {
        containerInst.appendChild(button);
        isMobileView = true;
    } else if (viewportWidth >= 426 && isMobileView) {
        head.appendChild(button);
        isMobileView = false;
    }
}

// Викликати функцію при завантаженні сторінки та при зміні розміру вікна
window.addEventListener("load", reorderButton);
window.addEventListener("resize", reorderButton);

function removeBrElements() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const subtitleElements = document.querySelectorAll(".routes-about__subtitle");

    if (viewportWidth < 426) {
        subtitleElements.forEach((subtitleElement) => {
            const brElements = subtitleElement.querySelectorAll("br");

            brElements.forEach((brElement) => {
                brElement.remove();
            });
        });
    }
}

// // Викликати функцію при завантаженні сторінки та при зміні розміру вікна
// window.addEventListener("load", removeBrElements);
// window.addEventListener("resize", removeBrElements);

// document.addEventListener('DOMContentLoaded', function () {
//     var customSelect = document.querySelector('.custom-select');

//     customSelect.addEventListener('click', function () {
//         this.classList.toggle('active');
//     });

//     var selectOptions = document.querySelectorAll('.select-options li');

//     selectOptions.forEach(function (option) {
//         option.addEventListener('click', function () {
//             var value = this.getAttribute('data-value');
//             // Обробка вибору значення
//             console.log(value);
//             customSelect.querySelector('.select-trigger').textContent = this.textContent;
//             customSelect.classList.remove('active');
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     var customSelect = document.querySelector('.custom-select');
//     var languageImageRow = document.querySelector('.language-change__image-row');

//     languageImageRow.addEventListener('click', function () {
//         customSelect.classList.toggle('active');
//     });

//     var selectOptions = document.querySelectorAll('.select-options li');

//     selectOptions.forEach(function (option) {
//         option.addEventListener('click', function () {
//             var value = this.getAttribute('data-value');
//             console.log(value);
//             customSelect.querySelector('.select-trigger').textContent = this.textContent;
//             customSelect.classList.remove('active');
//         });
//     });
// });