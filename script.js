
/* =====================================================
   1. ASOSIY SOZLAMALAR
===================================================== */


const CONFIG = {
    ADMIN_PASSWORD: "ozgartiring123",

    HERO_IMG: "images/javoxir-hero.jpg",

TEACHERS: [
    { name: "Abdulaziz Ne'matullayev", sub: "Matematika", img: "../images/matematika.png" },
    { name: "Bekhzod Alimukhamedov", sub: "Informatika", img: "../images/Bekhzod Alimukhamedov Informatika.jpg" },
    { name: "Yusuf Kamolberdiyev", sub: "Ingliz tili", img: "../images/yusuf kamolberdiyev ingliz tili.png" },
    { name: "Muso", sub: "Fizika", img: "../images/muso_fizik fizika.jpg" },
    { name: "Foziljon Alijonov", sub: "Kimyo", img: "../images/foziljon_Alijonov kimyo.jpg" },
    { name: "Muhammadakbar Musurmonqulov", sub: "Biologiya", img: "../images/Muhammadakbar Musurmonqulov biologiya.jpg" },
    { name: "Javohir Quvatov", sub: "Tarix", img: "../images/javohir.png" },
    { name: "Azizbek Abdullayev", sub: "Geografiya", img: "../images/azizbek abdullayev.jpg" },
    { name: "Donoxon Saidaxmedova", sub: "Ona tili", img: "../images/donoxon ona tili.jpg" },
    { name: "Donoxon Saidaxmedova", sub: "Adabiyot", img: "../images/Donoxon Saidaxmedova.jpg" },
    { name: "Islom Kamolov", sub: "IT / Dasturlash", img: "../images/Islom Kamolov IT.jpg" }
]
};



/* =====================================================
   2. TILLAR
===================================================== */

const L = {

    uz: {
        slogan: "Ta'lim hamma uchun!",
        perk: "✨ Ko'p qulayliklar, hech qanday kamchilik yo'q – hammasi mutlaqo tekin!",
        why: "Nega Ustoz AI?",
        whySub: "O'qish qulay, tez va hamma uchun",
        f1t: "Mutlaqo bepul",
        f1d: "Hech qanday to'lov yo'q, hamma foydalana oladi.",
        f2t: "Tez va yengil",
        f2d: "Kuchsiz telefonda ham silliq ishlaydi, internet kam sarflanadi.",
        f3t: "Har kuni yangi dars",
        f3d: "Har kuni tanlagan fandan yangi mavzu.",
        f4t: "Reyting va test",
        f4d: "Haftalik test orqali o'zingizni sinang va yuqoriga chiqing.",
        cta: "Bugun birinchi darsingizni boshlang!",
        home: "Bosh sahifa",
        subjects: "Fanlar",
        ai: "AI Ustoz",
        test: "Haftalik test",
        rank: "Reyting",
        teachers: "O'qituvchilar",
        heroT: "Ustoz AI – Bilim sari birinchi qadam!",
        heroS: "Maktab fanlari, IT va kelajak kasblarini bepul o'rganing. Har kuni yangi dars!",
        start: "Darslarni boshlash",
        users: "Foydalanuvchilar",
        free: "Bepul",
        subSub: "Fanni tanlang – bugungi dars shu yerda chiqadi",
        aiSub: "Tushunmagan savolingizni yozing, AI Ustoz tushuntiradi",
        testSub: "Har hafta 20 ta savol. 60 balldan yuqori – reyting oshadi, past bo'lsa – tushadi",
        startTest: "Testni boshlash",
        join: "Reytingga qo'shilish",
        save: "Saqlash",
        today: "Bugungi dars",
        tSub: "Tajribali ustozlarimiz",
        send: "Yuborish",
        next: "Keyingi",
        finish: "Yakunlash",
        ask: "Savolingizni yozing...",
        name: "Ism",
        surname: "Familiya",
        phone: "Telefon raqam",
        ball: "Ball",
        locked: "Bu fan bo'yicha bu haftalik test topshirilgan. Keyingi hafta qaytib keling.",
        noq: "Bu fan uchun savollar tez orada qo'shiladi.",
        up: "Reytingingiz oshdi",
        down: "Reytingingiz tushdi",
        myr: "Sizning reytingingiz",
        hi: "Salom! 👋 Savolingizni yozing, tushuntirib beraman.",
        reg: "Avval ro'yxatdan o'ting (Reyting bo'limi)."
    },

    en: {
        slogan: "Education for everyone!",
        perk: "✨ Many conveniences, zero drawbacks – and it's all completely free!",
        why: "Why Ustoz AI?",
        whySub: "Easy, fast learning for everyone",
        f1t: "Totally free",
        f1d: "No payments, anyone can use it.",
        f2t: "Fast and light",
        f2d: "Runs smoothly on weak phones and uses little data.",
        f3t: "A new lesson daily",
        f3d: "A fresh topic every day in your chosen subject.",
        f4t: "Ranking and tests",
        f4d: "Test yourself weekly and climb the ranking.",
        cta: "Start your first lesson today!",
        home: "Home",
        subjects: "Subjects",
        ai: "AI Teacher",
        test: "Weekly test",
        rank: "Ranking",
        teachers: "Teachers",
        heroT: "Ustoz AI – The first step to knowledge!",
        heroS: "Learn school subjects, IT and future skills for free. A new lesson every day!",
        start: "Start learning",
        users: "Users",
        free: "Free",
        subSub: "Pick a subject – today's lesson appears here",
        aiSub: "Ask anything you don't understand",
        testSub: "20 questions weekly. Over 60 raises your rank, under 60 lowers it",
        startTest: "Start test",
        join: "Join the ranking",
        save: "Save",
        today: "Today's lesson",
        tSub: "Our experienced teachers",
        send: "Send",
        next: "Next",
        finish: "Finish",
        ask: "Type your question...",
        name: "First name",
        surname: "Last name",
        phone: "Phone",
        ball: "Score",
        locked: "You already took this week's test for this subject.",
        noq: "Questions for this subject are coming soon.",
        up: "Your rank went up",
        down: "Your rank went down",
        myr: "Your rank",
        hi: "Hi! 👋 Ask me anything.",
        reg: "Please register first (Ranking section)."
    },

    ru: {
        slogan: "Образование для всех!",
        perk: "✨ Много удобств, никаких недостатков – и всё совершенно бесплатно!",
        why: "Почему Ustoz AI?",
        whySub: "Удобное и быстрое обучение для всех",
        f1t: "Полностью бесплатно",
        f1d: "Никаких платежей, доступно всем.",
        f2t: "Быстро и легко",
        f2d: "Плавно работает на слабых телефонах, экономит трафик.",
        f3t: "Новый урок каждый день",
        f3d: "Каждый день новая тема по выбранному предмету.",
        f4t: "Рейтинг и тесты",
        f4d: "Проверяйте себя каждую неделю и поднимайтесь в рейтинге.",
        cta: "Начните первый урок сегодня!",
        home: "Главная",
        subjects: "Предметы",
        ai: "ИИ-учитель",
        test: "Тест недели",
        rank: "Рейтинг",
        teachers: "Учителя",
        heroT: "Ustoz AI – первый шаг к знаниям!",
        heroS: "Изучайте школьные предметы, IT и профессии будущего бесплатно. Новый урок каждый день!",
        start: "Начать обучение",
        users: "Пользователи",
        free: "Бесплатно",
        subSub: "Выберите предмет – урок дня появится здесь",
        aiSub: "Задайте любой непонятный вопрос",
        testSub: "20 вопросов в неделю. Выше 60 – рейтинг растёт, ниже – падает",
        startTest: "Начать тест",
        join: "Войти в рейтинг",
        save: "Сохранить",
        today: "Урок дня",
        tSub: "Наши опытные учителя",
        send: "Отправить",
        next: "Далее",
        finish: "Завершить",
        ask: "Введите вопрос...",
        name: "Имя",
        surname: "Фамилия",
        phone: "Телефон",
        ball: "Балл",
        locked: "Вы уже сдали тест этой недели по этому предмету.",
        noq: "Вопросы по предмету скоро появятся.",
        up: "Ваш рейтинг вырос",
        down: "Ваш рейтинг упал",
        myr: "Ваш рейтинг",
        hi: "Привет! 👋 Задайте вопрос.",
        reg: "Сначала зарегистрируйтесь (раздел Рейтинг)."
    }
};


/* =====================================================
   3. FANLAR VA KUNLIK DARSLAR
===================================================== */

const S = [

    ["alg", "🧮", ["Algebra", "Algebra", "Алгебра"], [
        ["Chiziqli tenglama", "ax+b=0 ko'rinishidagi tenglama. Yechim: x = -b/a. Masalan 2x+6=0 → x=-3."],
        ["Kvadrat tenglama", "ax²+bx+c=0. Diskriminant D=b²-4ac. D>0 bo'lsa ikki ildiz, D=0 bitta, D<0 ildiz yo'q."]
    ]],

    ["geo", "📐", ["Geometriya", "Geometry", "Геометрия"], [
        ["Pifagor teoremasi", "To'g'ri burchakli uchburchakda c²=a²+b². Katetlar 3 va 4 bo'lsa, gipotenuza 5."],
        ["Doira yuzi", "S=πr², uzunligi C=2πr. Radius 3 bo'lsa S≈28,27."]
    ]],

    ["fiz", "⚛️", ["Fizika", "Physics", "Физика"], [
        ["Nyutonning 2-qonuni", "F=m·a. Kuch massa va tezlanish ko'paytmasiga teng. Massa katta bo'lsa, tezlanish kichik."],
        ["Tezlik", "v=S/t. 120 km yo'lni 2 soatda bossak, tezlik 60 km/soat."]
    ]],

    ["geg", "🌍", ["Geografiya", "Geography", "География"], [
        ["O'zbekiston joylashuvi", "O'zbekiston Markaziy Osiyoda, dengizga chiqish yo'li yo'q. Poytaxti – Toshkent."],
        ["Materiklar", "Yerda 6 ta materik bor: Yevroosiyo, Afrika, Shimoliy va Janubiy Amerika, Avstraliya, Antarktida."]
    ]],

    ["tar", "📜", ["Tarix", "History", "История"], [
        ["Amir Temur", "Amir Temur 1336-yilda Kesh (Shahrisabz)da tug'ilgan, Temuriylar davlatiga asos solgan."],
        ["Mustaqillik", "O'zbekiston 1991-yil 1-sentabrda mustaqillikka erishgan."]
    ]],

    ["inf", "💻", ["Informatika", "Computer science", "Информатика"], [
        ["Bit va bayt", "1 bayt = 8 bit. Kompyuter faqat 0 va 1 bilan ishlaydi (ikkilik sanoq tizimi)."],
        ["Algoritm", "Algoritm – masalani yechishning aniq qadamlari ketma-ketligi."]
    ]],

    ["it", "🧑‍💻", ["IT / Dasturlash", "IT / Coding", "IT / Программирование"], [
        ["Birinchi veb-sahifa", "HTML – sahifa tuzilmasi, CSS – dizayn, JavaScript – harakat. Uchalasi birga sayt yaratadi."],
        ["O'zgaruvchi", "O'zgaruvchi – qiymat saqlaydigan quti. let yosh = 15; kabi yoziladi."]
    ]],

    ["mob", "📱", ["Mobilografiya", "Mobilography", "Мобильная съёмка"], [
        ["Kadr qoidasi", "Uchdan bir qoidasi: kadrni 3×3 to'rga bo'lib, asosiy obyektni chiziq kesishgan joyga qo'ying."],
        ["Yorug'lik", "Eng chiroyli yorug'lik – quyosh chiqishi va botishi atrofida. Yorug'likka orqa bilan turmang."]
    ]],

    ["game", "🎮", ["O'yin yaratish", "Game dev", "Создание игр"], [
        ["O'yin sikli", "Har o'yin sikl: kirishni o'qi → holatni yangila → ekranga chiz. Sekundiga 60 marta."],
        ["Sprite", "Sprite – o'yindagi personaj yoki narsaning rasmi. Ularni ketma-ket almashtirib animatsiya hosil qilinadi."]
    ]],

    ["mon", "🎬", ["Video montaj", "Video editing", "Видеомонтаж"], [
        ["Kesish", "Montajda eng muhimi – ritm. Zerikarli joylarni kesib tashlang, video jonlanadi."],
        ["Ovoz", "Yaxshi video 50% ovozdan iborat. Fon musiqasi ovozdan past bo'lsin."]
    ]],

    ["ai", "🤖", ["Sun'iy intellekt", "AI", "Искусственный интеллект"], [
        ["AI nima?", "Sun'iy intellekt – kompyuterning ma'lumotlardan o'rganib, qaror qabul qilish qobiliyati."],
        ["Prompt", "Prompt – AIga beriladigan topshiriq. Qanchalik aniq yozsangiz, javob shuncha yaxshi bo'ladi."]
    ]]
];


/* =====================================================
   4. TEST SAVOLLARI
===================================================== */

const Q = {

    it: [
        ["HTML nima uchun kerak?", ["Sahifa tuzilmasi", "Rasm chizish", "Ovoz yozish", "Kompyuter ta'mirlash"], 0],
        ["CSS nima qiladi?", ["Dizayn beradi", "Ma'lumot saqlaydi", "Serverni yoqadi", "Internetni tezlatadi"], 0],
        ["let yosh=15; nima?", ["O'zgaruvchi", "Funksiya", "Teg", "Rasm"], 0],
        ["JavaScript nima uchun?", ["Sahifani jonlantirish", "Faqat rang berish", "Printer", "Fayl arxivlash"], 0]
    ],

    inf: [
        ["1 bayt necha bit?", ["8", "4", "16", "2"], 0],
        ["Kompyuter qaysi sanoq tizimida ishlaydi?", ["Ikkilik", "O'nlik", "Rim", "Sakkizlik"], 0],
        ["Algoritm nima?", ["Qadamlar ketma-ketligi", "Dastur nomi", "Virus", "Monitor"], 0]
    ],

    fiz: [
        ["F=m·a qaysi qonun?", ["Nyutonning 2-qonuni", "Om qonuni", "Arximed", "Gey-Lyussak"], 0],
        ["120 km ni 2 soatda bosish tezligi?", ["60 km/soat", "240 km/soat", "40 km/soat", "100 km/soat"], 0]
    ],

    tar: [
        ["O'zbekiston mustaqilligi qachon?", ["1991", "1985", "2000", "1945"], 0],
        ["Amir Temur qayerda tug'ilgan?", ["Kesh", "Samarqand", "Buxoro", "Toshkent"], 0]
    ],

    geg: [
        ["O'zbekiston poytaxti?", ["Toshkent", "Samarqand", "Buxoro", "Nukus"], 0],
        ["Yerda nechta materik bor?", ["6", "5", "7", "4"], 0]
    ]
};


/* =====================================================
   5. MATEMATIKA TESTLARI
===================================================== */

function mathQ(r) {

    const n = [];
    const hard = r > 70 ? 3 : r > 40 ? 2 : 1;

    for (let i = 0; i < 20; i++) {

        let a = 1 + Math.floor(Math.random() * (9 * hard));
        let b = 1 + Math.floor(Math.random() * (9 * hard));
        let x = 1 + Math.floor(Math.random() * 10);

        let q, c;

        if (hard > 1 && i % 2) {
            q = `${a}x + ${b} = ${a * x + b}, x=?`;
            c = x;
        } else {
            q = `${a * hard} × ${b} = ?`;
            c = a * hard * b;
        }

        const o = new Set([c]);

        while (o.size < 4) {
            o.add(c + Math.floor(Math.random() * 9) - 4 || c + 5);
        }

        const arr = [...o].sort(() => Math.random() - .5);

        n.push([q, arr.map(String), arr.indexOf(c)]);
    }

    return n;
}


/* =====================================================
   6. YORDAMCHI FUNKSIYALAR
===================================================== */

const $ = s => document.querySelector(s);

const ld = (k, d) => {
    try {
        return JSON.parse(localStorage.getItem(k)) ?? d;
    } catch (e) {
        return d;
    }
};

const sv = (k, v) => {
    try {
        localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
};

let lang = ld("lang", "uz");
let cur = "alg";

const t = k => L[lang][k] || k;

const day = () => Math.floor(Date.now() / 864e5);

const week = () => Math.floor((Date.now() / 864e5 + 3) / 7);

function img(el, src, fb) {
    el.innerHTML = src
        ? `<img src="${src}" alt="" loading="lazy">`
        : fb;
}


/* =====================================================
   7. TIL VA MAVZU SOZLAMALARI
===================================================== */

function applyLang() {

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i]").forEach(e => {
        e.textContent = t(e.dataset.i);
    });

    document.querySelectorAll("[data-ph]").forEach(e => {
        e.placeholder = t(e.dataset.ph);
    });

    $("#lg").value = lang;

    drawSubjects();
    showLesson(cur);
    drawTestSel();
    drawRank();
    drawDir();

    if (!$("#msgs").children.length) {
        bot(t("hi"));
    }
}

$("#lg").onchange = e => {
    lang = e.target.value;
    sv("lang", lang);
    applyLang();
};


/* =====================================================
   8. DARK MODE
===================================================== */

const setT = m => {
    document.documentElement.dataset.t = m;
    sv("theme", m);
};

setT(
    ld(
        "theme",
        matchMedia("(prefers-color-scheme:dark)").matches
            ? "dark"
            : "light"
    )
);

$("#th").onclick = () => {
    setT(
        document.documentElement.dataset.t === "dark"
            ? "light"
            : "dark"
    );
};


/* =====================================================
   9. FANLAR RO'YXATI
===================================================== */



function drawSubjects() {

    const g = $("#sjGrid");
    g.innerHTML = "";

    S.forEach(s => {

        const d = document.createElement("button");

        d.className = "card sj";
        d.style.border = "1px solid var(--ln)";

        d.innerHTML = `
            <div class="ic">${s[1]}</div>
            <b>${s[2][["uz", "en", "ru"].indexOf(lang)]}</b>
            <div class="bar">
                <i style="width:${Math.min(100, (ld("prog", {})[s[0]] || 0) * 10)}%"></i>
            </div>
        `;

        let videoBtn = null;

        if (s[0] === "alg" || s[0] === "geo" || s[0] === "fiz" || s[0] === "geg" || s[0] === "tar" || s[0] === "inf" || s[0] === "it" || s[0] === "mob" || s[0] === "game" || s[0] === "mon" || s[0] === "ai") {

            videoBtn = document.createElement("button");
            videoBtn.className = "btn p";
            videoBtn.textContent = "📺 Darslarni ko‘rish";
            videoBtn.style.display = "none";

           videoBtn.onclick = (e) => {
                e.stopPropagation();

                window.location.href =
                    s[0] === "alg" ? "algebra.html" :
                    s[0] === "geo" ? "geometriya.html" :
                    s[0] === "geg" ? "geografiya.html" :
                    s[0] === "tar" ? "tarix.html" :
                    s[0] === "inf" ? "informatika.html" :
                    s[0] === "it" ? "dasturlash.html" :
                    s[0] === "mob" ? "mobilografiya.html" :
                    s[0] === "game" ? "oyin-yaratish.html" :
                    s[0] === "mon" ? "video-montaj.html" :
                    s[0] === "ai" ? "suniy-intellekt.html" :
                    "fizika.html";
            };
        }

        d.onclick = () => {

            cur = s[0];
            showLesson(cur);

            g.querySelectorAll(".video-btn").forEach(btn => {
                btn.style.display = "none";
            });

            if (videoBtn) {

                videoBtn.style.display = "block";
                videoBtn.style.opacity = "0";
                videoBtn.style.transform = "translateY(10px)";

                requestAnimationFrame(() => {
                    videoBtn.style.transition = "all 0.4s ease";
                    videoBtn.style.opacity = "1";
                    videoBtn.style.transform = "translateY(0)";
                });
            }

            ({
                behavior: "smooth",
                block: "center"
            });
        };

        g.append(d);

        if (videoBtn) {
            videoBtn.classList.add("video-btn");
            g.append(videoBtn);
        }

    });
}


/* =====================================================
   10. BUGUNGI DARSLAR
===================================================== */

function showLesson(id) {

    const s = S.find(x => x[0] === id);

    if (!s) return;

    const l = s[3][day() % s[3].length];

    $("#lesson").innerHTML = `
        <span class="tag">
            ${t("today")} · ${new Date().toLocaleDateString()}
        </span>

        <h3>
            ${s[1]} ${s[2][["uz", "en", "ru"].indexOf(lang)]}: ${l[0]}
        </h3>

        <p>${l[1]}</p>
    `;

    const p = ld("prog", {});
    const k = "seen" + id + day();

    if (!ld(k, 0)) {
        sv(k, 1);
        p[id] = (p[id] || 0) + 1;
        sv("prog", p);
    }
}


/* =====================================================
   11. AI USTOZ CHAT
===================================================== */

function bot(x, u) {

    const m = document.createElement("div");

    m.className = "m" + (u ? " u" : "");
    m.textContent = x;

    $("#msgs").append(m);
    $("#msgs").scrollTop = 1e5;
}


function answer(q) {

    q = q.toLowerCase();

    for (const s of S) {

        for (const l of s[3]) {

            if (
                q.includes(l[0].toLowerCase().split(" ")[0]) ||
                q.includes(s[2][0].toLowerCase())
            ) {
                return l[0] + ": " + l[1];
            }
        }
    }

    return "Bu savolga hozircha aniq javob topolmadim. Fan nomini yozing (masalan: Pifagor, algoritm, fizika) – mavzuni tushuntiraman.";
}


function ask() {

    const v = $("#q").value.trim();

    if (!v) return;

    bot(v, true);

    $("#q").value = "";

    setTimeout(() => {
        bot(answer(v));
    }, 400);
}

$("#send").onclick = ask;

$("#q").onkeydown = e => {
    if (e.key === "Enter") ask();
};


/* =====================================================
   12. REYTING
===================================================== */

const FAKE = [
    ["Azizbek Abdullayev", 100],
    ["Sardorbek Karimov", 98],
    ["Dilshodbek Nematov", 96]
];

const DIRS = () => S.map(s => s[2][["uz", "en", "ru"].indexOf(lang)]);


function drawDir() {
    $("#rd").innerHTML = DIRS()
        .map(d => `<option>${d}</option>`)
        .join("");
}


function user() {
    return ld("user", null);
}


function drawRank() {

    const u = user();
    const a = [...FAKE];

    if (u) {
        a.push([u.name + " " + u.surname, u.rating]);
    }

    a.sort((x, y) => y[1] - x[1]);

    $("#rkList").innerHTML = a.map((r, i) => `
        <div class="rk">
            <b>${["🥇", "🥈", "🥉"][i] || i + 1}</b>
            <span style="min-width:130px">${r[0]}</span>
            <div class="bar">
                <i style="width:${r[1]}%"></i>
            </div>
            <b>${r[1]}%</b>
        </div>
    `).join("");

    $("#me").textContent = u
        ? `${t("myr")}: ${u.rating}%`
        : "";
}


/* =====================================================
   13. RO'YXATDAN O'TISH
===================================================== */

$("#reg").onclick = () => {

    const n = $("#rn").value.trim();
    const s = $("#rs").value.trim();
    const p = $("#rp").value.trim();

    if (!n || !s || p.length < 7) return;

    const oldUser = user();

    const u = {
        name: n,
        surname: s,
        phone: p,
        dir: $("#rd").value,
        rating: oldUser ? oldUser.rating : 50,
        date: new Date().toLocaleDateString()
    };

    sv("user", u);

    const all = ld("users", []).filter(x => x.phone !== p);

    all.push(u);

    sv("users", all);

    drawRank();
};


/* =====================================================
   14. HAFTALIK TEST
===================================================== */

function drawTestSel() {

    $("#tsj").innerHTML = S.map(s => `
        <option value="${s[0]}">
            ${s[1]} ${s[2][["uz", "en", "ru"].indexOf(lang)]}
        </option>
    `).join("");
}

let T = null;


$("#tstart").onclick = () => {

    const u = user();

    if (!u) {
        $("#tbox").textContent = t("reg");
        return;
    }

    const id = $("#tsj").value;
    const key = "test" + id + week();

    if (ld(key, 0)) {
        $("#tbox").textContent = t("locked");
        return;
    }

    let qs = id === "alg" || id === "geo"
        ? mathQ(u.rating)
        : (Q[id] || []).slice().sort(() => Math.random() - .5).slice(0, 20);

    if (!qs.length) {
        $("#tbox").textContent = t("noq");
        return;
    }

    T = {
        id,
        key,
        qs,
        i: 0,
        ok: 0,
        pick: -1
    };

    drawQ();
};


function drawQ() {

    const q = T.qs[T.i];

    $("#tbox").innerHTML = `
        <div class="bar">
            <i style="width:${T.i / T.qs.length * 100}%"></i>
        </div>

        <p class="tag" style="margin-top:10px">
            ${T.i + 1} / ${T.qs.length}
        </p>

        <h3 style="margin:8px 0">
            ${q[0]}
        </h3>

        ${q[1].map((o, j) => `
            <button class="opt" data-j="${j}">
                <b>${"ABCD"[j]}</b> &nbsp; ${o}
            </button>
        `).join("")}

        <button class="btn p" id="nx">
            ${T.i + 1 === T.qs.length ? t("finish") : t("next")}
        </button>
    `;

    $("#tbox").querySelectorAll(".opt").forEach(b => {

        b.onclick = () => {

            T.pick = +b.dataset.j;

            $("#tbox").querySelectorAll(".opt").forEach(x => {
                x.classList.remove("on");
            });

            b.classList.add("on");
        };
    });


    $("#nx").onclick = () => {

        if (T.pick < 0) return;

        if (T.pick === q[2]) T.ok++;

        T.pick = -1;
        T.i++;

        T.i < T.qs.length
            ? drawQ()
            : endTest();
    };
}


function endTest() {

    const sc = Math.round(T.ok / T.qs.length * 100);

    const u = user();

    let d;

    if (sc >= 60) {
        d = sc >= 93 ? 5 :
            sc >= 85 ? 4 :
            sc >= 77 ? 3 :
            sc >= 69 ? 2 : 1;
    } else {
        d = -(sc < 20 ? 5 :
            sc < 35 ? 4 :
            sc < 45 ? 3 :
            sc < 52 ? 2 : 1);
    }

    u.rating = Math.max(0, Math.min(100, u.rating + d));

    sv("user", u);

    const all = ld("users", []).map(x =>
        x.phone === u.phone ? u : x
    );

    sv("users", all);
    sv(T.key, 1);

    $("#tbox").innerHTML = `
        <h3>
            ${t("ball")}: ${sc} / 100 ${sc >= 60 ? "🎉" : "💪"}
        </h3>

        <p>
            ${d > 0 ? t("up") : t("down")}:
            ${d > 0 ? "+" : ""}${d}%
        </p>
    `;

    drawRank();
}


/* =====================================================
   15. O'QITUVCHILAR
===================================================== */

CONFIG.TEACHERS.forEach(x => {

    const d = document.createElement("div");

    d.className = "card tch";

    d.innerHTML = `
        <div class="av">
            ${x.img
                ? `<img src="${x.img}" alt="" loading="lazy">`
                : "👤"
            }
        </div>

        <b>${x.name}</b>

        <div class="sub">${x.sub}</div>
    `;

    $("#tGrid").append(d);
});


/* =====================================================
   16. HERO RASMI
===================================================== */

img($("#heroPh"), CONFIG.HERO_IMG, "🎓");


/* =====================================================
   17. ADMIN PANELI
===================================================== */

$("#adminBtn").onclick = e => {

    e.preventDefault();

    if (prompt("Admin paroli:") !== CONFIG.ADMIN_PASSWORD) {
        return;
    }

    const a = ld("users", []);

    $("#adm").classList.remove("hide");

    $("#aTab").innerHTML = `
        <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Telefon</th>
            <th>Yo'nalish</th>
            <th>Reyting</th>
        </tr>

        ${a.map(u => `
            <tr>
                <td>${u.name}</td>
                <td>${u.surname}</td>
                <td>${u.phone}</td>
                <td>${u.dir}</td>
                <td>${u.rating}%</td>
            </tr>
        `).join("")}
    `;

    $("#adm").scrollIntoView({
        behavior: "smooth"
    });
};


/* =====================================================
   18. SMOOTH SCROLL VA KIRISH ANIMATSIYASI
===================================================== */

// Animatsiya sozlamalari

const motionOff = matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Sahifa elementlarini asta ko'rsatish

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (!motionOff) {

            el.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(25px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 700,
                    easing: "cubic-bezier(.22,1,.36,1)",
                    fill: "both"
                }
            );

        }

        el.classList.add("in");

        observer.unobserve(el);
    });

}, {
    threshold: 0.12
});


// Animatsiya beriladigan elementlar

document.querySelectorAll(
    ".rv, section, .hero, footer"
).forEach(el => {

    observer.observe(el);

});


// Kartochkalarga ketma-ket animatsiya

document.querySelectorAll(
    ".card"
).forEach((el, i) => {

    if (motionOff) return;

    el.animate(
        [
            {
                opacity: 0,
                transform: "translateY(18px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 600,
            delay: Math.min(i * 45, 500),
            easing: "ease-out",
            fill: "both"
        }
    );

});


// Tugmalar bosilganda yumshoq effekt

document.addEventListener("click", e => {

    const btn = e.target.closest("button");

    if (!btn || motionOff) return;

    btn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(.96)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 220,
            easing: "ease-out"
        }
    );

});


// Bosh sahifaga smooth qaytish

document.querySelectorAll('a[href^="#"]').forEach(a => {

    a.addEventListener("click", e => {

        const target = document.querySelector(
            a.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: motionOff ? "auto" : "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   19. SAYTNI ISHGA TUSHIRISH
===================================================== */

applyLang();

