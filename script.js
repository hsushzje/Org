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
            coords: [59.9398, 30.3146],
            category: "Музейное наследие",
            image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Дворцовая площадь с Александровской колонной и Зимним дворцом",
            description: "Главная площадь Санкт-Петербурга и один из самых выдающихся архитектурных ансамблей мира. В центре площади возвышается Александровская колонна (47,5 м), возведенная в честь победы над Наполеоном. Зимний дворец — бывшая резиденция российских императоров, ныне главный музей страны — Государственный Эрмитаж.",
            significance: "Символ российской государственности и военной славы. Эрмитаж хранит более 3 миллионов произведений искусства, являясь мировым сокровищем."
        },
        {
            id: 2,
            title: "2. Медный всадник и Сенатская площадь",
            coords: [59.9364, 30.3022],
            category: "Памятник & История",
            image: "https://images.unsplash.com/photo-1513326718677-b964603b136d?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Памятник Петру I на Гром-камне",
            description: "Памятник основателю города Петру I, открытый в 1782 году по проекту французского скульптора Этьена Фальконе. Бронзовая конная статуя покоится на гигантском «Гром-камне» весом более 1500 тонн. Поэма А.С. Пушкина увековечила этот памятник как имя нарицательное.",
            significance: "Главный градостроительный и поэтический символ Санкт-Петербурга, олицетворяющий стремительный порыв России в будущее."
        },
        {
            id: 3,
            title: "3. Исаакиевский собор",
            coords: [59.9341, 30.3061],
            category: "Архитектура & Религия",
            image: "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Купол Исаакиевского собора над городом",
            description: "Крупнейший православный храм Санкт-Петербурга, строившийся 40 лет (1818–1858) по проекту Огюста Монферрана. Купол покрыт 100 кг чистого золота. Солончак и мощные 112 монолитных гранитных колонн делают собор одним из величайших купольных зданий мира.",
            significance: "Главный кафедральный собор Российской империи, шедевр позднего классицизма и уникальный инженерный подвиг XIX века."
        },
        {
            id: 4,
            title: "4. Невский проспект и Казанский собор",
            coords: [59.9343, 30.3246],
            category: "Главная артерия",
            image: "https://images.unsplash.com/photo-1572985025344-3151834e5659?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Казанский собор на Невском проспекте",
            description: "Казанский собор, возведенный архитектором Андреем Воронихиным в 1801–1811 годах, напоминает Собор Святого Петра в Риме благодаря полукруглой колоннаде из 94 колонн. Здесь похоронен фельдмаршал М.И. Кутузов и хранилась чудотворная Казанская икона Божией Матери.",
            significance: "Памятник русской военной славы Отечественной войны 1812 года и духовный центр на главной магистрали города."
        },
        {
            id: 5,
            title: "5. Храм Спаса на Крови",
            coords: [59.9401, 30.3289],
            category: "Шедевр мозаики",
            image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Яркие купола Спаса на Крови над каналом Грибоедова",
            description: "Собор Воскресения Христова сооружен на месте, где 1 марта 1881 года был смертельно ранен император Александр II. Храм выполнен в «русском стиле» по образцу собора Василия Блаженного. Интерьер украшает свыше 7500 кв. метров уникальной мозаики.",
            significance: "Уникальный мемориальный архитектурный комплекс и одна из крупнейших коллекций монументальной мозаики в Европе."
        },
        {
            id: 6,
            title: "6. Летний сад и Дворец Петра I",
            coords: [59.9449, 30.3355],
            category: "Парковое искусство",
            image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Аллеи Летнего сада и знаменитая решетка",
            description: "Старейший парк Санкт-Петербурга, заложенный по повелению Петра I в 1704 году как летняя царская резиденция. Парк известен мраморными итальянскими скульптурами, фонтанами и изящной оградой архитектора Юрия Фельтена.",
            significance: "Эталон барочного садово-паркового искусства XVIII века и любимое место прогулок Петербургской интеллигенции."
        },
        {
            id: 7,
            title: "7. Петропавловская крепость и Заячий остров",
            coords: [59.9502, 30.3164],
            category: "Колыбель города",
            image: "https://images.unsplash.com/photo-1561542320-9a18cf340450?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Шпиль Петропавловского собора на фоне Невы",
            description: "Заложена 27 мая 1703 года — именно этот день считается днем рождения Санкт-Петербурга. В центре крепости расположен Петропавловский собор со шпилем высотой 122,5 м, увенчанным фигурой летящего ангела. Собор служит усыпальницей русских царей от Петра I до Николая II.",
            significance: "Исторический ядро города, фортификационный шедевр и усыпальница Дома Романовых."
        },
        {
            id: 8,
            title: "8. Стрелка Васильевского острова и Биржа",
            coords: [59.9436, 30.3060],
            category: "Ансамбль & Вид",
            image: "https://images.unsplash.com/photo-1513326718677-b964603b136d?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Ростральные колонны и здание Биржи",
            description: "Градостроительный ансамбль, где река Нева делится на Большую и Малую. Две Ростральные колонны высотой 32 м украшены рострами (носами) захваченных вражеских кораблей и аллегорическими фигурами великих русских рек: Волги, Днепра, Волхова и Невы.",
            significance: "Символ Санкт-Петербурга как морского порта и торговой столицы Российской империи."
        },
        {
            id: 9,
            title: "9. Кунсткамера и Здание 12 коллегий",
            coords: [59.9414, 30.3045],
            category: "Наука & Образование",
            image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Здание Кунсткамеры — Музея антропологии и этнографии",
            description: "Первый музей России, основанный Петром I в 1714 году для сбора и исследования анатомических редкостей и этнографических предметов. Рядом расположено здание Двенадцати коллегий — ныне главный корпус Санкт-Петербургского государственного университета (СПбГУ).",
            significance: "Родоначальник всей российской музейной науки и Академии наук."
        },
        {
            id: 10,
            title: "10. Крейсер «Аврора»",
            coords: [59.9554, 30.3378],
            category: "Морская история",
            image: "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Легендарный крейсер 1-го ранга «Аврора» у Петроградской набережной",
            description: "Крейсер 1-го ранга Балтийского флота, принявший участие в Русско-японской и Первой мировой войнах. Холостой выстрел с «Авроры» 25 октября 1917 года послужил сигналом к штурму Зимнего дворца и началу Октябрьской революции.",
            significance: "Корабль-музей, поворотный символ отечественной и мировой истории XX века."
        },
        {
            id: 11,
            title: "11. Мариинский театр и Театральная площадь",
            coords: [59.9257, 30.2961],
            category: "Опера & Балет",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Здание Мариинского театра",
            description: "Один из ведущих музыкальных театров мира, открытый в 1860 году. Здесь состоялись премьеры опер Мусоргского, Чайковского, Римского-Корсакова и балетов Петипа. Театр подарил миру величайших артистов от Шаляпина до Улановой и Плисецкой.",
            significance: "Храм русского балета и оперного искусства, задающий мировые стандарты исполнительства."
        },
        {
            id: 12,
            title: "12. Никольский Морской собор и Новая Голландия",
            coords: [59.9224, 30.2997],
            category: "Душа Коломны",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
            imageCaption: "Никольский собор и рукотворный остров Новая Голландия",
            description: "Николо-Богоявленский Морской собор — выдающийся памятник елизаветинского барокко, традиционно окормляющий моряков Российского флота. Неподалеку расположен остров Новая Голландия — уникальный памятник промышленной архитектуры XVIII века, превращенный в современное культурное пространство.",
            significance: "Сердце исторического района Коломна, объединяющее духовную веру моряков и современную креативную жизнь города."
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

        // Standard OpenStreetMap Tiles (Free, No API Key Required)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
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

    if (audioGuideBtn) {
        audioGuideBtn.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                if (isSpeaking) {
                    window.speechSynthesis.cancel();
                    isSpeaking = false;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>Аудиогид (Озвучить)</span>`;
                    return;
                }

                const stop = routeStops[currentStopIndex];
                const textToSpeak = `${stop.title}. ${stop.description} Значение объекта: ${stop.significance}`;

                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'ru-RU';
                utterance.rate = 0.95;

                utterance.onend = () => {
                    isSpeaking = false;
                    audioGuideBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>Аудиогид (Озвучить)</span>`;
                };

                window.speechSynthesis.speak(utterance);
                isSpeaking = true;
                audioGuideBtn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>Остановить аудио</span>`;
            } else {
                alert('Ваш браузер не поддерживает встроенный синтез речи.');
            }
        });
    }

    /* ==========================================================================
       4. AMBIENT WATER & RAIN SOUND SYNTHESIZER (WEB AUDIO API)
       ========================================================================== */
    let audioCtx;
    let noiseNode;
    let isAmbientPlaying = false;

    function createAmbientSound(type) {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        // Generate Pink / Brown Noise for rain or river waves
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // Gain boost
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = type === 'rain' ? 'lowpass' : 'bandpass';
        filter.frequency.value = type === 'rain' ? 800 : 400;

        const gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);

        noiseNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        noiseNode.start();
        isAmbientPlaying = true;
    }

    function stopAmbientSound() {
        if (noiseNode) {
            noiseNode.stop();
            noiseNode.disconnect();
            noiseNode = null;
        }
        isAmbientPlaying = false;
    }

    const ambientToggle = document.getElementById('ambientToggle');
    const ambientPlayerBar = document.getElementById('ambientPlayerBar');

    if (ambientToggle) {
        ambientToggle.addEventListener('click', () => {
            ambientPlayerBar.classList.toggle('hidden');
            ambientToggle.classList.toggle('playing');
        });
    }

    const playRainBtn = document.getElementById('playRainBtn');
    const playWavesBtn = document.getElementById('playWavesBtn');
    const stopAmbientBtn = document.getElementById('stopAmbientBtn');

    if (playRainBtn) playRainBtn.addEventListener('click', () => { stopAmbientSound(); createAmbientSound('rain'); });
    if (playWavesBtn) playWavesBtn.addEventListener('click', () => { stopAmbientSound(); createAmbientSound('waves'); });
    if (stopAmbientBtn) stopAmbientBtn.addEventListener('click', () => stopAmbientSound());

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
