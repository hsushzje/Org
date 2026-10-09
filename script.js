/**
 * SANKT-PETERSBURG: SOUL OF NEVA - MAIN JAVASCRIPT
 * Features:
 * - GSAP ScrollTrigger & Smooth Animations
 * - Interactive Leaflet Map with 12 Route Stops & Polyline
 * - Ambient Sound Generator (Web Audio API Synthesizer)
 * - Text-to-Speech Web Speech API Audio Guide
 * - Climate & Monthly Data Chart (Chart.js)
 * - Famous People Category Filter
 * - Interactive St. Petersburg Quiz Engine
 * - Dark / Light Theme Switching
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. ROUTE DATA (12 STOPS ACCORDING TO TASK SPECIFICATIONS)
       ========================================================================== */
    const routeStops = [
        {
            id: 1,
            title: "1. Дворцовая площадь и Государственный Эрмитаж",
            address: "Дворцовая площадь, 2 / набережная Дворцовая, 38",
            coords: [59.9398, 30.3146],
            category: "Музейное наследие",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Palace_Square_in_Saint_Petersburg.jpg/1280px-Palace_Square_in_Saint_Petersburg.jpg",
            imageCaption: "Дворцовая площадь с Александровской колонной и Зимним дворцом",
            description: "Главная площадь Санкт-Петербурга и один из наиболее совершенных архитектурных ансамблей мира. В центре площади возвышается Александровская колонна высотой 47,5 метра, вытесанная из цельного монолита красного гранита в честь победы России над Наполеоном. Северную часть площади занимает пышный Зимний дворец — бывшая резиденция российских императоров, созданная архитектором Бартоломео Растрелли в стиле пышного елизаветинского барокко. Ныне в нем располагается Государственный Эрмитаж.",
            significance: "Символ российской государственности и мировой культуры. Коллекция Эрмитажа насчитывает свыше 3 миллионов произведений искусства, включая шедевры Леонардо да Винчи, Рембрандта и Тициана."
        },
        {
            id: 2,
            title: "2. Медный всадник и Сенатская площадь",
            address: "Сенатская площадь, 1",
            coords: [59.9364, 30.3022],
            category: "Памятник & История",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saint_Petersburg_Bronze_Horseman_1.jpg/1280px-Saint_Petersburg_Bronze_Horseman_1.jpg",
            imageCaption: "Памятник Петру I (Медный всадник) на Гром-камне",
            description: "Величайший памятник основателю города императору Петру I, торжественно открытый 7 августа 1782 года по указу Екатерины II. Автором скульптуры выступил французский мастер Этьен Морис Фальконе. Бронзовая конная статуя вздыблена над пропастью на гигантском пьедестале — «Гром-камне» весом более 1500 тонн, доставленном из окрестностей Лахты. Поэма А.С. Пушкина навсегда сделала имя «Медный всадник» поэтической метафорой Петербурга.",
            significance: "Главный градостроительный и символический знак Санкт-Петербурга, выражающий непреклонную волю и стремительный порыв России к просвещению и морскому могуществу."
        },
        {
            id: 3,
            title: "3. Исаакиевский собор",
            address: "Исаакиевская площадь, 4",
            coords: [59.9341, 30.3061],
            category: "Архитектура & Религия",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Saint_Isaac%27s_Cathedral_SPB.jpg/1280px-Saint_Isaac%27s_Cathedral_SPB.jpg",
            imageCaption: "Величественный купол и колоннада Исаакиевского собора",
            description: "Крупнейший православный храм Санкт-Петербурга и один из самых высоких купольных соборов мира (101,5 м). Строительство собора продолжалось 40 лет (1818–1858) под руководством архитекторов Огюста Монферрана. Здание обрамляют 112 цельных гранитных колонн весом до 114 тонн каждая. На позолоту главного купола и креста ушло более 100 килограммов чистого золота. Внутри собора сохраняются уникальные витражи, живопись и мозаики общей площадью более 600 кв. метров.",
            significance: "Главный кафедральный храм Российской империи, выдающийся памятник позднего классицизма и технический шедевр мирового зодчества."
        },
        {
            id: 4,
            title: "4. Невский проспект и Казанский собор",
            address: "Невский проспект, 25 / Казанская площадь, 2",
            coords: [59.9343, 30.3246],
            category: "Главная артерия",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Kazan_Cathedral_SPB_2017.jpg/1280px-Kazan_Cathedral_SPB_2017.jpg",
            imageCaption: "Полукруглая колоннада Казанского собора на Невском проспекте",
            description: "Казанский кафедральный собор, построение которого завершилось в 1811 году по проекту выдающегося русского архитектора Андрея Воронихина. Архитектурный облик здания с уникальной полукруглой грандиозной колоннадой из 94 колонн обращен к Невскому проспекту. В соборе погребен великий русский полководец Михаил Илларионович Кутузов, а также хранятся трофейные ключи от взятых французских городов и чудотворная Казанская икона Божией Матери.",
            significance: "Главный мемориал русской военной славы и победы в Отечественной войне 1812 года, а также духовное сердце главнейшей магистрали города."
        },
        {
            id: 5,
            title: "5. Храм Спаса на Крови",
            address: "набережная канала Грибоедова, 2б",
            coords: [59.9401, 30.3289],
            category: "Шедевр мозаики",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Church_of_the_Saviour_on_Spilled_Blood_in_St_Petersburg.jpg/1280px-Church_of_the_Saviour_on_Spilled_Blood_in_St_Petersburg.jpg",
            imageCaption: "Мозаичные купола и фасад собора Воскресения Христова",
            description: "Православный собор Воскресения Христова, воздвигнутый на том самом месте, где 1 марта 1881 года в результате покушения народовольцев был смертельно ранен император Александр II. Храм построен в так называемом «русском стиле» по проекту Альфреда Парланда и архимандрита Игнатия, вызывая ассоциации с собором Василия Блаженного в Москве. Внутреннее убранство представляет собой крупнейшую в Европе коллекцию мозаики — более 7500 квадратных метров полотен.",
            significance: "Уникальный царский мемориал и драгоценный музей монументального мозаичного искусства мирового уровня."
        },
        {
            id: 6,
            title: "6. Летний сад и Дворец Петра I",
            address: "Летний сад, Набережная Кутузова, 2",
            coords: [59.9449, 30.3355],
            category: "Парковое искусство",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Summer_Garden_SPB_Alley.jpg/1280px-Summer_Garden_SPB_Alley.jpg",
            imageCaption: "Аллеи Летнего сада с мраморными скульптурами",
            description: "Старейший парк Санкт-Петербурга, заложенный лично Петром I в 1704 году как регулярный резиденциальный сад в стиле европейского барокко. Здесь расположен Летний дворец Петра I — одно из первейших каменных зданий города. Парк знаменит своей коллекцией итальянских мраморных скульптур XVIII века, фонтанами, шпалерами и всемирно известной оградой со стороны Невы, созданной архитектором Юрием Фельтеном.",
            significance: "Жемчужина садово-паркового искусства Петровской эпохи, любимое место вдохновения великих поэтов и писателей."
        },
        {
            id: 7,
            title: "7. Петропавловская крепость и Заячий остров",
            address: "Заячий остров, Петропавловская крепость, 3",
            coords: [59.9502, 30.3164],
            category: "Колыбель города",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Peter_and_Paul_Fortress_SPB_View.jpg/1280px-Peter_and_Paul_Fortress_SPB_View.jpg",
            imageCaption: "Петропавловский собор и золоченый шпиль с ангелом",
            description: "Крепость заложена 27 мая 1703 года по совместному чертежу Петра I и инженера Жозефа Ламбера де Герена — дата основания крепости стала официальным днем рождения Санкт-Петербурга. На территории находится Петропавловский собор (архитектор Доменико Трезини) с позолоченным шпилем высотой 122,5 метра, вершину которого венчают крест и фигура парящего ангела.",
            significance: "Историческое ядро Санкт-Петербурга, первоклассный памятник русскому фортификационному искусству и усыпальница императорского дома Романовых."
        },
        {
            id: 8,
            title: "8. Стрелка Васильевского острова и Биржа",
            address: "Биржевая площадь, 4",
            coords: [59.9436, 30.3060],
            category: "Ансамбль & Вид",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Strelka_Vasilievsky_Island_St_Petersburg.jpg/1280px-Strelka_Vasilievsky_Island_St_Petersburg.jpg",
            imageCaption: "Стрелка Васильевского острова, здание Биржи и Ростральные колонны",
            description: "Один из наиболее завораживающих архитектурных ансамблей Петербурга, где река Нева разделяется на Большую и Малую Невку. Центральным объектом выступает здание Биржи, выполненное Тома де Томоном в виде античного периптера. Перед Биржей стоят две 32-метровые Ростральные колонны, украшенные скульптурными рострами (носовыми частями) кораблей и олицетворяющие великие реки России: Волгу, Днепр, Волхов и Неву.",
            significance: "Символ морского торгового могущества России и главная панорамная смотровая точка акватории Невы."
        },
        {
            id: 9,
            title: "9. Кунсткамера и Здание 12 коллегий",
            address: "Университетская набережная, 3 / 7–9",
            coords: [59.9414, 30.3045],
            category: "Наука & Образование",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kunstkamera_St_Petersburg.jpg/1280px-Kunstkamera_St_Petersburg.jpg",
            imageCaption: "Здание Кунсткамеры — Музея антропологии и этнографии им. Петра Великого",
            description: "Первый публичный музей России, учрежденный Петром I в 1714 году для сбора редкостей, анатомических и этнографических коллекций. Башня здания Кунсткамеры увенчана астрономической сферой. Неподалеку вытянулось на 400 метров здание Двенадцати коллегий, возведенное Доменико Трезини для высших органов государственного управления, а ныне являющееся главным корпусом Санкт-Петербургского государственного университета (СПбГУ).",
            significance: "Колыбель российской академической науки, высшего образования и музейного дела."
        },
        {
            id: 10,
            title: "10. Крейсер «Аврора»",
            address: "Петроградская набережная, у Заячьего/Пенькового моста",
            coords: [59.9554, 30.3378],
            category: "Морская история",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cruiser_Aurora_St_Petersburg_2018.jpg/1280px-Cruiser_Aurora_St_Petersburg_2018.jpg",
            imageCaption: "Легендарный крейсер 1-го ранга «Аврора» на вечной стоянке",
            description: "Бронепалубный крейсер 1-го ранга Балтийского флота, спущенный на воду в 1900 году. Корабль принимал участие в Цусимском сражении Русско-японской войны и Первой мировой войне. 25 октября (7 ноября) 1917 года холостой выстрел из носового орудия «Авроры» послужил сигналом к началу штурма Зимнего дворца. Ныне кораблю присвоен статус корабля-музея в составе Центрального военно-морского музея.",
            significance: "Легендарный памятник отечественного кораблестроения и символ ключевых исторических событий XX века."
        },
        {
            id: 11,
            title: "11. Мариинский театр и Театральная площадь",
            address: "Театральная площадь, 1",
            coords: [59.9257, 30.2961],
            category: "Опера & Балет",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mariinsky_Theatre_St_Petersburg.jpg/1280px-Mariinsky_Theatre_St_Petersburg.jpg",
            imageCaption: "Историческое здание Мариинского театра",
            description: "Один из ведущих музыкальных театров планеты, названный в честь императрицы Марии Александровны и открытый в 1860 году по проекту Альберта Кавоса. На этой сцене состоялись мировые премьеры великих опер Мусоргского, Чайковского, Римского-Корсакова и балетов Мариуса Петипа. Театр взрастил мировых гениев сцены: от Фёдора Шаляпина до Анны Павловой, Галины Улановой и Майи Плисецкой.",
            significance: "Мировой центр оперного и балетного искусства, формирующий культурные стандарты высокого исполнительства."
        },
        {
            id: 12,
            title: "12. Никольский Морской собор и Новая Голландия",
            address: "Никольская площадь, 1 / набережная Адмиралтейского канала, 2",
            coords: [59.9224, 30.2997],
            category: "Душа Коломны",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Saint_Nicholas_Naval_Cathedral_SPB.jpg/1280px-Saint_Nicholas_Naval_Cathedral_SPB.jpg",
            imageCaption: "Николо-Богоявленский Морской собор у Крюкова канала",
            description: "Николо-Богоявленский Морской собор — выдающийся памятник елизаветинского барокко архитектора Саввы Чевакинского, традиционно являющийся духовным центром всех российских военных моряков. Рядом расположился рукотворный остров Новая Голландия — уникальный комплекс складских зданий XVIII века с арочными порталами Валлен-Деламота, отреставрированный и превращенный в самое современное культурное пространство Петербурга.",
            significance: "Атмосферное сердце исторического района Коломна, где пересекаются морские духовные традиции России и современная общественная жизнь."
        }
    ];

    /* ==========================================================================
       2. LEAFLET INTERACTIVE MAP IMPLEMENTATION
       ========================================================================== */
    let map;
    let markers = [];
    let routePolyline;
    let currentStopIndex = 0;

    function initMap() {
        const mapContainer = document.getElementById('leafletMap');
        if (!mapContainer) return;

        const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        // Centered over St. Petersburg with touch optimization
        map = L.map('leafletMap', {
            center: [59.9386, 30.3141],
            zoom: 13,
            scrollWheelZoom: false,
            dragging: !isTouchDevice || window.innerWidth > 768,
            tap: !isTouchDevice
        });

        if (isTouchDevice && window.innerWidth <= 768) {
            // Enable dragging on map when user taps map container
            mapContainer.addEventListener('touchstart', () => {
                map.dragging.enable();
            });
        }

        // CartoDB High-Quality Tiles (CARTO / OpenStreetMap - European & American Provider)
        const darkTilesUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
        const lightTilesUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
        const isLightMode = document.documentElement.classList.contains('light');

        window.mapTileLayer = L.tileLayer(isLightMode ? lightTilesUrl : darkTilesUrl, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 19,
            subdomains: 'abcd'
        }).addTo(map);

        const latLngs = routeStops.map(stop => stop.coords);

        // Draw connecting route polyline
        routePolyline = L.polyline(latLngs, {
            color: '#2997ff',
            weight: 4,
            opacity: 0.8,
            dashArray: '8, 8',
            lineJoin: 'round'
        }).addTo(map);

        // Add custom markers for each stop
        routeStops.forEach((stop, index) => {
            const customIcon = L.divIcon({
                className: 'custom-leaflet-pin-wrapper',
                html: `<div class="custom-leaflet-pin ${index === 0 ? 'active-pin' : ''}" id="pin-${stop.id}">${stop.id}</div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });

            const marker = L.marker(stop.coords, { icon: customIcon }).addTo(map);
            marker.on('click', () => {
                selectStop(index);
            });

            markers.push(marker);
        });

        renderStopsSidebar();
        selectStop(0);
    }

    function renderStopsSidebar() {
        const sidebarNav = document.getElementById('stopsListNav');
        if (!sidebarNav) return;

        sidebarNav.innerHTML = '';
        routeStops.forEach((stop, idx) => {
            const btn = document.createElement('button');
            btn.className = `stop-nav-item ${idx === 0 ? 'active' : ''}`;
            btn.innerHTML = `
                <div class="stop-badge-num">${stop.id}</div>
                <div class="stop-nav-info">
                    <strong>${stop.title.replace(/^\d+\.\s*/, '')}</strong>
                    <span>${stop.category}</span>
                </div>
            `;
            btn.addEventListener('click', () => selectStop(idx));
            sidebarNav.appendChild(btn);
        });
    }

    function selectStop(index) {
        currentStopIndex = index;
        const stop = routeStops[index];

        // Update map active marker & pan smoothly
        markers.forEach((m, idx) => {
            const el = document.getElementById(`pin-${routeStops[idx].id}`);
            if (el) {
                if (idx === index) el.classList.add('active-pin');
                else el.classList.remove('active-pin');
            }
        });

        map.flyTo(stop.coords, 15, { duration: 1.2 });

        // Update Sidebar Active state
        const sidebarItems = document.querySelectorAll('.stop-nav-item');
        sidebarItems.forEach((item, idx) => {
            if (idx === index) item.classList.add('active');
            else item.classList.remove('active');
        });

        // Update Stop Detail Display Card with smooth transition
        const stopDetailCard = document.getElementById('stopDetailCard');
        if (stopDetailCard) {
            stopDetailCard.style.opacity = '0.4';
            setTimeout(() => {
                document.getElementById('stopNumber').textContent = `Остановка ${stop.id < 10 ? '0' + stop.id : stop.id} из ${routeStops.length}`;
                document.getElementById('stopTitle').textContent = stop.title;
                const addrEl = document.getElementById('stopAddress');
                if (addrEl && stop.address) {
                    addrEl.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${stop.address}`;
                }
                document.getElementById('stopCoords').innerHTML = `<i class="fa-solid fa-location-pin"></i> ${stop.coords[0]}° N, ${stop.coords[1]}° E`;
                document.getElementById('stopCategory').innerHTML = `<i class="fa-solid fa-tag"></i> ${stop.category}`;
                document.getElementById('stopImage').src = stop.image;
                document.getElementById('stopImageCaption').textContent = stop.imageCaption;
                document.getElementById('stopDescription').textContent = stop.description;
                document.getElementById('stopSignificance').textContent = stop.significance;

                stopDetailCard.style.opacity = '1';
            }, 180);
        }
    }

    // Map Action Buttons
    const btnResetMapView = document.getElementById('btnResetMapView');
    if (btnResetMapView) {
        btnResetMapView.addEventListener('click', () => {
            if (map && routePolyline) {
                map.fitBounds(routePolyline.getBounds(), { padding: [40, 40] });
            }
        });
    }

    const btnToggleRouteLine = document.getElementById('btnToggleRouteLine');
    if (btnToggleRouteLine) {
        btnToggleRouteLine.addEventListener('click', () => {
            if (routePolyline) {
                if (map.hasLayer(routePolyline)) map.removeLayer(routePolyline);
                else routePolyline.addTo(map);
            }
        });
    }

    // Stop Navigation Buttons
    const prevStopBtn = document.getElementById('prevStopBtn');
    const nextStopBtn = document.getElementById('nextStopBtn');

    if (prevStopBtn) {
        prevStopBtn.addEventListener('click', () => {
            const newIndex = (currentStopIndex - 1 + routeStops.length) % routeStops.length;
            selectStop(newIndex);
        });
    }

    if (nextStopBtn) {
        nextStopBtn.addEventListener('click', () => {
            const newIndex = (currentStopIndex + 1) % routeStops.length;
            selectStop(newIndex);
        });
    }

    /* ==========================================================================
       3. TEXT-TO-SPEECH AUDIO GUIDE
       ========================================================================== */
    const audioGuideBtn = document.getElementById('audioGuideBtn');
    let isSpeaking = false;
    let russianVoices = [];

    function loadVoices() {
        if ('speechSynthesis' in window) {
            const voices = window.speechSynthesis.getVoices();
            russianVoices = voices.filter(v => v.lang.includes('ru') || v.lang.includes('RU'));
        }
    }

    if ('speechSynthesis' in window) {
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }

    if (audioGuideBtn) {
        audioGuideBtn.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                if (isSpeaking) {
                    window.speechSynthesis.cancel();
                    isSpeaking = false;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>Аудиогид (Озвучить)</span>`;
                    audioGuideBtn.classList.remove('speaking');
                    return;
                }

                window.speechSynthesis.cancel();

                const stop = routeStops[currentStopIndex];
                const textToSpeak = `${stop.title}. Адрес: ${stop.address || ''}. ${stop.description} Историческое значение: ${stop.significance}`;

                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'ru-RU';
                utterance.rate = 0.95;
                utterance.pitch = 1.0;

                if (russianVoices.length > 0) {
                    utterance.voice = russianVoices[0];
                }

                utterance.onstart = () => {
                    isSpeaking = true;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>Остановить аудио</span>`;
                    audioGuideBtn.classList.add('speaking');
                };

                utterance.onend = () => {
                    isSpeaking = false;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>Аудиогид (Озвучить)</span>`;
                    audioGuideBtn.classList.remove('speaking');
                };

                utterance.onerror = (e) => {
                    console.warn('Speech synthesis error:', e);
                    isSpeaking = false;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>Аудиогид (Озвучить)</span>`;
                    audioGuideBtn.classList.remove('speaking');
                };

                window.speechSynthesis.speak(utterance);
            } else {
                alert('Ваш браузер не поддерживает синтез речи.');
            }
        });
    }

    /* ==========================================================================
       4. AMBIENT WATER & RAIN SOUND SYNTHESIZER (WEB AUDIO API)
       ========================================================================== */
    let audioCtx;
    let currentSource = null;
    let gainNode = null;
    let isAmbientPlaying = false;
    let masterVolume = 0.25;

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function createAmbientSound(type) {
        stopAmbientSound();
        initAudioContext();

        const bufferSize = audioCtx.sampleRate * 3;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        if (type === 'rain') {
            // Realistic rain sound generator using filtered noise
            let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99886 * b0 + white * 0.0555179;
                b1 = 0.99332 * b1 + white * 0.0750759;
                b2 = 0.96900 * b2 + white * 0.1538520;
                b3 = 0.86650 * b3 + white * 0.3104856;
                b4 = 0.55000 * b4 + white * 0.5329522;
                b5 = -0.7616 * b5 - white * 0.0168980;
                data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
                data[i] *= 0.11;
                b6 = white * 0.115926;
            }
        } else {
            // Neva River waves modulation generator
            for (let i = 0; i < bufferSize; i++) {
                const t = i / audioCtx.sampleRate;
                const waveLFO = Math.sin(2 * Math.PI * 0.12 * t) * 0.5 + 0.5;
                const white = Math.random() * 2 - 1;
                data[i] = white * (0.2 + 0.8 * waveLFO);
            }
        }

        currentSource = audioCtx.createBufferSource();
        currentSource.buffer = buffer;
        currentSource.loop = true;

        const filter = audioCtx.createBiquadFilter();
        if (type === 'rain') {
            filter.type = 'lowpass';
            filter.frequency.value = 1200;
        } else {
            filter.type = 'bandpass';
            filter.frequency.value = 450;
            filter.Q.value = 1.2;
        }

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(masterVolume, audioCtx.currentTime);

        currentSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        currentSource.start();
        isAmbientPlaying = true;

        const ambientToggleBtn = document.getElementById('ambientToggle');
        if (ambientToggleBtn) ambientToggleBtn.classList.add('playing');
    }

    function stopAmbientSound() {
        if (currentSource) {
            try { currentSource.stop(); } catch(e){}
            currentSource.disconnect();
            currentSource = null;
        }
        isAmbientPlaying = false;

        const ambientToggleBtn = document.getElementById('ambientToggle');
        if (ambientToggleBtn) ambientToggleBtn.classList.remove('playing');
    }

    const ambientToggle = document.getElementById('ambientToggle');
    const ambientPlayerBar = document.getElementById('ambientPlayerBar');

    if (ambientToggle) {
        ambientToggle.addEventListener('click', () => {
            ambientPlayerBar.classList.toggle('hidden');
        });
    }

    const playRainBtn = document.getElementById('playRainBtn');
    const playWavesBtn = document.getElementById('playWavesBtn');
    const stopAmbientBtn = document.getElementById('stopAmbientBtn');
    const ambientVolumeSlider = document.getElementById('ambientVolume');

    if (playRainBtn) playRainBtn.addEventListener('click', () => createAmbientSound('rain'));
    if (playWavesBtn) playWavesBtn.addEventListener('click', () => createAmbientSound('waves'));
    if (stopAmbientBtn) stopAmbientBtn.addEventListener('click', () => stopAmbientSound());

    if (ambientVolumeSlider) {
        ambientVolumeSlider.addEventListener('input', (e) => {
            masterVolume = parseFloat(e.target.value);
            if (gainNode && audioCtx) {
                gainNode.gain.setValueAtTime(masterVolume, audioCtx.currentTime);
            }
        });
    }

    /* ==========================================================================
       5. CHART.JS CLIMATE PROFILE WIDGET
       ========================================================================== */
    const ctxChart = document.getElementById('climateChart');
    let climateChart;

    if (ctxChart) {
        const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        const tempData = [-5.8, -5.3, -1.1, 5.4, 12.0, 16.3, 19.1, 17.3, 12.1, 6.2, 0.7, -3.6];
        const rainData = [46, 36, 36, 38, 46, 71, 79, 84, 64, 67, 57, 51];

        climateChart = new Chart(ctxChart, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Средняя температура (°C)',
                    data: tempData,
                    borderColor: '#2997ff',
                    backgroundColor: 'rgba(41, 151, 255, 0.15)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#2997ff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#86868b' } },
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#86868b' } }
                }
            }
        });

        const btnTempChart = document.getElementById('btnTempChart');
        const btnRainChart = document.getElementById('btnRainChart');

        if (btnTempChart && btnRainChart) {
            btnTempChart.addEventListener('click', () => {
                btnTempChart.classList.add('active');
                btnRainChart.classList.remove('active');
                climateChart.data.datasets[0].label = 'Средняя температура (°C)';
                climateChart.data.datasets[0].data = tempData;
                climateChart.data.datasets[0].borderColor = '#2997ff';
                climateChart.data.datasets[0].backgroundColor = 'rgba(41, 151, 255, 0.15)';
                climateChart.update();
            });

            btnRainChart.addEventListener('click', () => {
                btnRainChart.classList.add('active');
                btnTempChart.classList.remove('active');
                climateChart.data.datasets[0].label = 'Норма осадков (мм)';
                climateChart.data.datasets[0].data = rainData;
                climateChart.data.datasets[0].borderColor = '#64d2ff';
                climateChart.data.datasets[0].backgroundColor = 'rgba(100, 210, 255, 0.15)';
                climateChart.update();
            });
        }
    }

    /* ==========================================================================
       6. FAMOUS PEOPLE FILTER SYSTEM
       ========================================================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const personCards = document.querySelectorAll('.person-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            personCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       7. INTERACTIVE QUIZ ENGINE
       ========================================================================== */
    const quizQuestions = [
        {
            q: "В каком году Петром I был основан Санкт-Петербург?",
            options: ["1698 г.", "1703 г.", "1712 г.", "1721 г."],
            correct: 1,
            exp: "Правильно! Санкт-Петербург основан 27 мая (16 мая по ст. ст.) 1703 года."
        },
        {
            q: "Сколько колонн формируют полукруглую колоннаду Казанского собора?",
            options: ["48", "72", "94", "112"],
            correct: 2,
            exp: "Верно! Полукруглую колоннаду Казанского собора образуют 94 колонны."
        },
        {
            q: "Какое уникальное природное явление наблюдается в СПб с конца мая по середину июля?",
            options: ["Северное сияние", "Белые ночи", "Невский прилив", "Звёздный шторм"],
            correct: 1,
            exp: "Правильно! Это Белые ночи, когда вечерние сумерки сменяются утренними."
        },
        {
            q: "Как называется остров, на котором расположена Петропавловская крепость?",
            options: ["Васильевский", "Заячий", "Крестовский", "Аптекарский"],
            correct: 1,
            exp: "Точно! Петропавловская крепость расположена на Заячьем острове."
        },
        {
            q: "Какой архитектор проектировал Исаакиевский собор?",
            options: ["Карло Росси", "Огюст Монферран", "Франческо Растрелли", "Андрей Воронихин"],
            correct: 1,
            exp: "Верно! Французский архитектор Огюст Монферран отдало строительству собора 40 лет жизни."
        }
    ];

    let currentQuizIndex = 0;
    let quizScore = 0;

    const quizQuestionEl = document.getElementById('quizQuestion');
    const quizOptionsEl = document.getElementById('quizOptions');
    const quizFeedbackEl = document.getElementById('quizFeedback');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const quizQuestionCount = document.getElementById('quizQuestionCount');
    const quizBarInner = document.getElementById('quizBarInner');

    function loadQuizQuestion() {
        if (!quizQuestionEl) return;

        const q = quizQuestions[currentQuizIndex];
        quizQuestionCount.textContent = `Вопрос ${currentQuizIndex + 1} из ${quizQuestions.length}`;
        quizBarInner.style.width = `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`;
        quizQuestionEl.textContent = q.q;

        quizOptionsEl.innerHTML = '';
        quizFeedbackEl.className = 'quiz-feedback hidden';
        nextQuestionBtn.classList.add('hidden');

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle"></i>`;
            btn.addEventListener('click', () => checkQuizAnswer(idx, btn));
            quizOptionsEl.appendChild(btn);
        });
    }

    function checkQuizAnswer(selectedIndex, selectedBtn) {
        const q = quizQuestions[currentQuizIndex];
        const buttons = quizOptionsEl.querySelectorAll('.quiz-option-btn');
        buttons.forEach(b => b.disabled = true);

        if (selectedIndex === q.correct) {
            quizScore++;
            selectedBtn.classList.add('correct');
            selectedBtn.querySelector('i').className = 'fa-solid fa-circle-check';
            quizFeedbackEl.textContent = q.exp;
            quizFeedbackEl.className = 'quiz-feedback correct-bg';
        } else {
            selectedBtn.classList.add('wrong');
            selectedBtn.querySelector('i').className = 'fa-solid fa-circle-xmark';
            buttons[q.correct].classList.add('correct');
            quizFeedbackEl.textContent = `Неверно. ${q.exp}`;
            quizFeedbackEl.className = 'quiz-feedback wrong-bg';
        }

        nextQuestionBtn.classList.remove('hidden');
    }

    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', () => {
            currentQuizIndex++;
            if (currentQuizIndex < quizQuestions.length) {
                loadQuizQuestion();
            } else {
                showQuizResults();
            }
        });
    }

    function showQuizResults() {
        document.getElementById('quizContainer').classList.add('hidden');
        const resContainer = document.getElementById('quizResultContainer');
        resContainer.classList.remove('hidden');

        document.getElementById('resultScoreText').textContent = `Ваш результат: ${quizScore} из ${quizQuestions.length}`;
        const commentEl = document.getElementById('resultComment');
        if (quizScore === 5) commentEl.textContent = "Потрясающе! Вы настоящий эксперт по Санкт-Петербургу!";
        else if (quizScore >= 3) commentEl.textContent = "Отличный результат! Вы прекрасно знаете Северную столицу.";
        else commentEl.textContent = "Хорошая попытка! Наш путеводитель поможет вам узнать ещё больше.";
    }

    const restartQuizBtn = document.getElementById('restartQuizBtn');
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            currentQuizIndex = 0;
            quizScore = 0;
            document.getElementById('quizResultContainer').classList.add('hidden');
            document.getElementById('quizContainer').classList.remove('hidden');
            loadQuizQuestion();
        });
    }

    /* ==========================================================================
       8. GSAP SCROLLANIMATIONS & SCROLL-PROGRESS
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) progressBar.style.width = scrolled + '%';
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('light');
            const isLight = document.documentElement.classList.contains('light');
            themeToggle.innerHTML = isLight ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;

            if (window.mapTileLayer && map) {
                map.removeLayer(window.mapTileLayer);
                const darkTilesUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
                const lightTilesUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
                window.mapTileLayer = L.tileLayer(isLight ? lightTilesUrl : darkTilesUrl, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    maxZoom: 19,
                    subdomains: 'abcd'
                }).addTo(map);
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
            });
        });
    }

    // GSAP ScrollTrigger Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('[data-gsap="hero-title"]', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.from('[data-gsap="fade-up"]', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.5
        });

        gsap.from('[data-gsap="fade-up-delay"]', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.8
        });

        // Counter Numbers animation
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'), 10);
            gsap.to(stat, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%'
                }
            });
        });

        // Reveal Elements on Scroll
        const revealElements = document.querySelectorAll('[data-reveal]');
        revealElements.forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%'
                    }
                }
            );
        });
    }

    // Initialize Map and Quiz
    initMap();
    loadQuizQuestion();
});
