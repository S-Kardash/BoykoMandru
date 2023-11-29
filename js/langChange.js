document.addEventListener('DOMContentLoaded', function () {
    var languageImageRows = document.querySelectorAll('.language-change__image-row');

    languageImageRows.forEach(function (element) {
        element.addEventListener('click', function () {
            // Toggle the class 'active' for both custom-select elements
            var customSelects = document.querySelectorAll('.custom-select');
            customSelects.forEach(function (select) {
                select.classList.toggle('active');
            });
        });
    });

    var selectTriggers = document.querySelectorAll('.select-trigger');
    var selectOptions = document.querySelectorAll('.select-options li');

    selectOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            var value = this.getAttribute('data-value');

            selectTriggers.forEach(function (trigger) {
                trigger.textContent = option.textContent;
            });

            // Select both custom-select elements
            var customSelects = document.querySelectorAll('.custom-select');
            customSelects.forEach(function (customSelect) {
                customSelect.classList.remove('active');
            });

            // Save the selected language in localStorage
            saveLanguage(value);

            // Change the language using i18next
            changeLanguage(value);
        });
    });

    // Initialize i18next
    i18next.init({
        lng: getSavedLanguage() || 'Ua',
        resources: {
            Ua: {
                translation: {
                    routes: 'Маршрути',
                    services: 'Послуги',
                    contacts: 'Контакти',
                    howToGet: 'Як доїхати',
                    attractions: "Пам'ятки",
                    aboutUs: "Про нас",
                    blogAndEvents: "Блог та події",
                    menuText: "Меню",
                    titleTranslante: "Піші й вело прогулянки горами Бойківщини",
                    subTitleTranslate: "Бойківщина — це етнокультура, з якою варто познайомитися, щоб закохатися в неї назавжди",
                    titleButTranslate: "Підібрати маршрут",
                    titleButInfTranslate: "До речі, вони безкоштовні ;)",
                    boykuTitleAccent: "Можливо, вас цікавить",
                    boykuTitle: "Що таке Бойківщина?",
                    boykuSub1: "Це регіон на схилах Карпат, що охоплює райони сучасної",
                    boykuSub2: "Львівської та Івано-Франківської областей.",
                    subtitlePadding: "Це краєвиди, історія та самобутня фольклорна культура бойків.",
                    emotionsTitleAccent: "А ще, Бойківщина це",
                    emotionsTitle: "Емоції, якими хочеться ділитися",
                    item1Translate: "Пізнайте культуру бойків через наші маршрути",
                    item2Translate: "Насолодіться місцевою кухнею",
                    item3Translate: "Познайомтесь з безліччю місць",
                    routesTitleTranslate: "Бойко Мандри — це",
                    routesSubtitleTranslate: "Три безкоштовні маршрути горами",
                    levelTranslate1: "майже легкий",
                    distanceTranslate1: "19 км",
                    heightTranslate1: "пік — 954 м",
                    route1NumTranslate: "Маршрут 1",
                    route1Translate: "До криївки в церкві",
                    route1SubtitleTranslate: "Погойдатись на карпатській гойдалці, смачно поїсти, знайти криївку в церкві і переночувати у справжніх колибах!",
                    routesButton: "Дізнатись більше",
                    levelTranslate2: "для активних",
                    distanceTranslate2: "25 км",
                    heightTranslate2: "пік — 779 м",
                    route2NumTranslate: "Маршрут 2",
                    route2Translate: "Святині і герої",
                    route2SubtitleTranslate: "Доторкнутися до історії, відчути подих сакральних перлин бойківської архітектури, зануритися у вир повстанської боротьби і вдарити у висотний дзвін пам'яті.",
                    levelTranslate3: "для найактивніших",
                    distanceTranslate3: "25 км",
                    heightTranslate3: "пік — 664 м",
                    route3NumTranslate: "Маршрут 3",
                    route3Translate: "Бойківський майдан",
                    route3SubtitleTranslate: "Історія дороги... Історія боротьби за дорогу... Історія громадянського суспільства...",
                    routesAboutTitleTranslate: "Наші маршрути",
                    routesAboutSubtitleTranslate: "Це гори, річки з кришталевою водою, свіже повітря та спів пташок. А ще неймовірно щирі і привітні люди — бойки!",
                    hireTitleTranslate: "Наша спільнота пропонує",
                    hireSubtitleTranslate: "У нас можна замовити прокат та проведення екскурсій",
                    aboutUsAccentTranslate: "Про нас",
                    aboutUsTitleTranslate: "Ми — Стрілківська спільнота",
                    aboutUsSubtitleTranslate: "Наша мета — познайомити з культурою Бойківщини та розвинути туризм у нашій місцевості. Це самобутній регіон України з унікальною історією, якою потрібно ділитись з усім світом.",
                    InstTitleTranslate: "Інстаграм",
                    footerMainTransalte: "БойкоМандри: туристичні маршрути Стрілківської громади",
                    footerPartnerTransalte: "Проєкт реалізується за підтримки Українського культурного фонду та Стрілківської сільської ради",
                    footerLawsTranslate: "Усі права захищені",
                    footerPoliticTranslate: "Політика конфіденційності",
                    footerDesignerTranslate: "Дизайнер: Барабаш Анастасія",
                    NavMain: "Головна",
                    NavRoutes: "Маршрути",
                    NavRoute1: "Маршрут 1",
                    blackLetter: "БойкоМандри:",
                    greenLetter: "зелений туризм",
                    SubHireRoutes: "Зелений туризм — це відпочинок, який дозволить насолодитися краєвидами Бойківщини, скуштувати натуральну їжу, потрапити в атмосферу, що зарядить енергією, а також більше познайомитися з місцевою культурою.",
                    Strilky: "Стрілки",
                    Tysovytsia: "Тисовиця",
                    Ploske: "Плоске",
                    Mshanets: "Мшанець",
                    text: "Зупинка",
                    subtitle1translate: "Церква Святої прп. Параскевії (Сербської)",
                    parag1Translate: "Ця тризрубна триверха церква належить до найкращих зразків сакральних споруд бойківського типу Старосамбірщини.У ній ще позначився вплив бароко у формах верхів і бань.На захід від церкви розташована дерев'яна триярусна дзвіниця ХІХ ст., всередині храму — оригінальний п’ятиярусний іконостас рядової побудови ХІХ ст.",
                    moreAboutAttractions: "Більше інформації про цю пам’ятку",
                    subtitle2translate: "Село Тисовиця",
                    parag2Translate: "Село Тисовиця засноване на сирому корені вольським правом 1558 р. Староста Петро Боратинський доручив крайнику Осташу Дашковичу осадити село, надаючи йому водночас право на парохію 17 квітня того ж року.",
                    subtitle3translate: "Вид на гору Магура",
                    parag3Translate: "Магурою у Карпатах називають гору з вершиною, що повністю вкрита лісом та має висоту 1362,7 м. Вважається, що назва походить від румунського слова, яке означає «горб, підвищення, курган».",
                    subtitle4translate: "Село Плоске та хутір Ворьовий",
                    parag4Translate: "Хутір Ворьовий (або «Під Оровим») розташований на верхівці хребта Орового у масиві Верхньодністровські Бескиди. Ймовірно, це найвисотніший хутір на Старосамбірщині. Є присілком села Плоске, яке було засноване у 1526 р.",
                    subtitle5translate: "Криївка в церкві Св. Архистратига Михаїла у селі Плоскім",
                    parag5Translate: "Найдавніша збережена письмова згадка датується 1546 р., коли королева Бона надала парохію священнику Матвію. Сучасна будівля церкви збудована у 1903 р. в неоукраїнському стилі, належить до найкращих зразків сакральних споруд бойківського типу Старосамбірщини.",
                    subtitle6translate: "Ліс «Вінець»",
                    parag6Translate: "Село Галівка, що знаходиться за лісом «Вінець», та довколишні села характерні наявністю багатьох повстанських криївок, що розміщувалися прямо в хатах.",
                    subtitle7translate: "Еко-табір «Мшанецькі Колиби»",
                    parag7Translate: "Це соціальне підприємництво релігійної громади Різдва Пресвятої Богородиці УГКЦ с. Мшанець, засноване у 2019 р. Його метою є соціальний, духовний та економічний розвиток краю шляхом створення успішних та інноваційних проєктів у сфері туризму на основі бойківських традицій та християнських цінностей.",
                }
            },
            Eng: {
                translation: {
                    routes: 'Routes',
                    services: 'Services',
                    contacts: 'Contacts',
                    howToGet: 'How to get there',
                    attractions: 'Attractions',
                    aboutUs: "About us",
                    blogAndEvents: "Blog and events",
                    menuText: "Menu",
                    titleTranslante: "Hiking and cycling in the mountains of Boykivshchyna",
                    subTitleTranslate: "Boykivshchyna is an ethnoculture that is worth getting to know in order to fall in love with it forever",
                    titleButTranslate: "Choose a route",
                    titleButInfTranslate: "By the way, they are free ;)",
                    boykuTitleAccent: "You might be interested",
                    boykuTitle: "What is Boykivshchyna?",
                    boykuSub1: "This is a region on the slopes of the Carpathians, covering areas of modern",
                    boykuSub2: "Lviv and Ivano-Frankivsk regions.",
                    subtitlePadding: "These are landscapes, history and the unique folklore culture of the Boiks.",
                    emotionsTitleAccent: "And also, this is Boykivshchyna",
                    emotionsTitle: "Emotions that you want to share",
                    item1Translate: "Get to know the culture of boyks through our routes",
                    item2Translate: "Enjoy the local cuisine",
                    item3Translate: "Get to know countless places",
                    routesTitleTranslate: "Boyko Mandry is",
                    routesSubtitleTranslate: "Three free mountain routes",
                    levelTranslate1: "almost easy",
                    distanceTranslate1: "19 km",
                    heightTranslate1: "the peak is 954 m",
                    route1NumTranslate: "Route 1",
                    route1Translate: "To the hiding place in the church",
                    route1SubtitleTranslate: "Swing on a Carpathian swing, eat delicious food, find a hiding place in a church and spend the night in real kolyby!",
                    routesButton: "Learn more",
                    levelTranslate2: "for active",
                    distanceTranslate2: "25 km",
                    heightTranslate2: "the peak is 779 m",
                    route2NumTranslate: "Route 2",
                    route2Translate: "Shrines and heroes",
                    route2SubtitleTranslate: "Touch the history, feel the breath of the sacred pearls of Boyko architecture, plunge into the whirlpool of the rebel struggle and hit the high-pitched bell of memory.",
                    levelTranslate3: "for the most active",
                    distanceTranslate3: "25 km",
                    heightTranslate3: "the peak is 664 m",
                    route3NumTranslate: "Route 3",
                    route3Translate: "Boykiv Maidan",
                    route3SubtitleTranslate: "The history of the road... The history of the struggle for the road... The history of civil society...",
                    routesAboutTitleTranslate: "Our routes",
                    routesAboutSubtitleTranslate: "These are mountains, rivers with crystal water, fresh air and singing of birds. And incredibly sincere and friendly people - boyky!",
                    hireTitleTranslate: "Our community offers",
                    hireSubtitleTranslate: "You can order rental and excursions from us",
                    aboutUsAccentTranslate: "About us",
                    aboutUsTitleTranslate: "We are the Strilkivska Community",
                    aboutUsSubtitleTranslate: "Our goal is to introduce the culture of Boykivshchyna and to develop tourism in our locality. This is a unique region of Ukraine with a unique history that needs to be shared with the whole world.",
                    InstTitleTranslate: "Instagram",
                    footerMainTransalte: "BoykoMandry: tourist routes of Strilkivska community",
                    footerPartnerTransalte: "The project is implemented with the support of the Ukrainian Cultural Foundation and the Strilkivska village council",
                    footerLawsTranslate: "All rights reserved",
                    footerPoliticTranslate: "Privacy Policy",
                    footerDesignerTranslate: "Designer: Anastasia Barabash",
                    NavMain: "Main",
                    NavRoutes: "Routes",
                    NavRoute1: "Route 1",
                    blackLetter: "BoykoMandry:",
                    greenLetter: "green tourism",
                    SubHireRoutes: "Green tourism is a vacation that will allow you to enjoy the scenery of Boykivshchyna, taste natural food, get into an energizing atmosphere, and also get to know the local culture better.",
                    Strilky: "Strilky",
                    Tysovytsia: "Tysovytsia",
                    Ploske: "Ploske",
                    Mshanets: "Mshanets",
                    text: "Station",
                    subtitle1translate: "Church of St. Paraskevi (Serbian)",
                    parag1Translate: "This three-log three-storied church belongs to the best examples of sacred structures of the Boykov type in the Staro-Sambir Region. It also has the influence of the Baroque in the forms of the upper part and baths. To the west of the church is a wooden three-tiered belfry of the XIX century, inside the church there is an original five-tiered iconostasis of ordinary construction XIX century",
                    moreAboutAttractions: "More information about this attraction",
                    subtitle2translate: "Tysovytsia village",
                    parag2Translate: "The village of Tysovytsia was founded on raw roots by the Volskyi law of 1558. The headman Petro Boratynsky instructed the villager Ostash Dashkovich to besiege the village, granting him at the same time the right to the parish on April 17 of the same year.",
                    subtitle3translate: "View of Mount Magura",
                    parag3Translate: "Magura in the Carpathians is a mountain with a peak that is completely covered with forest and has a height of 1,362.7 m. It is believed that the name comes from a Romanian word that means 'hill, elevation, mound'.",
                    subtitle4translate: "The village of Ploske and the village of Voryovy",
                    parag4Translate: "The village of Vorovy (or 'Under Orovy') is located on the top of the Orovy ridge in the massif of Verkhnyodnistrovski Beskydy. It is probably the highest village in the Starosambir Region. It is a hamlet of the village of Ploske, which was founded in 1526.",
                    subtitle5translate: "A hiding place in the church of St. Archangel Michael in the village of Ploskomo",
                    parag5Translate: "The oldest surviving written reference dates back to 1546, when Queen Bona granted the parish to priest Matvii. The modern church building was built in 1903 in the neo-Ukrainian style and belongs to the best examples of sacred buildings of the Boykiv type in the Starosambir Region.",
                    subtitle6translate: "Vinets Forest",
                    parag6Translate: "The village of Halivka, which is located behind the 'Vinets' forest, and the surrounding villages are characterized by the presence of many rebel hideouts, which were located right in the houses.",
                    subtitle7translate: "Eco-camp 'Mshanetski Kolyby'",
                    parag7Translate: "This is a social enterprise of the religious community of the Nativity of the Holy Mother of God UGCC village. Mshanets, founded in 2019. Its goal is the social, spiritual and economic development of the region by creating successful and innovative projects in the field of tourism based on Boyko traditions and Christian values.",
                }
            },
            Pol: {
                translation: {
                    routes: 'Trasy',
                    services: 'Usługi',
                    contacts: 'Łączność',
                    howToGet: 'Jak się tam dostać',
                    attractions: 'Wdzięki kobiece',
                    aboutUs: "O nas",
                    blogAndEvents: "Blog i wydarzenia",
                    menuText: "Menu",
                    titleTranslante: "Piesze i rowerowe wycieczki po górach Bojkowszczyzny",
                    subTitleTranslate: "Bojkowszczyzna to etnokultura, którą warto poznać, aby zakochać się w niej na zawsze",
                    titleButTranslate: "Wybierz trasę",
                    titleButInfTranslate: "Swoją drogą, są darmowe ;)",
                    boykuTitleAccent: "Możesz być zainteresowany",
                    boykuTitle: "Co to jest Bojkowszczyna?",
                    boykuSub1: "Jest to region na zboczach Karpat, obejmujący tereny współczesne",
                    boykuSub2: "Obwód lwowski i iwanofrankowski.",
                    subtitlePadding: "Są to krajobrazy, historia i wyjątkowa kultura ludowa Boików.",
                    emotionsTitleAccent: "A to także Bojkowszczyzna",
                    emotionsTitle: "Emocje, którymi chcesz się podzielić",
                    item1Translate: "Poznaj kulturę bojkow naszymi trasami",
                    item2Translate: "Ciesz się lokalną kuchnią",
                    item3Translate: "Poznaj niezliczone miejsca",
                    routesTitleTranslate: "Bojko Mandra jest",
                    routesSubtitleTranslate: "Trzy bezpłatne trasy górskie",
                    levelTranslate1: "prawie łatwe",
                    distanceTranslate1: "19 km",
                    heightTranslate1: "szczyt wynosi 954 m",
                    route1NumTranslate: "Trasa 1",
                    route1Translate: "Do skrytki w kościele",
                    route1SubtitleTranslate: "Huśtaj się na karpackiej huśtawce, jedz pyszne jedzenie, znajdź kryjówkę w kościele i przenocuj w prawdziwych kolyby!",
                    routesButton: "Ucz się więcej",
                    levelTranslate2: "dla aktywnych",
                    distanceTranslate2: "25 km",
                    heightTranslate2: "szczyt wynosi 779 m",
                    route2NumTranslate: "Trasa 2",
                    route2Translate: "Sanktuaria i bohaterowie",
                    route2SubtitleTranslate: "Dotknij historii, poczuj oddech świętych pereł bojkowskiej architektury, zanurz się w wir walki rebeliantów i uderz w wysoki dzwon pamięci.",
                    levelTranslate3: "dla najbardziej aktywnych",
                    distanceTranslate3: "25 km",
                    heightTranslate3: "szczyt wynosi 664 m",
                    route3NumTranslate: "Trasa 3",
                    route3Translate: "Bojkowski Majdan",
                    route3SubtitleTranslate: "Historia drogi... Historia walki o drogę... Historia społeczeństwa obywatelskiego...",
                    routesAboutTitleTranslate: "Nasze trasy",
                    routesAboutSubtitleTranslate: "To góry, rzeki z krystaliczną wodą, świeże powietrze i śpiew ptaków. I niesamowicie szczerzy i życzliwi ludzie - bojky!",
                    hireTitleTranslate: "Nasza społeczność oferuje",
                    hireSubtitleTranslate: "Możesz zamówić u nas wynajem i wycieczki",
                    aboutUsAccentTranslate: "O nas",
                    aboutUsTitleTranslate: "Jesteśmy społecznością strzelkiwska",
                    aboutUsSubtitleTranslate: "Naszym celem jest przybliżenie kultury Bojkowszczyzny oraz rozwój turystyki w naszej miejscowości. To wyjątkowy region Ukrainy z wyjątkową historią, którą należy podzielić się z całym światem.",
                    InstTitleTranslate: "Instagrama",
                    footerMainTransalte: "BojkoMandry: szlaki turystyczne Strilkivskiej gromady",
                    footerPartnerTransalte: "Projekt realizowany jest przy wsparciu Ukraińskiej Fundacji Kulturalnej i Rady Sołeckiej Strilkivskiej",
                    footerLawsTranslate: "Wszelkie prawa zastrzeżone",
                    footerPoliticTranslate: "Polityka prywatności",
                    footerDesignerTranslate: "Projektant: Anastazja Barabasz",
                    NavMain: "Główny",
                    NavRoutes: "Trasy",
                    NavRoute1: "Trasa 1",
                    blackLetter: "BojkoMandry:",
                    greenLetter: "zielona turystyka",
                    SubHireRoutes: "Zielona turystyka to wypoczynek, który pozwoli Państwu nacieszyć się scenerią Bojkowszczyzny, skosztować naturalnego jedzenia, wejść w energetyzującą atmosferę, a także lepiej poznać lokalną kulturę.",
                    Strilky: "Strzałki",
                    Tysovytsia: "Tysowica",
                    Ploske: "Płaski",
                    Mshanets: "Mszanet",
                    text: "Przystanek",
                    subtitle1translate: "Kościół św. Paraskevi (serbski)",
                    parag1Translate: "Ten trójzrębowy, trójkondygnacyjny kościół należy do najlepszych przykładów obiektów sakralnych typu bojkowskiego na Ziemi Staro-Sambirskiej, posiada także wpływy baroku w postaci górnej części i łaźni. w kościele znajduje się drewniana trójkondygnacyjna dzwonnica z XIX w., wewnątrz kościoła znajduje się oryginalny pięciopoziomowy ikonostas zwykłej konstrukcji XIX w.",
                    moreAboutAttractions: "Więcej informacji o tej atrakcji",
                    subtitle2translate: "Wieś Tysowica",
                    parag2Translate: "Wieś Tysowica została założona na surowych korzeniach na prawie wołskim z 1558 r. Sołtys Petro Boratyński polecił wieśniakowi Ostaszowi Daszkowiczowi oblegać wieś, nadając mu jednocześnie prawo do parafii 17 kwietnia tego samego roku.",
                    subtitle3translate: "Widok na Magurę",
                    parag3Translate: "Magura w Karpatach to góra, której szczyt jest całkowicie pokryty lasem i ma wysokość 1362,7 m. Uważa się, że nazwa pochodzi od rumuńskiego słowa oznaczającego 'wzgórze, wzniesienie, kopiec'.",
                    subtitle4translate: "Wieś Ploske i wieś Woryowce",
                    parag4Translate: "Wieś Worovy (lub 'Pod Orowymi') położona jest na szczycie grzbietu Orovy w masywie Beskidu Wierchniodnistrowskiego. Jest to prawdopodobnie najwyżej położona wieś w regionie Starosambir. Jest to przysiółek wsi Ploske, która została założona w 1526 roku.",
                    subtitle5translate: "Skrytka w kościele św. Archanioła Michała we wsi Ploskomo",
                    parag5Translate: "Najstarsza zachowana wzmianka pisemna pochodzi z 1546 roku, kiedy to królowa Bona nadała parafię księdzu Maciejowi. Nowoczesna budowla sakralna została wzniesiona w 1903 roku w stylu neoukraińskim i należy do najlepszych przykładów obiektów sakralnych typu bojkowskiego na Ziemi Starosambirskiej.",
                    subtitle6translate: "Las 'Winiec'",
                    parag6Translate: "Wieś Halówka, położona za lasem 'Winiec', i okoliczne wsie charakteryzują się obecnością wielu kryjówek rebeliantów, które znajdowały się bezpośrednio w domach.",
                    subtitle7translate: "Eko Obóz 'Mszaniecki Kołyby'",
                    parag7Translate: "Jest to przedsięwzięcie społeczne wspólnoty wyznaniowej wsi Narodzenia Najświętszej Maryi Panny UGCC. Mshanets, założona w 2019 roku. Jej celem jest rozwój społeczny, duchowy i gospodarczy regionu poprzez tworzenie udanych i innowacyjnych projektów w dziedzinie turystyki w oparciu o bojkowskie tradycje i wartości chrześcijańskie.",
                }
            }
        }
    });

    // Check whether to update data
    if (shouldUpdateData()) {
        updateContent();
        clearLocalStorage();
    } else {
        // Set the selected language on page load
        updateContent();
        updateSelectTrigger();
    }

    function changeLanguage(language) {
        i18next.changeLanguage(language, function (err, t) {
            updateContent();
            updateSelectTrigger();
        });
    }

    function updateContent() {
        var routeElements = document.querySelectorAll('.routes');
        routeElements.forEach(function (route) {
            route.textContent = i18next.t('routes');
        });

        var serviceElements = document.querySelectorAll('.services');
        serviceElements.forEach(function (service) {
            service.textContent = i18next.t('services');
        });

        var contactElements = document.querySelectorAll('.contacts');
        contactElements.forEach(function (contact) {
            contact.textContent = i18next.t('contacts');
        });

        var howToGetElements = document.querySelectorAll('.howToGet');
        howToGetElements.forEach(function (howToGet) {
            howToGet.textContent = i18next.t('howToGet');
        });

        var attractionElements = document.querySelectorAll('.attractions');
        attractionElements.forEach(function (attraction) {
            attraction.textContent = i18next.t('attractions');
        });

        var aboutUsElements = document.querySelectorAll('.aboutUs');
        aboutUsElements.forEach(function (aboutUs) {
            aboutUs.textContent = i18next.t('aboutUs');
        });

        var blogAndEventElements = document.querySelectorAll('.blogAndEvents');
        blogAndEventElements.forEach(function (blogAndEvent) {
            blogAndEvent.textContent = i18next.t('blogAndEvents');
        });

        var routesButtonElements = document.querySelectorAll('.routesButton');
        routesButtonElements.forEach(function (routesButton) {
            routesButton.textContent = i18next.t('routesButton');
        });

        var routesTitleTranslateElement = document.querySelectorAll('.routesTitleTranslate');
        routesTitleTranslateElement.forEach(function (routesTitleTranslate) {
            routesTitleTranslate.textContent = i18next.t('routesTitleTranslate');
        });

        var routesSubtitleTranslateElement = document.querySelectorAll('.routesSubtitleTranslate');
        routesSubtitleTranslateElement.forEach(function (routesSubtitleTranslate) {
            routesSubtitleTranslate.textContent = i18next.t('routesSubtitleTranslate');
        });

        var menuElement = document.querySelectorAll('.menuText');
        menuElement.forEach(function (menuText) {
            menuText.textContent = i18next.t('menuText');
        });

        var levelTranslate1Element = document.querySelectorAll('.levelTranslate1');
        levelTranslate1Element.forEach(function (levelTranslate1) {
            levelTranslate1.textContent = i18next.t('levelTranslate1');
        });

        var distanceTranslate1Element = document.querySelectorAll('.distanceTranslate1');
        distanceTranslate1Element.forEach(function (distanceTranslate1) {
            distanceTranslate1.textContent = i18next.t('distanceTranslate1');
        });

        var heightTranslate1Element = document.querySelectorAll('.heightTranslate1');
        heightTranslate1Element.forEach(function (heightTranslate1) {
            heightTranslate1.textContent = i18next.t('heightTranslate1');
        });

        var route1NumTranslateElement = document.querySelectorAll('.route1NumTranslate');
        route1NumTranslateElement.forEach(function (route1NumTranslate) {
            route1NumTranslate.textContent = i18next.t('route1NumTranslate');
        });

        var route1TranslateElement = document.querySelectorAll('.route1Translate');
        route1TranslateElement.forEach(function (route1Translate) {
            route1Translate.textContent = i18next.t('route1Translate');
        });

        var route1SubtitleTranslateElement = document.querySelectorAll('.route1SubtitleTranslate');
        route1SubtitleTranslateElement.forEach(function (route1SubtitleTranslate) {
            route1SubtitleTranslate.textContent = i18next.t('route1SubtitleTranslate');
        });

        var levelTranslate2Element = document.querySelectorAll('.levelTranslate2');
        levelTranslate2Element.forEach(function (levelTranslate2) {
            levelTranslate2.textContent = i18next.t('levelTranslate2');
        });

        var distanceTranslate2Element = document.querySelectorAll('.distanceTranslate2');
        distanceTranslate2Element.forEach(function (distanceTranslate2) {
            distanceTranslate2.textContent = i18next.t('distanceTranslate2');
        });

        var heightTranslate2Element = document.querySelectorAll('.heightTranslate2');
        heightTranslate2Element.forEach(function (heightTranslate2) {
            heightTranslate2.textContent = i18next.t('heightTranslate2');
        });

        var route2NumTranslateElement = document.querySelectorAll('.route2NumTranslate');
        route2NumTranslateElement.forEach(function (route2NumTranslate) {
            route2NumTranslate.textContent = i18next.t('route2NumTranslate');
        });

        var route2TranslateElement = document.querySelectorAll('.route2Translate');
        route2TranslateElement.forEach(function (route2Translate) {
            route2Translate.textContent = i18next.t('route2Translate');
        });

        var route2SubtitleTranslateElement = document.querySelectorAll('.route2SubtitleTranslate');
        route2SubtitleTranslateElement.forEach(function (route2SubtitleTranslate) {
            route2SubtitleTranslate.textContent = i18next.t('route2SubtitleTranslate');
        });

        var levelTranslate3Element = document.querySelectorAll('.levelTranslate3');
        levelTranslate3Element.forEach(function (levelTranslate3) {
            levelTranslate3.textContent = i18next.t('levelTranslate3');
        });

        var distanceTranslate3Element = document.querySelectorAll('.distanceTranslate3');
        distanceTranslate3Element.forEach(function (distanceTranslate3) {
            distanceTranslate3.textContent = i18next.t('distanceTranslate3');
        });

        var heightTranslate3Element = document.querySelectorAll('.heightTranslate3');
        heightTranslate3Element.forEach(function (heightTranslate3) {
            heightTranslate3.textContent = i18next.t('heightTranslate3');
        });

        var route3NumTranslateElement = document.querySelectorAll('.route3NumTranslate');
        route3NumTranslateElement.forEach(function (route3NumTranslate) {
            route3NumTranslate.textContent = i18next.t('route3NumTranslate');
        });

        var route3TranslateElement = document.querySelectorAll('.route3Translate');
        route3TranslateElement.forEach(function (route3Translate) {
            route3Translate.textContent = i18next.t('route3Translate');
        });

        var route3SubtitleTranslateElement = document.querySelectorAll('.route3SubtitleTranslate');
        route3SubtitleTranslateElement.forEach(function (route3SubtitleTranslate) {
            route3SubtitleTranslate.textContent = i18next.t('route3SubtitleTranslate');
        });

        var footerMainTransalteElement = document.querySelectorAll('.footerMainTransalte');
        footerMainTransalteElement.forEach(function (footerMainTransalte) {
            footerMainTransalte.textContent = i18next.t('footerMainTransalte');
        });

        var footerPartnerTransalteElement = document.querySelectorAll('.footerPartnerTransalte');
        footerPartnerTransalteElement.forEach(function (footerPartnerTransalte) {
            footerPartnerTransalte.textContent = i18next.t('footerPartnerTransalte');
        });

        var footerLawsTranslateElement = document.querySelectorAll('.footerLawsTranslate');
        footerLawsTranslateElement.forEach(function (footerLawsTranslate) {
            footerLawsTranslate.textContent = i18next.t('footerLawsTranslate');
        });

        var footerPoliticTranslateElement = document.querySelectorAll('.footerPoliticTranslate');
        footerPoliticTranslateElement.forEach(function (footerPoliticTranslate) {
            footerPoliticTranslate.textContent = i18next.t('footerPoliticTranslate');
        });

        var footerDesignerTranslateElement = document.querySelectorAll('.footerDesignerTranslate');
        footerDesignerTranslateElement.forEach(function (footerDesignerTranslate) {
            footerDesignerTranslate.textContent = i18next.t('footerDesignerTranslate');
        });

        var NavMainElement = document.querySelectorAll('.NavMain');
        NavMainElement.forEach(function (NavMain) {
            NavMain.textContent = i18next.t('NavMain');
        });

        var NavRoutesElement = document.querySelectorAll('.NavRoutes');
        NavRoutesElement.forEach(function (NavRoutes) {
            NavRoutes.textContent = i18next.t('NavRoutes');
        });

        var NavRoute1Element = document.querySelectorAll('.NavRoute1');
        NavRoute1Element.forEach(function (NavRoute1) {
            NavRoute1.textContent = i18next.t('NavRoute1');
        });

        var blackLetterElement = document.querySelectorAll('.blackLetter');
        blackLetterElement.forEach(function (blackLetter) {
            blackLetter.textContent = i18next.t('blackLetter');
        });

        var greenLetterElement = document.querySelectorAll('.greenLetter');
        greenLetterElement.forEach(function (greenLetter) {
            greenLetter.textContent = i18next.t('greenLetter');
        });

        var SubHireRoutesElement = document.querySelectorAll('.SubHireRoutes');
        SubHireRoutesElement.forEach(function (SubHireRoutes) {
            SubHireRoutes.textContent = i18next.t('SubHireRoutes');
        });

        var hireTitleTranslateElement = document.querySelectorAll('.hireTitleTranslate');
        hireTitleTranslateElement.forEach(function (hireTitleTranslate) {
            hireTitleTranslate.textContent = i18next.t('hireTitleTranslate');
        });

        var hireSubtitleTranslateElement = document.querySelectorAll('.hireSubtitleTranslate');
        hireSubtitleTranslateElement.forEach(function (hireSubtitleTranslate) {
            hireSubtitleTranslate.textContent = i18next.t('hireSubtitleTranslate');
        });

        var StrilkyElement = document.querySelectorAll('.Strilky');
        StrilkyElement.forEach(function (Strilky) {
            Strilky.textContent = i18next.t('Strilky');
        });

        var TysovytsiaElement = document.querySelectorAll('.Tysovytsia');
        TysovytsiaElement.forEach(function (Tysovytsia) {
            Tysovytsia.textContent = i18next.t('Tysovytsia');
        });

        var PloskeElement = document.querySelectorAll('.Ploske');
        PloskeElement.forEach(function (Ploske) {
            Ploske.textContent = i18next.t('Ploske');
        });

        var MshanetsElement = document.querySelectorAll('.Mshanets');
        MshanetsElement.forEach(function (Mshanets) {
            Mshanets.textContent = i18next.t('Mshanets');
        });

        var textElement = document.querySelectorAll('.text');
        textElement.forEach(function (text) {
            text.textContent = i18next.t('text');
        });

        var subtitle1translateElement = document.querySelectorAll('.subtitle1translate');
        subtitle1translateElement.forEach(function (subtitle1translate) {
            subtitle1translate.textContent = i18next.t('subtitle1translate');
        });

        var parag1TranslateElement = document.querySelectorAll('.parag1Translate');
        parag1TranslateElement.forEach(function (parag1Translate) {
            parag1Translate.textContent = i18next.t('parag1Translate');
        });

        var moreAboutAttractionsElement = document.querySelectorAll('.moreAboutAttractions');
        moreAboutAttractionsElement.forEach(function (moreAboutAttractions) {
            moreAboutAttractions.textContent = i18next.t('moreAboutAttractions');
        });

        var subtitle2translateElement = document.querySelectorAll('.subtitle2translate');
        subtitle2translateElement.forEach(function (subtitle2translate) {
            subtitle2translate.textContent = i18next.t('subtitle2translate');
        });

        var parag2TranslateElement = document.querySelectorAll('.parag2Translate');
        parag2TranslateElement.forEach(function (parag2Translate) {
            parag2Translate.textContent = i18next.t('parag2Translate');
        });

        var subtitle3translateElement = document.querySelectorAll('.subtitle3translate');
        subtitle3translateElement.forEach(function (subtitle3translate) {
            subtitle3translate.textContent = i18next.t('subtitle3translate');
        });

        var parag3TranslateElement = document.querySelectorAll('.parag3Translate');
        parag3TranslateElement.forEach(function (parag3Translate) {
            parag3Translate.textContent = i18next.t('parag3Translate');
        });

        var subtitle4translateElement = document.querySelectorAll('.subtitle4translate');
        subtitle4translateElement.forEach(function (subtitle4translate) {
            subtitle4translate.textContent = i18next.t('subtitle4translate');
        });

        var parag4TranslateElement = document.querySelectorAll('.parag4Translate');
        parag4TranslateElement.forEach(function (parag4Translate) {
            parag4Translate.textContent = i18next.t('parag4Translate');
        });

        var subtitle5translateElement = document.querySelectorAll('.subtitle5translate');
        subtitle5translateElement.forEach(function (subtitle5translate) {
            subtitle5translate.textContent = i18next.t('subtitle5translate');
        });

        var parag5TranslateElement = document.querySelectorAll('.parag5Translate');
        parag5TranslateElement.forEach(function (parag5Translate) {
            parag5Translate.textContent = i18next.t('parag5Translate');
        });

        var subtitle6translateElement = document.querySelectorAll('.subtitle6translate');
        subtitle6translateElement.forEach(function (subtitle6translate) {
            subtitle6translate.textContent = i18next.t('subtitle6translate');
        });

        var parag6TranslateElement = document.querySelectorAll('.parag6Translate');
        parag6TranslateElement.forEach(function (parag6Translate) {
            parag6Translate.textContent = i18next.t('parag6Translate');
        });

        var subtitle7translateElement = document.querySelectorAll('.subtitle7translate');
        subtitle7translateElement.forEach(function (subtitle7translate) {
            subtitle7translate.textContent = i18next.t('subtitle7translate');
        });

        var parag7TranslateElement = document.querySelectorAll('.parag7Translate');
        parag7TranslateElement.forEach(function (parag7Translate) {
            parag7Translate.textContent = i18next.t('parag7Translate');
        });

        var titleTranslanteElement = document.querySelector('.titleTranslante');
        titleTranslanteElement.textContent = i18next.t('titleTranslante');

        var subTitleTranslateElement = document.querySelector('.subTitleTranslate');
        subTitleTranslateElement.textContent = i18next.t('subTitleTranslate');

        var titleButTranslateElement = document.querySelector('.titleButTranslate');
        titleButTranslateElement.textContent = i18next.t('titleButTranslate');

        var titleButInfTranslateElement = document.querySelector('.titleButInfTranslate');
        titleButInfTranslateElement.textContent = i18next.t('titleButInfTranslate');

        var boykuTitleAccentElement = document.querySelector('.boykuTitleAccent');
        boykuTitleAccentElement.textContent = i18next.t('boykuTitleAccent');

        var boykuTitleElement = document.querySelector('.boykuTitle');
        boykuTitleElement.textContent = i18next.t('boykuTitle');

        var boykuSub1Element = document.querySelector('.boykuSub1');
        boykuSub1Element.textContent = i18next.t('boykuSub1');

        var boykuSub2Element = document.querySelector('.boykuSub2');
        boykuSub2Element.textContent = i18next.t('boykuSub2');

        var subtitlePaddingElement = document.querySelector('.subtitlePadding');
        subtitlePaddingElement.textContent = i18next.t('subtitlePadding');

        var emotionsTitleAccentElement = document.querySelector('.emotionsTitleAccent');
        emotionsTitleAccentElement.textContent = i18next.t('emotionsTitleAccent');

        var emotionsTitleElement = document.querySelector('.emotionsTitle');
        emotionsTitleElement.textContent = i18next.t('emotionsTitle');

        var item1TranslateElement = document.getElementById('item1Translate');
        item1TranslateElement.textContent = i18next.t('item1Translate');

        var item2TranslateElement = document.querySelector('.item2Translate');
        item2TranslateElement.textContent = i18next.t('item2Translate');

        var item3TranslateElement = document.querySelector('.item3Translate');
        item3TranslateElement.textContent = i18next.t('item3Translate');

        var routesAboutTitleTranslateElement = document.getElementById('routesAboutTitleTranslate');
        routesAboutTitleTranslateElement.textContent = i18next.t('routesAboutTitleTranslate');

        var routesAboutSubtitleTranslateElement = document.getElementById('routesAboutSubtitleTranslate');
        routesAboutSubtitleTranslateElement.textContent = i18next.t('routesAboutSubtitleTranslate');

        var aboutUsAccentTranslateElement = document.getElementById('aboutUsAccentTranslate');
        aboutUsAccentTranslateElement.textContent = i18next.t('aboutUsAccentTranslate');

        var aboutUsTitleTranslateElement = document.getElementById('aboutUsTitleTranslate');
        aboutUsTitleTranslateElement.textContent = i18next.t('aboutUsTitleTranslate');

        var aboutUsSubtitleTranslateElement = document.getElementById('aboutUsSubtitleTranslate');
        aboutUsSubtitleTranslateElement.textContent = i18next.t('aboutUsSubtitleTranslate');

        var InstTitleTranslateElement = document.getElementById('InstTitleTranslate');
        InstTitleTranslateElement.textContent = i18next.t('InstTitleTranslate');
    }

    function updateSelectTrigger() {
        var selectTriggers = document.querySelectorAll('.select-trigger');
        selectTriggers.forEach(function (trigger) {
            trigger.textContent = i18next.t(getSavedLanguage() || 'Ua');
        });
    }

    function saveLanguage(language) {
        localStorage.setItem('selectedLanguage', language);
    }

    function getSavedLanguage() {
        return localStorage.getItem('selectedLanguage');
    }

    function shouldUpdateData() {
        var lastUpdate = localStorage.getItem('lastUpdate');
        if (!lastUpdate) {
            return true;
        }
        var currentTime = new Date().getTime();
        var timeDiff = currentTime - lastUpdate;
        var hoursSinceLastUpdate = timeDiff / (1000 * 60 * 60);
        return hoursSinceLastUpdate > 24;
    }

    function clearLocalStorage() {
        localStorage.clear();
        localStorage.setItem('lastUpdate', new Date().getTime());
    }
});
