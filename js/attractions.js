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

function loadMoreBlocks() {
    // Знаходимо всі додаткові блоки з класом "additional-block"
    const additionalBlocks = document.querySelectorAll('.additional-block');
    const loadMoreIcon = document.getElementById('loadMoreIcon');

    // Змінюємо видимість картинки та обертання, додаючи/видаляючи клас "rotated"
    loadMoreIcon.classList.toggle('rotated');

    // Перебираємо їх і додаємо клас "visible"
    additionalBlocks.forEach(block => {
        block.classList.toggle('visible');
    });
}

// Отримуємо всі елементи з вказаним класом
const subtitleElements = document.querySelectorAll('.elementAttraction__subtitle');

// Перебираємо всі знайдені елементи
subtitleElements.forEach(subtitleElement => {
    // Перевіряємо кількість символів в тексті
    if (subtitleElement.textContent.length > 106) {
        // Якщо кількість символів більше 106, обрізаємо текст
        const truncatedText = subtitleElement.textContent.substring(0, 140);

        // Встановлюємо новий текст
        subtitleElement.textContent = truncatedText + '...';
    }
});
