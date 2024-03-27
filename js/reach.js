const header = document.querySelector("header");

let lastScrollPosition = window.scrollY;

window.onscroll = () => {
	const currentScrollPosition = window.scrollY;

	if (currentScrollPosition > lastScrollPosition) {
		// Прокрутка вниз: ховаємо хедер плавно
		header.style.transition = "opacity 0.5s ease";
		header.style.visibility = "hidden";
		header.style.opacity = 0;
	} else {
		// Прокрутка вгору: показуємо хедер плавно
		header.style.transition = "opacity 0.9s ease";
		header.style.opacity = 1;
		header.style.visibility = "visible";
	}

	lastScrollPosition = currentScrollPosition;
};

const elementsScroll = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Виконати анімацію, коли елемент стає видимим
			entry.target.style.opacity = 1;
			entry.target.style.transform = "translateY(0)";
		}
	});
});

elementsScroll.forEach((element) => {
	observer.observe(element);
});

const closeButton = document.getElementById("close-icon");
const openButton = document.getElementById("menu");
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

// var rotateImage = document.getElementById("rotateImage");
// var container = document.querySelector(".container");

// rotateImage.addEventListener("click", function () {
// 	rotateImage.classList.toggle("rotate");
// 	container.classList.toggle("show-container");
// });

document.addEventListener("DOMContentLoaded", function () {
	var navigationItems = document.querySelectorAll(".navigationReach li");
	var items = document.querySelectorAll(".container__navigationItems .item");

	navigationItems.forEach((navItem, index) => {
		navItem.addEventListener("click", () => {
			// Видаляємо активний клас у всіх елементів навігації
			navigationItems.forEach((item) => item.classList.remove("active"));
			// Додаємо активний клас до поточного елемента навігації
			navItem.classList.add("active");

			// Отримуємо ідентифікатор відповідного елементу
			var targetId = navItem.dataset.target;
			var targetElement = document.getElementById(targetId);

			// Змінюємо стиль видимості елементів
			items.forEach((item, i) => {
				if (index === i) {
					item.classList.add("show-item");
					item.style.opacity = 0; // Початкове значення прозорості
					item.style.transform = "translateX(30%)"; // Початкове значення трансформації
					setTimeout(() => {
						item.style.opacity = 1; // Застосовуємо анімацію з'явлення
						item.style.transform = "translateX(0)"; // Застосовуємо анімацію з'явлення
					}, 100);
				} else {
					item.classList.remove("show-item");
					item.style.opacity = 0; // Приховуємо інші елементи
					item.style.transform = "translateX(-100%)"; // Приховуємо інші елементи
				}
			});

			// Прокручуємо до відповідного елементу
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	});
});
