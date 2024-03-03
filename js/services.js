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


// document.addEventListener("DOMContentLoaded", function () {
//     const popupButton = document.querySelector(".popup-button");
//     const wrapperPopup = document.getElementById("wrapperPopup");
//     const closePopup = document.getElementById("closePopup");

//     popupButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         wrapperPopup.classList.add("active");
//         wrapperPopup.classList.remove("fadeOut"); // Видаляємо клас fadeOut, щоб забезпечити, що вікно не зникне відразу після відкриття
//     });

//     closePopup.addEventListener("click", function (event) {
//         event.preventDefault();
//         wrapperPopup.classList.remove("active");
//         wrapperPopup.classList.add("fadeOut");
//     });

//     wrapperPopup.addEventListener("animationend", function () {
//         if (!wrapperPopup.classList.contains("active")) {
//             wrapperPopup.classList.remove("fadeOut");
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const popupButtons = document.querySelectorAll(".popup-button");
//     const wrapperPopup = document.getElementById("wrapperPopup");
//     const closePopup = document.getElementById("closePopup");
//     const popUpDisplay = document.querySelector(".popUpDisplay");

//     // Додаємо обробник подій для кожної кнопки
//     popupButtons.forEach(function (button) {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();
//             wrapperPopup.classList.add("active");
//             popUpDisplay.style.transform = "scale(1)";
//         });
//     });

//     closePopup.addEventListener("click", function (event) {
//         event.preventDefault();
//         popUpDisplay.style.transform = "scale(0.7)";
//         setTimeout(function () {
//             wrapperPopup.classList.remove("active");
//         }, 300); // Час анімації (0.3 секунди)
//     });
// });











// const popUpDisplay = document.querySelector(".popUpDisplay");
// const popupButtons = document.querySelectorAll(".popup-button");

// popupButtons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         event.preventDefault();
//         const containerElement = button.closest(".container-servicesWrap__elementWrap");
//         const imageSrc = containerElement.querySelector("img").getAttribute("src");
//         const imageAlt = containerElement.querySelector("img").getAttribute("alt");
//         const titleText = containerElement.querySelector(".container-servicesWrap__elementWrap_txt h4").textContent;
//         const descriptionText = containerElement.querySelector(".container-servicesWrap__elementWrap_txt span").textContent;
//         const additionalText1 = containerElement.dataset.additionalText1;
//         const additionalText2 = containerElement.dataset.additionalText2;
//         const additionalText3 = containerElement.dataset.additionalText3;
//         const additionalText4 = containerElement.dataset.additionalText4;

//         const imageElement = popUpDisplay.querySelector(".popUpDisplay__titleWrap_img img");
//         imageElement.src = imageSrc;
//         imageElement.alt = imageAlt;

//         const popUpTitleWrap = popUpDisplay.querySelector(".popUpDisplay__titleWrap_txt");
//         const titleElement = popUpTitleWrap.querySelector("h1");
//         if (titleElement) {
//             titleElement.textContent = titleText;
//         }

//         const descriptionElement = popUpTitleWrap.querySelector("h3");
//         if (descriptionElement) {
//             descriptionElement.textContent = descriptionText;
//         }

//         const popUpInfoWrap = popUpDisplay.querySelector(".popUpDisplay__infoWrap");
//         const infoElements = popUpInfoWrap.querySelectorAll(".popUpDisplay__infoWrap_element");

//         // Очищення елементів перед додаванням нових
//         infoElements.forEach(element => {
//             const nameElement = element.querySelector(".popUpDisplay__infoWrap_elementName");
//             const costHourElement = element.querySelector(".popUpDisplay__infoWrap_elementCostHour");
//             const costEraElement = element.querySelector(".popUpDisplay__infoWrap_elementCostEra");

//             nameElement.textContent = '';
//             costHourElement.textContent = '';
//             costEraElement.textContent = '';
//         });

//         // Додавання additionalText до відповідних елементів
//         infoElements[0].querySelector(".popUpDisplay__titleWrap_txt").textContent = additionalText1;
//         infoElements[0].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
//         infoElements[0].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
//         infoElements[0].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

//         infoElements[1].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
//         infoElements[1].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
//         infoElements[1].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

//         infoElements[2].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
//         infoElements[2].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
//         infoElements[2].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

//         wrapperPopup.classList.add("active");
//         popUpDisplay.style.transform = "scale(1)";
//     });

//     closePopup.addEventListener("click", function (event) {
//         event.preventDefault();
//         popUpDisplay.style.transform = "scale(0.7)";
//         setTimeout(function () {
//             wrapperPopup.classList.remove("active");
//         }, 300); // Час анімації (0.3 секунди)
//     });
// });


const popUpDisplay = document.querySelector(".popUpDisplay");
const popupButtons = document.querySelectorAll(".popup-button");

popupButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const containerElement = button.closest(".container-servicesWrap__elementWrap");
        const imageSrc = containerElement.querySelector("img").getAttribute("src");
        const imageAlt = containerElement.querySelector("img").getAttribute("alt");
        const titleText = containerElement.querySelector(".container-servicesWrap__elementWrap_txt h4").textContent;
        const descriptionText = containerElement.querySelector(".container-servicesWrap__elementWrap_txt span").textContent;
        const additionalText1 = containerElement.dataset.additionalText1;
        const additionalText2 = containerElement.dataset.additionalText2;
        const additionalText3 = containerElement.dataset.additionalText3;
        const additionalText4 = containerElement.dataset.additionalText4;

        const imageElement = popUpDisplay.querySelector(".popUpDisplay__titleWrap_img img");
        imageElement.src = imageSrc;
        imageElement.alt = imageAlt;

        const popUpTitleWrap = popUpDisplay.querySelector(".popUpDisplay__titleWrap_txt");
        const titleElement = popUpTitleWrap.querySelector("h1");
        if (titleElement) {
            titleElement.textContent = titleText;
        }

        const descriptionElement = popUpTitleWrap.querySelector("h3");
        if (descriptionElement) {
            descriptionElement.textContent = descriptionText;
        }

        const additionalTextElement1 = popUpTitleWrap.querySelector("p");
        additionalTextElement1.textContent = additionalText1;

        const popUpInfoWrap = popUpDisplay.querySelector(".popUpDisplay__infoWrap");
        const infoElements = popUpInfoWrap.querySelectorAll(".popUpDisplay__infoWrap_element");

        // Очищення елементів перед додаванням нових
        infoElements.forEach(element => {
            const nameElement = element.querySelector(".popUpDisplay__infoWrap_elementName");
            const costHourElement = element.querySelector(".popUpDisplay__infoWrap_elementCostHour");
            const costEraElement = element.querySelector(".popUpDisplay__infoWrap_elementCostEra");

            nameElement.textContent = '';
            costHourElement.textContent = '';
            costEraElement.textContent = '';
        });

        // Додавання additionalText до відповідних елементів
        infoElements[0].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
        infoElements[0].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
        infoElements[0].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

        infoElements[1].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
        infoElements[1].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
        infoElements[1].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

        infoElements[2].querySelector(".popUpDisplay__infoWrap_elementName").textContent = additionalText2;
        infoElements[2].querySelector(".popUpDisplay__infoWrap_elementCostHour").textContent = additionalText3;
        infoElements[2].querySelector(".popUpDisplay__infoWrap_elementCostEra").textContent = additionalText4;

        wrapperPopup.classList.add("active");
        popUpDisplay.style.transform = "scale(1)";
    });

    closePopup.addEventListener("click", function (event) {
        event.preventDefault();
        popUpDisplay.style.transform = "scale(0.7)";
        setTimeout(function () {
            wrapperPopup.classList.remove("active");
        }, 300); // Час анімації (0.3 секунди)
    });
});
