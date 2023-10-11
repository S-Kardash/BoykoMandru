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

var container = document.querySelector('.instagram-elements');

container.addEventListener('mousedown', function (e) {
    // Запам'ятовуємо початкові координати миші
    var startX = e.pageX - container.scrollLeft;

    container.addEventListener('mousemove', function (e) {
        // Розраховуємо нове положення прокрутки
        var scrollX = startX - e.pageX;

        // Встановлюємо положення прокрутки
        container.scrollLeft = scrollX;
    });

    container.addEventListener('mouseup', function () {
        // Видаляємо обробник подій, коли мишка відпускається
        container.removeEventListener('mousemove', null);
        container.removeEventListener('mouseup', null);
    });
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
