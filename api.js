// kukivasik API 2024, sigma moment. you can copy this API, if you want.
const DataJSON1 = {
    "game-input": "string",
    "game-name": "string",
    "game-publisher": "string",
    "game-published": "string",
    "game-updated": "string",
    "game-year":"number",
    "game-category":"string",
    "game-creator":"string",
    //"game-description": "string",
    //"game-thumbnail-url": "string",
    "game-genre":"string",
    "game-version":"number",
    "game-downloadable": "boolean",
    "game-download-link": "string",
    //"game-on-steam": "boolean",
    //"game-steam-link": "string",
    "game-tags": "string",
    //"game-languages": "string",
    "game-requirements" :{
        "game-supported-os": "string",
        "game-ram": "string",
        "game-processor": "string",
        "game-graphics": "string",
        "game-storage": "string",
    },
    "games-like-that": {},
};

const DataJSON2 = {
    "game-input": "string",
    "games-count": "number",
    "games": {

    },
};

    async function api() {
    var regex = /[a-zA-Zа-яА-Я0-9]/;
    if (regex.test(window.location.hash.slice(1))) {
        try {
            var universalButton = document.getElementById('universalButton')
            universalButton.addEventListener('mouseout', function() {
                if (universalButton.style.visibility == "visible") {
                universalButton.style.cursor = "none";
                }
            });
            universalButton.addEventListener('mouseover', function() {
                if (universalButton.style.visibility == "visible") {
                    universalButton.style.cursor = "pointer";
                    }
            });
            const copyButton = document.getElementById('copyButton')
            void copyButton.offsetWidth;
            copyButton.style.animationDuration = "2s"
            copyButton.style.animationIterationCount = "infinite"
            copyButton.style.animationName = "loading"
            const Target = 'https://thelastgame.ru/' + decodeURIComponent(window.location.hash.slice(1)).replace(/ /g, '-') + '/'
            console.log(Target)
            const Proxy = 'https://api.allorigins.win/get?url=';
            const Link = Proxy + encodeURIComponent(Target);
            const response = await fetch(Link);
            const data = await response.json();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const pre = document.querySelector('pre')
                const pStrongElement = doc.querySelector('strong > a');
                if (pStrongElement) {
                var h1Elements = doc.getElementsByTagName('h1');
                var regex = /\b404\b/;
                for (var i = 0; i < h1Elements.length; i++) {
                    var h1Text = h1Elements[i].textContent;
                    if (regex.test(h1Text)) {
                        const copyButton = document.getElementById('copyButton');
                        copyButton.style.animationDuration = "1s"
                        copyButton.style.animationIterationCount = "1"
                        copyButton.style.animationName = 'none'
                        void copyButton.offsetWidth;
                        copyButton.style.animationName = "red-notification"
                        const Errors = {
                            "error":"error",
                            "error-code":"erorr-code",
                        }
                        Errors["error-code"] = "404"
                        Errors.error = "по запросу " + decodeURIComponent(window.location.hash.slice(1)) + ", ничего не было найдено."
                        pre.textContent = JSON.stringify(Errors, null, 2);
                        break;
                    }
                }
                        const strongElement1 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Год выпуска:'));
                        const strongElement2 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Разработчик'));
                        const strongElement3 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Версия:'));
                        const strongElement4 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Язык интерфейса:'));
                        const strongElement5 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Операционная система:'));
                        const strongElement6 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Процессор:'));
                        const strongElement7 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Оперативная память:'));
                        const strongElement8 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Видеокарта:'));
                        const strongElement9 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Памяти на Жестком Диске:'));
                        const strongElement10 = Array.from(doc.querySelectorAll('strong'))
                        .find(el => el.textContent.includes('Жанр:'));
                        var entryInnerElement = doc.querySelector('.entry-inner');
                        if (entryInnerElement !== null) {
                            var pElements = entryInnerElement.querySelectorAll('p');
                            for (var i = 0; i < pElements.length; i++) {
                                var strongText = pElements[i].querySelector('strong');
                                var aText = pElements[i].querySelector('a')
                                if (strongText !== null) {
                                    DataJSON1["game-name"] = strongText.textContent
                                }
                                if (aText !== null) {
                                    var iconLink = document.createElement('link');
                                    iconLink.rel = 'icon';
                                    iconLink.type = 'image/x-icon';
                                    iconLink.href = aText.href;
                                    document.head.appendChild(iconLink);
                                }
                            }
                        }
                        DataJSON1["game-published"] = doc.querySelector('time.published').textContent;
                        DataJSON1["game-updated"] = doc.querySelector('time.updated').textContent;
                        DataJSON1["game-publisher"] = doc.querySelector('[rel="author"]').textContent;
                        DataJSON1["game-year"] = strongElement1 ? strongElement1.nextSibling.textContent.trim() : '';
                        DataJSON1["game-creator"] = strongElement2 ? strongElement2.nextSibling.textContent.trim() : '';
                        DataJSON1["game-version"] = strongElement3 ? strongElement3.nextSibling.textContent.trim() : '';
                        DataJSON1["game-genre"] = strongElement10 ? strongElement10.nextSibling.textContent.trim() : '';
                        DataJSON1["game-requirements"]["game-processor"] = strongElement6 ? strongElement6.nextSibling.textContent.trim() : '';
                        DataJSON1["game-requirements"]["game-ram"] = strongElement7 ? strongElement7.nextSibling.textContent.trim() : '';
                        DataJSON1["game-requirements"]["game-storage"] = strongElement9 ? strongElement9.nextSibling.textContent.trim() : '';
                        DataJSON1["game-requirements"]["game-supported-os"] = strongElement5 ? strongElement5.nextSibling.textContent.trim() : '';
                        DataJSON1["game-requirements"]["game-graphics"] = strongElement8 ? strongElement8.nextSibling.textContent.trim() : '';
                        DataJSON1["game-input"] = decodeURIComponent(window.location.hash.slice(1))
                        if (doc.querySelector('a.btn_green')) {
                            DataJSON1["game-downloadable"] = "true"
                            DataJSON1["game-download-link"] = doc.querySelector('a.btn_green').href
                        } else {
                            DataJSON1["game-downloadable"] = "false"
                            DataJSON1["game-download-link"] = "no"
                        }
                        var tagLinks = doc.querySelectorAll('a[rel="tag"]');
                        var tags = [];
                        tagLinks.forEach(function(link, index) {
                            tags.push(link.textContent.trim());
                        });
                        var combinedTags = tags.join(', ');
                        DataJSON1["game-tags"]= combinedTags
                        var ctagLinks = doc.querySelectorAll('a[rel="category tag"]');
                        var ctags = [];
                        ctagLinks.forEach(function(link, index) {
                            ctags.push(link.textContent.trim());
                        });
                        var ccombinedTags = tags.join(', ');
                        DataJSON1["game-category"]= ccombinedTags
                        universalButton.style.visibility = "visible";
                        universalButton.style.position = "relative";
                        universalButton.style.top = "0%";
                        universalButton.textContent = 'Download'
                        universalButton.addEventListener('mousedown', function() {
                            var link = document.createElement('a');
                            link.href = DataJSON1["game-download-link"];
                            link.click();
                            link.remove();
                        })
                        var postTitleElements = doc.querySelectorAll('.post-title.entry-title');

                        // Перебираем найденные элементы
                        postTitleElements.forEach(function(element, index) {
                            // Находим элемент <a> внутри текущего элемента
                            var aElement = element.querySelector('a');
                            
                            // Проверяем, существует ли элемент <a>
                            if (aElement !== null) {
                                // Получаем текстовое содержимое элемента <a>
                                var textContent = aElement.textContent.trim();
                                
                                // Добавляем текстовое содержимое элемента <a> в объект Data
                                DataJSON1["games-like-that"]['game' + index] = textContent;
                            }
                        });

                        void copyButton.offsetWidth;
                        copyButton.style.animationDuration = "1s"
                        copyButton.style.animationIterationCount = "1"
                        copyButton.style.animationName = 'none'
                        pre.textContent = JSON.stringify(DataJSON1, null, 2);
                    }
            } catch (error) {
                const copyButton = document.getElementById('copyButton');
                copyButton.style.animationDuration = "1s"
                copyButton.style.animationIterationCount = "1"
                copyButton.style.animationName = 'none'
                void copyButton.offsetWidth;
                copyButton.style.animationName = "red-notification"
                Cooldown = false
                buttonCan = true
                console.log('Error: ', error)
            }
    } else {
        const copyButton = document.getElementById('copyButton');
        copyButton.style.animationDuration = "1s"
        copyButton.style.animationIterationCount = "1"
        copyButton.style.animationName = 'none'
        void copyButton.offsetWidth;
        copyButton.style.animationName = "red-notification"
        Cooldown = false
        buttonCan = true
        console.log('Error: ', 'hash not finded, hash is empty')
    }
    }


    async function apisearch(Text) {
        console.log(Text)
        const Target = 'https://thelastgame.ru/?s=' + Text;
        const Proxy = 'https://api.allorigins.win/get?url=';
        const Link = Proxy + encodeURIComponent(Target);
        try {
            const response = await fetch(Link);
            const data = await response.json();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const h2Elements = doc.querySelectorAll('h2.post-title.entry-title');
            const h2Element = doc.querySelector('h2.post-title.entry-title');
            if (h2Element) {
                h2Elements.forEach(h2 => {
                    const link = h2.querySelector('a');
                    if (link) {
                        DataJSON2["games-count"]= h2Elements.length
                        DataJSON2["game-input"]= Text
                        DataJSON2["games"] = {}
                        games = {}
                        h2Elements.forEach((element, index) => {
                            const gameName = 'game' + (index + 1);
                            games['game' + (index + 1)] = element.textContent.trim();
                            element.classList.add(gameName);
                        });
                        DataJSON2["games"] = games
                        const copyButton = document.getElementById('copyButton');
                        document.querySelector('pre').textContent = JSON.stringify(DataJSON2, null, 2);
                        copyButton.textContent = 'Copy'
                        void copyButton.offsetWidth;
                        copyButton.style.animationDuration = "1s"
                        copyButton.style.animationIterationCount = "1"
                        copyButton.style.animationName = 'none'
                        ButtonSet = 2
                        Cooldown = false
                        buttonCan = true
                        return
                    } else {
                        const copyButton = document.getElementById('copyButton');
                        copyButton.style.animationDuration = "1s"
                        copyButton.style.animationIterationCount = "1"
                        copyButton.style.animationName = 'none'
                        void copyButton.offsetWidth;
                        copyButton.style.animationName = "red-notification"
                        Cooldown = false
                        buttonCan = true
                    }
                });
            } else {
                const pStrongElement = doc.querySelector('strong > a');
                if (pStrongElement) {
                    const pElement = pStrongElement.parentNode;
                    DataJSON2["games-count"]= 1
                    DataJSON2["game-input"]= Text
                    DataJSON2["games"] = pElement.textContent
                    const copyButton = document.querySelector('copyButton') 
                    document.querySelector('pre').textContent = JSON.stringify(DataJSON2, null, 2);
                    copyButton.textContent = 'Copy'
                    void copyButton.offsetWidth;
                    copyButton.style.animationDuration = "1s"
                    copyButton.style.animationIterationCount = "1"
                    copyButton.style.animationName = 'none'
                    ButtonSet = 2
                    Cooldown = false
                    buttonCan = true
                } else {
                    const copyButton = document.querySelector('copyButton')
                    copyButton.textContent = 'Copy'
                    copyButton.style.animationDuration = "1s"
                    copyButton.style.animationIterationCount = "1"
                    copyButton.style.animationName = 'none'
                    void copyButton.offsetWidth;
                    copyButton.style.animationName = "red-notification"
                    Cooldown = false
                    buttonCan = true
                    DataJSON2["games-count"]= "0"
                    DataJSON2["game-input"]= Text
                    DataJSON2["games"] = {}
                    ButtonSet = 2
                    document.querySelector('pre').textContent = JSON.stringify(DataJSON2, null, 2);
                }

            }
            
        } catch (error) {
            const copyButton = document.querySelector('copyButton')
            copyButton.style.animationDuration = "1s"
            copyButton.style.animationIterationCount = "1"
            copyButton.style.animationName = 'none'
            void copyButton.offsetWidth;
            copyButton.style.animationName = "red-notification"
            Cooldown = false
            buttonCan = true
        }
    }