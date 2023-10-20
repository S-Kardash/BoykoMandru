console.log("Hello world")

const header = document.querySelector('header');

let lastScrollPosition = window.scrollY;

window.onscroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Прокрутка вниз: ховаємо хедер плавно
        header.style.transition = 'opacity 0.5s ease';
        header.style.opacity = 0;
    } else {
        // Прокрутка вгору: показуємо хедер плавно
        header.style.transition = 'opacity 0.9s ease';
        header.style.opacity = 1;
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
