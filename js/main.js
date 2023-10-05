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