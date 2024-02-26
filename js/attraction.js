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

const elementsScroll = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Виконати анімацію, коли елемент стає видимим
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

elementsScroll.forEach((element) => {
    observer.observe(element);
});

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