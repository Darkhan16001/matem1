
"use strict";

// =============================================
// MATH LAB — BY DARKHAN
// 80 МИНУТ | 10 КОНСПЕКТ | 15 ОЙЫН СҰРАҒЫ
// =============================================

const content = document.getElementById("content");
const completedTasks = new Set();

let currentPage = 0;
let taskPoints = 0;
let highestZ = 110;

// =============================================
// МАТЕМАТИКАЛЫҚ БЕЛГІЛЕР
// =============================================

function F(top,bottom){
  return `<span class="frac">
    <span class="num">${top}</span>
    <span class="den">${bottom}</span>
  </span>`;
}

function P(base,top,bottom){
  return `${base}<sup>${F(top,bottom)}</sup>`;
}

function R(index,value){
  return `<span class="root">
    ${index===2?"":`<span class="root-index">${index}</span>`}
    <span class="root-sign">√</span>
    <span class="root-value">${value}</span>
  </span>`;
}

const M=x=>`<div class="math">${x}</div>`;
const S=x=>`<div class="step">${x}</div>`;
const N=x=>`<div class="note">${x}</div>`;
const H=(a,b)=>`
  <div class="eyebrow">${a}</div>
  <h2>${b}</h2>
`;

function picture(url,alt){
  return `<img class="photo" src="${url}"
    alt="${alt}" loading="lazy">`;
}

const mathImage =
 "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&auto=format&fit=crop";
const symbolImage =
 "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&auto=format&fit=crop";

// =============================================
// 10 КОНСПЕКТ — БАРЛЫҒЫ БӨЛЕК БЕТТЕР
// =============================================

const notebookPages = [

  // КОНСПЕКТ 1
  {
    title:"Дәреже және оның элементтері",
    text:`
      <p>
        Дәреже — бірдей көбейткіштердің
        көбейтіндісін ықшамдап жазу тәсілі.
        Дәрежелік өрнек негіз бен
        көрсеткіштен тұрады. Натурал
        көрсеткіш негізді өзіне неше
        рет көбейту керектігін көрсетеді.
        Негіз нөлге тең болмаса,
        оның нөлінші дәрежесі бірге
        тең болады. Теріс бүтін
        көрсеткіш кері шаманы
        табу қажеттігін білдіреді.
      </p>
      ${M("2⁴ = 2 · 2 · 2 · 2 = 16")}
      ${M("7⁰ = 1")}
      ${M(`2⁻³ = ${F("1","2³")} = ${F("1","8")}`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> 3³ + 2⁴
      ${S("3³ = 27")}
      ${S("2⁴ = 16")}
      ${S("27 + 16 = 43")}
      ${S("<b>Жауабы: 43</b>")}
    `,
    tasks:[
      ["4³ мәнін тап.","4³ = 64"],
      ["5² + 2³ есепте.","25 + 8 = 33"]
    ]
  },

  // КОНСПЕКТ 2
  {
    title:"Рационал көрсеткішті дәреже",
    text:`
      <p>
        Рационал көрсеткішті дәреже —
        көрсеткіші рационал сан болатын
        дәрежелік өрнек. Рационал сан
        екі бүтін санның қатынасы
        түрінде жазылады. Егер негіз
        оң сан болса, бөлшек көрсеткішті
        дәрежені түбір түрінде
        көрсетуге болады.
      </p>
      <p>
        Бөлшектің бөлімі қандай
        дәрежелі түбір табылатынын,
        ал алымы табылған сан
        қандай дәрежеге шығарылатынын
        көрсетеді. Бұл ереже
        есептеудің негізгі тәсілі.
      </p>
      ${M(`a<sup>${F("m","n")}</sup> = (${R("n","a")})<sup>m</sup>`)}
      ${M(`${P("16","1","2")} = ${R(2,"16")} = 4`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> ${P("27","2","3")}
      ${S(`${P("27","2","3")} = (${R(3,"27")})²`)}
      ${S("= 3² = 9")}
      ${S("<b>Жауабы: 9</b>")}
    `,
    tasks:[
      [P("64","1","3"),"∛64 = 4"],
      [P("25","3","2"),"(√25)³ = 5³ = 125"]
    ]
  },

  // КОНСПЕКТ 3
  {
    title:"Түбір мен бөлшек көрсеткіш",
    text:`
      <p>
        Түбір табу — дәрежелеуге
        кері математикалық амал.
        Мысалы, 5² = 25 болғандықтан,
        25 санының арифметикалық
        квадрат түбірі 5 болады.
        Ал 4³ = 64 болғандықтан,
        64 санының куб түбірі 4.
      </p>
      <p>
        Оң сан үшін квадрат түбір
        көрсеткіші екіден бір
        болатын дәрежеге тең.
        Куб түбір үштен бір,
        төртінші дәрежелі түбір
        төрттен бір көрсеткішпен
        жазылады.
      </p>
      ${M(`${R(2,"a")} = ${P("a","1","2")}`)}
      ${M(`${R(3,"a")} = ${P("a","1","3")}`)}
      ${M(`${R(4,"a")} = ${P("a","1","4")}`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> ${P("81","3","4")}
      ${S(`${P("81","3","4")} = (${R(4,"81")})³`)}
      ${S("= 3³ = 27")}
      ${S("<b>Жауабы: 27</b>")}
    `,
    tasks:[
      [R(3,"125"),"∛125 = 5"],
      [P("32","2","5"),"(⁵√32)² = 2² = 4"]
    ]
  },

  // КОНСПЕКТ 4
  {
    title:"Дәрежелерді көбейту",
    text:`
      <p>
        Егер екі немесе бірнеше
        дәреженің негізі бірдей
        болса, оларды көбейткенде
        көрсеткіштер қосылады.
        Негіз өзгеріссіз қалады.
        Бұл қасиет рационал және
        иррационал көрсеткішті
        дәрежелерге де қолданылады.
      </p>
      <p>
        Есептеу кезінде көрсеткіштерді
        ортақ бөлімге келтіру
        пайдалы. Көрсеткіштердің
        қосындысын тауып, одан
        кейін нәтижені есептейміз.
      </p>
      ${M("aʳ · aˢ = a<sup>r+s</sup>")}
      ${M(`${P("2","1","2")} · ${P("2","3","2")} = 2² = 4`)}
    `,
    worked:`
      <b>Үлгі есеп:</b>
      ${P("3","1","2")} · ${P("3","5","2")}
      ${S(`Көрсеткіштерді қосамыз: ${F("1","2")} + ${F("5","2")} = 3`)}
      ${S("3³ = 27")}
      ${S("<b>Жауабы: 27</b>")}
    `,
    tasks:[
      [`${P("5","1","3")} · ${P("5","2","3")}`,"5¹ = 5"],
      [`${P("2","1","4")} · ${P("2","7","4")}`,"2² = 4"]
    ]
  },

  // КОНСПЕКТ 5
  {
    title:"Дәрежелерді бөлу",
    text:`
      <p>
        Негіздері бірдей дәрежелерді
        бөлген кезде бірінші
        көрсеткіштен екінші
        көрсеткіш азайтылады.
        Негіз өзгеріссіз сақталады.
        Бөлімдегі өрнек нөлге
        тең болмауы қажет.
      </p>
      <p>
        Бөлшек көрсеткіштермен
        жұмыс істегенде алым мен
        бөлімді бірдей бөлімге
        келтіріп, көрсеткіштердің
        айырмасын табамыз.
      </p>
      ${M(`${F("aʳ","aˢ")} = a<sup>r−s</sup>`)}
      ${M(`${F(P("3","5","2"),P("3","1","2"))} = 3² = 9`)}
    `,
    worked:`
      <b>Үлгі есеп:</b>
      ${F(P("5","7","3"),P("5","1","3"))}
      ${S(`${F("7","3")} − ${F("1","3")} = 2`)}
      ${S("5² = 25")}
      ${S("<b>Жауабы: 25</b>")}
    `,
    tasks:[
      [F(P("2","5","2"),P("2","1","2")),"2² = 4"],
      [F(P("7","4","3"),P("7","1","3")),"7¹ = 7"]
    ]
  },

  // КОНСПЕКТ 6
  {
    title:"Дәрежені қайта дәрежелеу",
    text:`
      <p>
        Егер дәрежелік өрнек
        тағы бір дәрежеге шығарылса,
        оның көрсеткіштері өзара
        көбейтіледі. Бұл қасиет
        күрделі дәрежелерді
        ықшамдауға және түбірден
        құралған есептерді
        жеңілдетуге көмектеседі.
      </p>
      <p>
        Мысалы, санның квадрат
        түбірін тауып, оны
        квадратқа шығарсақ,
        бастапқы оң санды
        қайта аламыз.
      </p>
      ${M("(aʳ)ˢ = a<sup>r·s</sup>")}
      ${M(`(${P("16","1","2")})² = 16`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> (${P("64","2","3")})<sup>${F("1","2")}</sup>
      ${S(`${P("64","2","3")} = 16`)}
      ${S(`${R(2,"16")} = 4`)}
      ${S("<b>Жауабы: 4</b>")}
    `,
    tasks:[
      [`(${P("81","1","2")})²`,"81"],
      [`(${P("27","2","3")})<sup>${F("1","2")}</sup>`,"√9 = 3"]
    ]
  },

  // КОНСПЕКТ 7
  {
    title:"Теріс рационал көрсеткіш",
    text:`
      <p>
        Дәреже көрсеткішінің
        алдындағы теріс таңба
        нәтижені теріс етпейді.
        Ол берілген дәреженің
        кері шамасын алу
        керектігін білдіреді.
        Теріс көрсеткішті оң
        көрсеткішке ауыстырған соң,
        түбір табу мен дәрежелеу
        амалдарын орындаймыз.
      </p>
      ${M(`a⁻ʳ = ${F("1","aʳ")}`)}
      ${M(`${P("4","−1","2")} = ${F("1",R(2,"4"))} = ${F("1","2")}`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> ${P("32","−2","5")}
      ${S(`${P("32","−2","5")} = ${F("1",P("32","2","5"))}`)}
      ${S(`= ${F("1","2²")}`)}
      ${S(`<b>Жауабы: ${F("1","4")}</b>`)}
    `,
    tasks:[
      [P("9","−1","2"),F("1","3")],
      [P("8","−2","3"),F("1","4")]
    ]
  },

  // КОНСПЕКТ 8
  {
    title:"Күрделі рационал өрнектер",
    text:`
      <p>
        Күрделі дәрежелік
        өрнектер бірнеше
        математикалық амалдан
        тұрады. Мұндай есептерді
        шығарғанда алдымен
        түбір мен дәреженің
        мәндерін анықтаймыз.
        Содан кейін көбейту,
        бөлу, қосу немесе
        азайту амалдарын
        дұрыс ретпен орындаймыз.
      </p>
      <p>
        Әрбір аралық нәтижені
        дәптерге жазу есепті
        тексеруге көмектеседі.
      </p>
      ${M(`${P("16","3","4")} = 8`)}
      ${M(`${P("8","2","3")} = 4`)}
    `,
    worked:`
      <b>Үлгі есеп:</b>
      ${F(`${P("16","3","4")} · ${P("8","2","3")}`,"4")}
      ${S(`${F("8 · 4","4")}`)}
      ${S(`${F("32","4")} = 8`)}
      ${S("<b>Жауабы: 8</b>")}
    `,
    tasks:[
      [F(`${P("81","1","2")} · ${P("27","1","3")}`,"3"),
       "9"],
      [`${P("32","3","5")} − ${P("9","1","2")}`,"5"]
    ]
  },

  // КОНСПЕКТ 9
  {
    title:"Иррационал көрсеткіш",
    text:`
      <p>
        Иррационал санды
        екі бүтін санның
        қатынасы түрінде
        дәл жазу мүмкін емес.
        Мұндай санның ондық
        жазылуы шексіз және
        периодты емес.
        Егер осындай сан
        дәреженің көрсеткіші
        болса, ол иррационал
        көрсеткішті дәреже
        деп аталады.
      </p>
      <p>
        Оң негіз үшін мұндай
        дәреже нақты мәнге
        ие болады. Қажетті
        жағдайда есептеуді
        белгілі бір дәлдікке
        дейін жуықтаймыз.
      </p>
      ${M("2<sup>√2</sup> ≈ 2,6651")}
      ${M("3<sup>√2</sup> ≈ 4,7288")}
    `,
    worked:`
      <b>Үлгі есеп:</b> 2<sup>√2</sup>
      ${S("√2 ≈ 1,41421356")}
      ${S("2<sup>1,41421356</sup> ≈ 2,665144")}
      ${S("<b>Жауабы: ≈ 2,665</b>")}
    `,
    tasks:[
      ["2<sup>√3</sup>","≈ 3,322"],
      ["3<sup>√2</sup>","≈ 4,729"]
    ]
  },

  // КОНСПЕКТ 10
  {
    title:"Теңдеулер және қорытынды",
    text:`
      <p>
        Рационал көрсеткішті
        теңдеулерде белгісіз
        сан дәреженің негізі
        ретінде кездесуі мүмкін.
        Мұндай теңдеулерді
        шешкенде кері дәрежелеу
        тәсілін қолданамыз.
        Белгісізді тапқан соң,
        оны бастапқы теңдеуге
        қойып тексереміз.
      </p>
      <p>
        Рационал және иррационал
        көрсеткіштерге ортақ
        негізгі ережелерді
        білу есептерді дұрыс
        шешуге мүмкіндік береді.
      </p>
      ${M(`x<sup>${F("3","2")}</sup> = 27`)}
      ${M(`x = 27<sup>${F("2","3")}</sup> = 9`)}
    `,
    worked:`
      <b>Үлгі есеп:</b> x<sup>${F("3","2")}</sup> = 64
      ${S(`x = 64<sup>${F("2","3")}</sup>`)}
      ${S(`x = (${R(3,"64")})²`)}
      ${S("x = 4² = 16")}
      ${S("<b>Жауабы: 16</b>")}
    `,
    tasks:[
      [`x<sup>${F("1","2")}</sup> = 6`,"x = 36"],
      [`x<sup>${F("2","3")}</sup> = 16, x &gt; 0`,
       "x = 64"]
    ]
  }
];

// =============================================
// КОНСПЕКТ БЕТІН КӨРСЕТУ
// =============================================

function renderNotebook(item,index){
  return `
  <section class="slide">
    ${H(`КОНСПЕКТ ${index+1} / 10`,
       item.title)}

    <div class="notebook">
      <span class="copy-label">✍ ДӘПТЕРГЕ ЖАЗЫП АЛ</span>
      <h3>${index+1}. ${item.title}</h3>
      ${item.text}

      <h3 style="margin-top:25px">Шығарылған мысал</h3>
      ${item.worked}

      <h3 style="margin-top:25px">Өзіндік жұмыс</h3>
      <p>
        Төмендегі екі есепті алдымен
        дәптерге шығарыңдар. Әрбір
        амалдың орындалу ретін
        көрсетіп, шешімді толық
        жазыңдар. Содан кейін
        тақтадағы жауаппен
        салыстырыңдар.
      </p>

      ${item.tasks.map((task,i)=>`
        <div class="note-task">
          <b>${i+1}-есеп.</b>
          <div class="math">${task[0]}</div>

          <button class="reveal"
            onclick="toggleNote(${index},${i})">
            Жауапты көрсету
          </button>

          <div class="answer-panel"
            id="note_${index}_${i}" hidden>
            <b>Жауабы:</b> ${task[1]}
          </div>
        </div>
      `).join("")}
    </div>

    ${N("Конспект пен екі есепті дәптерге толық жазып болған соң келесі бетке өтіңдер.")}
  </section>`;
}

// =============================================
// НЕГІЗГІ САБАҚ БЕТТЕРІ
// =============================================

const slides = [

  // 1. КІРІСПЕ
  {
    name:"Кіріспе",
    html:()=>`
    <section class="slide">
      <div class="grid2">
        <div>
          <div class="eyebrow">МАТЕМАТИКА • 1 КУРС • 80 МИНУТ</div>
          <h1>
            Рационал және
            <span class="gradient">иррационал</span>
            көрсеткішті дәреже
          </h1>
          <p>
            Бүгінгі сабақта дәреже
            көрсеткіштерінің жаңа
            түрлерімен танысамыз.
            Олардың математикалық
            мағынасын, қасиеттерін
            және есеп шығаруда
            қолданылуын үйренеміз.
            Түбірлерді түрлендіру,
            бөлшек көрсеткішті
            дәрежелерді есептеу,
            иррационал көрсеткіштің
            жуық мәнін табу
            тәсілдерін қарастырамыз.
          </p>
          <span class="badge-text">10 конспект</span>
          <span class="badge-text">20 есеп</span>
          <span class="badge-text">3 команда</span>
          <span class="badge-text">15 ойын сұрағы</span>
          <span class="badge-text">80 минут</span>
        </div>

        <div class="card purple">
          ${picture(mathImage,"Математика формулалары")}
          ${M(`a<sup>${F("m","n")}</sup> = (${R("n","a")})<sup>m</sup>`)}
          <p class="center">Негізгі математикалық формула</p>
        </div>
      </div>
    </section>`
  },

  // 2. МАҚСАТ
  {
    name:"Сабақ мақсаты",
    html:()=>`
    <section class="slide">
      ${H("САБАҚ МАҚСАТЫ",
         "Бүгін нені үйренеміз?")}

      <div class="definition">
        <h3>Сабақтың негізгі мақсаты</h3>
        <p>
          Рационал және иррационал
          көрсеткішті дәрежелердің
          анықтамаларын меңгеру,
          олардың арасындағы
          айырмашылықты түсіну
          және математикалық
          өрнектерге дұрыс қолдану.
          Оқушылар дәрежелеу
          мен түбір табудың
          байланысын зерттейді.
        </p>
        <p>
          Сабақ барысында формулаларды
          жаттаумен шектелмей,
          олардың әр есепте
          қалай қолданылатынын
          талдаймыз. Дәптерге
          он конспект жазамыз,
          деңгейлік есептер
          шығарамыз және соңында
          үш команда арасында
          математикалық сайыс
          өткіземіз.
        </p>
      </div>

      <div class="grid3">
        <div class="card cyan">
          <h3>Түсіну</h3>
          <p>Дәреже көрсеткіштерінің түрлерін ажырату.</p>
        </div>
        <div class="card purple">
          <h3>Қолдану</h3>
          <p>Түбір мен дәреже формулаларын есептерге қолдану.</p>
        </div>
        <div class="card green">
          <h3>Дәлелдеу</h3>
          <p>Шешу жолын түсіндіру және жауапты тексеру.</p>
        </div>
      </div>

      ${N("Дәптерге тақырыпты, сабақ мақсатын және негізгі математикалық ұғымдарды жазып алыңдар.")}
    </section>`
  },

  // 3. РАЦИОНАЛ КӨРСЕТКІШ
  {
    name:"Рационал көрсеткіш",
    html:()=>`
    <section class="slide">
      ${H("ТЕОРИЯ",
         "Рационал көрсеткішті дәреже")}

      <div class="definition">
        <h3>Рационал көрсеткіштің мағынасы</h3>
        <p>
          Дәреже көрсеткіші тек
          натурал немесе бүтін
          сан ғана емес, бөлшек
          сан да бола алады.
          Осындай көрсеткішті
          дәрежелер рационал
          көрсеткішті дәрежелер
          деп аталады.
        </p>
        <p>
          Рационал көрсеткіштің
          бөлімі қандай дәрежелі
          түбір табылатынын,
          ал алымы нәтижені
          қандай дәрежеге шығару
          керектігін білдіреді.
          Сондықтан рационал
          көрсеткішті дәреже
          мен түбір табу
          бір-бірімен тығыз
          байланысты.
        </p>
      </div>

      <div class="grid2">
        <div class="card cyan">
          <h3>Негізгі формула</h3>
          ${M(`a<sup>${F("m","n")}</sup> = (${R("n","a")})<sup>m</sup>`)}
          <p>Жалпы түрде a оң сан, n натурал сан.</p>
        </div>

        <div class="card purple">
          <h3>Мысал</h3>
          ${M(P("27","2","3"))}
          ${S(`${R(3,"27")} = 3`)}
          ${S("3² = 9")}
          ${S("<b>Жауабы: 9</b>")}
        </div>
      </div>
    </section>`
  },

  // 4. ИРРАЦИОНАЛ КӨРСЕТКІШ
  {
    name:"Иррационал көрсеткіш",
    html:()=>`
    <section class="slide">
      ${H("ТЕОРИЯ",
        "Иррационал көрсеткішті дәреже")}

      <div class="definition">
        <h3>Негізгі түсіндірме</h3>
        <p>
          Иррационал сан — екі
          бүтін санның қатынасы
          түрінде дәл жазылмайтын
          нақты сан. Оған
          квадрат түбірі екі,
          квадрат түбірі үш
          және π сандары
          мысал бола алады.
        </p>
        <p>
          Егер дәреже көрсеткіші
          иррационал сан болса,
          өрнек иррационал
          көрсеткішті дәреже
          деп аталады. Негіз
          оң болғанда мұндай
          дәреженің нақты
          мәнін анықтауға
          болады. Оның сандық
          мәнін жуықтау үшін
          ғылыми калькуляторды
          пайдаланамыз.
        </p>
      </div>

      <div class="grid2">
        <div class="card purple">
          <h3>Иррационал көрсеткіш</h3>
          ${M("2<sup>√2</sup> ≈ 2,6651")}
          <p>Көрсеткіш — √2, ол иррационал сан.</p>
        </div>

        <div class="card cyan">
          <h3>Салыстыру</h3>
          ${M(P("3","1","2"))}
          <p>Мұндағы көрсеткіш рационал.</p>
          ${M("3<sup>√2</sup>")}
          <p>Мұндағы көрсеткіш иррационал.</p>
        </div>
      </div>
    </section>`
  }
];

// 10 КОНСПЕКТТІ ҚОСУ
notebookPages.forEach((item,index)=>{
  slides.push({
    name:`Конспект ${index+1}`,
    html:()=>renderNotebook(item,index)
  });
});

// =============================================
// БЕЙНЕСАБАҚ
// =============================================

slides.push({
  name:"Бейнесабақ",
  html:()=>`
  <section class="slide">
    ${H("БЕЙНЕСАБАҚ",
       "Рационал көрсеткішті дәреже туралы видео")}

    <div class="definition">
      <p>
        Бейнесабақ кезінде біз
        рационал көрсеткішті
        дәрежелердің қасиеттерін
        қайталаймыз. Формулалардың
        қалай қолданылатынын
        бақылап, видеодағы
        есептердің шешу
        жолдарын дәптердегі
        конспектпен салыстырамыз.
      </p>
    </div>

    <div class="grid2">
      <div class="card cyan">
        <h3>1-видео. Рационал көрсеткішті дәреже</h3>
        <iframe class="video-frame"
          src="https://www.youtube-nocookie.com/embed/cQYPx7wk264"
          title="Рационал көрсеткішті дәреже"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <a class="video-link"
          href="https://www.youtube.com/watch?v=cQYPx7wk264"
          target="_blank" rel="noopener noreferrer">
          ▶ YouTube-та ашу
        </a>
      </div>

      <div class="card purple">
        <h3>2-видео. Дәреженің қасиеттері</h3>
        <iframe class="video-frame"
          src="https://www.youtube-nocookie.com/embed/J99jUMk0y2M"
          title="Рационал көрсеткішті дәреже қасиеттері"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <a class="video-link"
          href="https://www.youtube.com/watch?v=J99jUMk0y2M"
          target="_blank" rel="noopener noreferrer">
          ▶ YouTube-та ашу
        </a>
      </div>
    </div>
    ${N("Сабақ уақытына сай бейнелердің тек қажетті бөліктерін қарауға болады.")}
  </section>`
});

// =============================================
// 4 ДЕҢГЕЙ • 20 ЕСЕП
// =============================================

const levels=[
  {
    name:"I деңгей — Жеңіл",
    points:5,
    questions:[
      [P("16","1","2"),4,"√16 = 4"],
      [P("27","1","3"),3,"∛27 = 3"],
      [P("81","1","4"),3,"⁴√81 = 3"],
      [`${P("25","1","2")} + ${P("8","1","3")}`,
       7,"5 + 2 = 7"],
      [P("32","1","5"),2,"⁵√32 = 2"]
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    questions:[
      [P("16","3","4"),8,"(⁴√16)³ = 8"],
      [P("27","2","3"),9,"(∛27)² = 9"],
      [P("8","4","3"),16,"(∛8)⁴ = 16"],
      [P("9","3","2"),27,"(√9)³ = 27"],
      [P("4","−3","2"),0.125,F("1","8")]
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    questions:[
      [F(`${P("16","3","4")} · ${P("27","1","3")}`,"6"),
       4,"(8 · 3) ÷ 6 = 4"],
      [F(`${P("81","1","2")} · ${P("8","2","3")}`,"3"),
       12,"(9 · 4) ÷ 3 = 12"],
      [`${P("32","3","5")} − ${P("9","1","2")}`,
       5,"8 − 3 = 5"],
      [F(`${P("25","1","2")} + ${P("27","2","3")}`,"7"),
       2,"(5 + 9) ÷ 7 = 2"],
      [`(${P("64","2","3")})<sup>${F("1","2")}</sup>`,
       4,"√16 = 4"]
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    questions:[
      ["2<sup>√2</sup> (0,001 дәлдікпен)",
       Math.pow(2,Math.SQRT2),"≈ 2,665",0.001],
      [`9<sup>${F("√2","2")}</sup> (0,001 дәлдікпен)`,
       Math.pow(9,Math.SQRT2/2),"≈ 4,729",0.001],
      [`x<sup>${F("3","2")}</sup> = 27. x = ?`,
       9,"x = 9"],
      ["(2<sup>√2</sup>)<sup>√2</sup>",
       4,"2² = 4"],
      [F(`${P("16","3","4")} · ${P("32","2","5")}`,
         `2<sup>${F("3","2")}</sup>`),
       8*Math.sqrt(2),"8√2 ≈ 11,314",0.001]
    ]
  }
];

function renderLevel(index){
  const level=levels[index];

  return `
  <section class="slide">
    ${H("ДЕҢГЕЙЛІК ЕСЕПТЕР",level.name)}
    <div class="level-banner">
      <strong>Әр дұрыс жауап: ${level.points} ұпай</strong>
      <p>Алдымен дәптерге шығарып, содан кейін жауапты тексеріңдер.</p>
    </div>

    <div class="tasks">
      ${level.questions.map((q,i)=>{
        const id=`${index}_${i}`;
        const done=completedTasks.has(id);

        return `
        <div class="task" id="task_${id}">
          <div class="task-head">
            <span>ЕСЕП ${i+1}</span>
            <span>+${level.points} ҰПАЙ</span>
          </div>
          <div class="task-formula">${q[0]}</div>
          <div class="task-actions">
            <input type="text" id="answer_${id}"
              placeholder="Жауабы" inputmode="decimal"
              ${done?"disabled":""}
              onkeydown="if(event.key==='Enter')checkTask(${index},${i})">
            <button class="check"
              onclick="checkTask(${index},${i})"
              ${done?"disabled":""}>
              ${done?"✓ Дұрыс":"Тексеру"}
            </button>
            <button class="solution-btn"
              onclick="toggleSolution('${id}')">
              Шешімін көру
            </button>
          </div>
          <div class="feedback ${done?"good":""}"
            id="feedback_${id}">
            ${done?"✓ Дұрыс шығарылған":""}
          </div>
          <div class="solution"
            id="solution_${id}" hidden>
            <b>Шешуі:</b> ${q[2]}
          </div>
        </div>`;
      }).join("")}
    </div>
  </section>`;
}

levels.forEach((level,index)=>{
  slides.push({
    name:level.name,
    html:()=>renderLevel(index)
  });
});

// =============================================
// КОМАНДАЛЫҚ ОЙЫН • 15 СҰРАҚ
// =============================================

const teams=[
  {name:"1-команда",score:0},
  {name:"2-команда",score:0},
  {name:"3-команда",score:0}
];

let gameQuestion=0;
let selectedOption=-1;
let answered=false;
let gameComplete=false;

const gameQuestions=[
  {
    q:P("16","1","2"),
    options:["2","4","8","16"],
    correct:1,why:"√16 = 4"
  },
  {
    q:P("27","2","3"),
    options:["3","6","9","12"],
    correct:2,why:"(∛27)² = 9"
  },
  {
    q:P("81","1","4"),
    options:["9","3","4","6"],
    correct:1,why:"⁴√81 = 3"
  },
  {
    q:P("32","2","5"),
    options:["2","4","8","16"],
    correct:1,why:"(⁵√32)² = 4"
  },
  {
    q:P("9","3","2"),
    options:["18","9","81","27"],
    correct:3,why:"(√9)³ = 27"
  },
  {
    q:P("4","−1","2"),
    options:["2",F("1","2"),F("1","4"),"−2"],
    correct:1,why:`${F("1",R(2,"4"))} = ${F("1","2")}`
  },
  {
    q:P("125","2","3"),
    options:["15","5","25","50"],
    correct:2,why:"(∛125)² = 25"
  },
  {
    q:`${P("2","1","2")} · ${P("2","3","2")}`,
    options:["2","4","6","8"],
    correct:1,why:"2² = 4"
  },
  {
    q:P("32","−2","5"),
    options:[F("1","2"),F("1","4"),"4","−4"],
    correct:1,why:`${F("1","(⁵√32)²")} = ${F("1","4")}`
  },
  {
    q:"2<sup>√2</sup> ≈ ?",
    options:["1,414","2,665","3,414","4,729"],
    correct:1,why:"2 дәрежесінде √2 ≈ 2,665"
  },
  {
    q:`(${P("64","2","3")})<sup>${F("1","2")}</sup>`,
    options:["4","8","16","32"],
    correct:0,why:"√16 = 4"
  },
  {
    q:`x<sup>${F("3","2")}</sup> = 27. x = ?`,
    options:["3","6","9","27"],
    correct:2,why:`x = 27<sup>${F("2","3")}</sup> = 9`
  },
  {
    q:`${P("8","2","3")} + ${P("25","1","2")}`,
    options:["7","9","11","13"],
    correct:1,why:"4 + 5 = 9"
  },
  {
    q:F(P("3","5","2"),P("3","1","2")),
    options:["3","6","9","27"],
    correct:2,why:"3² = 9"
  },
  {
    q:`(${P("16","1","2")})³`,
    options:["16","32","64","128"],
    correct:2,why:"4³ = 64"
  }
];

function renderScoreboard(activeTeam=-1){
  return `<div class="teams">
    ${teams.map((team,i)=>`
      <div class="team
        ${activeTeam===i?"active":""}">
        <div class="team-name">${team.name}</div>
        <div class="team-score">${team.score}</div>
        <div class="team-status">
          ${activeTeam===i?"ҚАЗІР ЖАУАП БЕРЕДІ":"Ұпай"}
        </div>
      </div>
    `).join("")}
  </div>`;
}

function renderGame(){
  if(gameComplete) return renderGameEnd();

  const q=gameQuestions[gameQuestion];
  const teamIndex=gameQuestion%3;
  const letters=["A","B","C","D"];

  return `
  <section class="slide">
    ${H("КОМАНДАЛЫҚ ОЙЫН • 15 МИНУТ",
      "Үш команданың математикалық сайысы")}

    ${renderScoreboard(teamIndex)}

    <div class="game-question">
      <div class="game-meta">
        <span>СҰРАҚ ${gameQuestion+1} / 15</span>
        <span>ДҰРЫС ЖАУАП +10 ҰПАЙ</span>
      </div>
      <h3>${teams[teamIndex].name} жауап береді</h3>
      <div class="game-formula">${q.q}</div>
    </div>

    <div class="options">
      ${q.options.map((choice,i)=>`
        <button class="option
          ${answered && i===q.correct?"correct":""}
          ${answered && i===selectedOption && i!==q.correct?"wrong":""}"
          onclick="chooseOption(${i})"
          ${answered?"disabled":""}>
          <span class="option-letter">${letters[i]}</span>
          <span>${choice}</span>
        </button>
      `).join("")}
    </div>

    ${
      answered
      ? `
        <div class="game-feedback
          ${selectedOption===q.correct?"good":"bad"}">
          <b>${selectedOption===q.correct
            ?"✓ Дұрыс! Командаға +10 ұпай"
            :"✕ Қате жауап. Ұпай берілмейді"}</b>
          <p>Шешуі: ${q.why}</p>

          <button class="game-next"
            onclick="nextGameQuestion()">
            ${gameQuestion===14
              ?"Қорытындыны көрсету →"
              :"Келесі команда →"}
          </button>
        </div>
      `
      : `
        <div class="game-feedback">
          Төрт нұсқаның ішінен бір дұрыс жауапты таңдаңдар.
        </div>
      `
    }
  </section>`;
}

function chooseOption(optionIndex){
  if(answered || gameComplete) return;

  selectedOption=optionIndex;
  answered=true;

  if(optionIndex===gameQuestions[gameQuestion].correct){
    teams[gameQuestion%3].score+=10;
  }

  // Жауаптан кейін КЕЗЕК АУЫСПАЙДЫ.
  // Келесі батырмасын басу қажет.
  renderSlide();
}

function nextGameQuestion(){
  if(!answered || gameComplete) return;

  if(gameQuestion===gameQuestions.length-1){
    gameComplete=true;
  }else{
    gameQuestion++;
    answered=false;
    selectedOption=-1;
  }

  renderSlide();
}

function renderGameEnd(){
  const max=Math.max(...teams.map(t=>t.score));
  const winners=teams.filter(t=>t.score===max);

  const winnerText=winners.length===1
    ? `Жеңімпаз: ${winners[0].name}`
    : `Тең нәтиже: ${winners.map(t=>t.name).join(", ")}`;

  return `
  <section class="slide">
    ${H("КОМАНДАЛЫҚ ОЙЫННЫҢ ҚОРЫТЫНДЫСЫ",
       "15 сұрақ аяқталды!")}

    <div class="teams">
      ${teams.map(team=>`
        <div class="team ${team.score===max?"winner":""}">
          <div class="team-name">${team.name}</div>
          <div class="team-score">${team.score}</div>
          <div class="team-status">5 сұрақ</div>
        </div>
      `).join("")}
    </div>

    <div class="game-summary">
      <h2>🏆 ${winnerText}</h2>
      <p>
        Барлығы 15 сұрақ орындалды.
        Әр командаға 5 сұрақтан берілді.
        Әр дұрыс жауап 10 ұпаймен бағаланды.
      </p>
      <button class="game-next"
        onclick="restartGame()">↻ Қайта бастау</button>
    </div>
  </section>`;
}

function restartGame(){
  teams.forEach(team=>team.score=0);
  gameQuestion=0;
  selectedOption=-1;
  answered=false;
  gameComplete=false;
  renderSlide();
}

slides.push({
  name:"3 командалық ойын",
  html:()=>renderGame()
});

// =============================================
// ҮЙ ЖҰМЫСЫ
// =============================================

slides.push({
  name:"Үй жұмысы",
  html:()=>`
  <section class="slide">
    ${H("ҮЙ ТАПСЫРМАСЫ",
       "Дәптерге орындайтын тапсырмалар")}

    <div class="grid2">
      <div class="card cyan">
        <h3>Теориялық жұмыс</h3>
        <p>
          Рационал және иррационал
          көрсеткішті дәрежелердің
          анықтамаларын өз сөздеріңмен
          жазыңдар. Дәреженің негізгі
          төрт қасиетін формулаларымен
          көрсетіп, әрқайсысына
          бір мысал құрастырыңдар.
        </p>
      </div>

      <div class="card purple">
        <h3>Есептер</h3>
        <div class="homework">
          1. ${P("64","2","3")} · ${P("16","1","2")}
        </div>
        <div class="homework">
          2. ${F(`${P("81","3","4")} · ${P("32","2","5")}`,"9")}
        </div>
        <div class="homework">
          3. 2<sup>√3</sup> санын 0,001 дәлдікпен есепте.
        </div>
        <div class="homework">
          4. x<sup>${F("3","2")}</sup> = 64
        </div>
      </div>
    </div>

    ${N("Есептердің тек жауабын емес, толық шығару жолын дәптерге жазыңдар.")}
  </section>`
});

// =============================================
// ҚОРЫТЫНДЫ
// =============================================

slides.push({
  name:"Қорытынды",
  html:()=>`
  <section class="slide center">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1>Сабақ <span class="gradient">аяқталды!</span></h1>
    <p>
      Бүгін біз рационал және
      иррационал көрсеткішті
      дәрежелердің анықтамаларын,
      қасиеттерін, түбірлермен
      байланысын және есептеу
      тәсілдерін меңгердік.
    </p>

    <div class="big-score">${taskPoints}</div>
    <h3>Деңгейлік есептерден жиналған ұпай</h3>
    <p>${completedTasks.size} / 20 дұрыс есеп</p>

    <h3 style="margin-top:30px">Командалық ойын</h3>
    ${renderScoreboard()}

    <h2>Назарларыңызға рақмет!</h2>
    <p>BY DARKHAN</p>
  </section>`
});

// =============================================
// СЛАЙДТАРДЫ БАСҚАРУ
// =============================================

const gamePageIndex=slides.findIndex(
  slide=>slide.name==="3 командалық ойын"
);

function renderSlide(){
  content.innerHTML=slides[currentPage].html();
  content.scrollTop=0;

  document.getElementById("pageCounter").textContent=
    `${currentPage+1} / ${slides.length}`;

  document.getElementById("pageTitle").textContent=
    slides[currentPage].name;

  document.getElementById("pageFill").style.width=
    `${((currentPage+1)/slides.length)*100}%`;

  document.getElementById("backBtn").disabled=
    currentPage===0;

  document.getElementById("nextBtn").disabled=
    currentPage===slides.length-1;

  document.getElementById("nextBtn").textContent=
    currentPage===gamePageIndex && !gameComplete
      ? "Келесі команда →"
      : "Келесі →";
}

function nextPage(){
  // Ойынның ішінде басты Келесі батырмасы
  // де командаларды ауыстырады.
  if(currentPage===gamePageIndex && !gameComplete){
    if(!answered){
      alert("Алдымен төрт нұсқаның біреуін таңдаңыз.");
      return;
    }
    nextGameQuestion();
    return;
  }

  if(currentPage<slides.length-1){
    currentPage++;
    renderSlide();
  }
}

function prevPage(){
  if(currentPage>0){
    currentPage--;
    renderSlide();
  }
}

function toggleFullscreen(){
  if(document.fullscreenElement){
    document.exitFullscreen();
  }else{
    document.documentElement.requestFullscreen?.();
  }
}

document.addEventListener("keydown",event=>{
  if(event.target.matches("input,textarea")) return;

  if(event.key==="ArrowRight") nextPage();
  if(event.key==="ArrowLeft") prevPage();
});

// =============================================
// КОНСПЕКТ ЖӘНЕ ЕСЕП ЖАУАПТАРЫ
// =============================================

function toggleNote(noteIndex,taskIndex){
  const el=document.getElementById(
    `note_${noteIndex}_${taskIndex}`
  );
  if(el) el.hidden=!el.hidden;
}

function toggleSolution(id){
  const el=document.getElementById("solution_"+id);
  if(el) el.hidden=!el.hidden;
}

function checkTask(levelIndex,questionIndex){
  const level=levels[levelIndex];
  const question=level.questions[questionIndex];
  const id=`${levelIndex}_${questionIndex}`;

  if(completedTasks.has(id)) return;

  const input=document.getElementById("answer_"+id);
  const feedback=document.getElementById("feedback_"+id);

  if(!input.value.trim()){
    feedback.textContent="Алдымен жауапты жазыңыз.";
    feedback.className="feedback bad";
    return;
  }

  let value;

  try{
    value=calculateExpression(input.value);
  }catch{
    feedback.textContent=
      "Жауапты сан немесе математикалық өрнек түрінде енгізіңіз.";
    feedback.className="feedback bad";
    return;
  }

  const expected=question[1];
  const tolerance=question[3]??0.000001;

  if(Math.abs(value-expected)<=tolerance){
    completedTasks.add(id);
    taskPoints+=level.points;

    document.getElementById("taskScore").textContent=
      taskPoints;

    feedback.textContent=
      `✓ Дұрыс! +${level.points} ұпай`;
    feedback.className="feedback good";

    input.disabled=true;

    const button=document.querySelector(
      `#task_${id} .check`
    );

    button.disabled=true;
    button.textContent="✓ Дұрыс";
  }else{
    feedback.textContent=
      "Жауап дұрыс емес. Қайта есептеп көр.";
    feedback.className="feedback bad";
  }
}

// =============================================
// АЛМАТЫ УАҚЫТЫ ЖӘНЕ 80 МИНУТ
// =============================================

const LESSON_DURATION=80*60*1000;

let lessonRunning=false;
let lessonPaused=false;
let lessonFinished=false;
let lessonStartedAt=0;
let savedElapsed=0;

function clockFormat(ms,roundUp=false){
  const seconds=Math.max(
    0,roundUp?Math.ceil(ms/1000):Math.floor(ms/1000)
  );

  const minutes=Math.floor(seconds/60);
  const remaining=seconds%60;

  return String(minutes).padStart(2,"0")+":"+
         String(remaining).padStart(2,"0");
}

function startLesson(){
  if(lessonFinished) return;
  if(lessonRunning && !lessonPaused) return;

  lessonRunning=true;
  lessonPaused=false;
  lessonStartedAt=Date.now();

  document.getElementById("timerStart").textContent=
    "▶ Жүріп жатыр";

  document.getElementById("timerPause").textContent=
    "⏸ Үзіліс";

  updateClock();
}

function pauseLesson(){
  if(!lessonRunning || lessonFinished) return;

  if(!lessonPaused){
    savedElapsed+=Date.now()-lessonStartedAt;
    lessonPaused=true;

    document.getElementById("timerPause").textContent=
      "▶ Жалғастыру";
  }else{
    lessonStartedAt=Date.now();
    lessonPaused=false;

    document.getElementById("timerPause").textContent=
      "⏸ Үзіліс";
  }

  updateClock();
}

function updateClock(){
  const time=new Intl.DateTimeFormat("kk-KZ",{
    timeZone:"Asia/Almaty",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:false
  }).format(new Date());

  document.getElementById("liveClock").textContent=time;

  let elapsed=savedElapsed;

  if(lessonRunning && !lessonPaused && !lessonFinished){
    elapsed+=Date.now()-lessonStartedAt;
  }

  elapsed=Math.min(elapsed,LESSON_DURATION);

  const remaining=Math.max(
    0,LESSON_DURATION-elapsed
  );

  document.getElementById("elapsed").textContent=
    clockFormat(elapsed);

  document.getElementById("remaining").textContent=
    clockFormat(remaining,true);

  document.getElementById("timeFill").style.width=
    `${elapsed/LESSON_DURATION*100}%`;

  let status="Сабақ басталған жоқ";

  if(lessonRunning){
    status=lessonPaused
      ?"Сабақ үзілісте"
      :"Сабақ жүріп жатыр";
  }

  if(lessonRunning && remaining===0 && !lessonFinished){
    lessonFinished=true;
    lessonPaused=true;
    savedElapsed=LESSON_DURATION;

    document.getElementById("remaining")
      .classList.add("finished");

    document.getElementById("timerStart").disabled=true;
    document.getElementById("timerPause").disabled=true;

    status="80 минут аяқталды";
    alert("80 минут аяқталды. Сабақты қорытындылаңыз.");
  }

  document.getElementById("timerStatus").textContent=status;
}

// =============================================
// АЛМАТЫ ТЕМПЕРАТУРАСЫ
// =============================================

async function updateWeather(){
  const el=document.getElementById("weather");

  const url=
    "https://api.open-meteo.com/v1/forecast"+
    "?latitude=43.2389"+
    "&longitude=76.8897"+
    "&current=temperature_2m"+
    "&timezone=Asia%2FAlmaty";

  try{
    const response=await fetch(url);

    if(!response.ok){
      throw Error("Weather unavailable");
    }

    const data=await response.json();
    const temp=data.current?.temperature_2m;

    if(typeof temp!=="number"){
      throw Error("Temperature unavailable");
    }

    el.textContent=
      `${temp>0?"+":""}${temp.toFixed(1)}°C`;

    el.title="Алматы қаласының ағымдағы ауа температурасы";
  }catch{
    el.textContent="Қолжетімсіз";
    el.title="Ауа температурасы үшін интернет қажет";
  }
}

// =============================================
// МАТЕМАТИКАЛЫҚ ӨРНЕКТЕРДІ ЕСЕПТЕУ
// =============================================

function calculateExpression(expression){
  const input=String(expression)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/×/g,"*")
    .replace(/÷/g,"/")
    .replace(/[−–]/g,"-")
    .replace(/π/g,"pi")
    .replace(/√\(/g,"sqrt(")
    .replace(/√(?=\d)/g,"sqrt");

  if(input.length>250) throw Error("Too long");

  const tokens=[];
  const tokenRegex=
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|[a-zA-Z]+|[()+*/^%\-]/gy;

  let pos=0;

  while(pos<input.length){
    tokenRegex.lastIndex=pos;
    const match=tokenRegex.exec(input);

    if(!match) throw Error("Invalid character");

    tokens.push(match[0]);
    pos=tokenRegex.lastIndex;
  }

  let index=0;

  const peek=()=>tokens[index];
  const next=()=>tokens[index++];
  const rad=x=>x*Math.PI/180;

  function primary(){
    const token=next();

    if(token===undefined) throw Error("Incomplete expression");

    if(token==="("){
      const value=addition();

      if(next()!==")") throw Error("Missing bracket");

      return value;
    }

    if(token==="pi") return Math.PI;
    if(token==="e") return Math.E;

    const functions={
      sqrt:x=>Math.sqrt(x),
      sin:x=>Math.sin(rad(x)),
      cos:x=>Math.cos(rad(x)),
      tan:x=>Math.tan(rad(x)),
      cot:x=>1/Math.tan(rad(x)),
      asin:x=>Math.asin(x)*180/Math.PI,
      acos:x=>Math.acos(x)*180/Math.PI,
      atan:x=>Math.atan(x)*180/Math.PI,
      log:x=>Math.log10(x),
      ln:x=>Math.log(x)
    };

    if(Object.prototype.hasOwnProperty.call(functions,token)){
      if(next()!=="(") throw Error("Missing bracket");

      const x=addition();

      if(next()!==")") throw Error("Missing bracket");

      if(token==="tan" && Math.abs(Math.cos(rad(x)))<1e-12){
        throw Error("Undefined tangent");
      }

      if(token==="cot" && Math.abs(Math.sin(rad(x)))<1e-12){
        throw Error("Undefined cotangent");
      }

      return functions[token](x);
    }

    if(!/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(token)){
      throw Error("Invalid number");
    }

    return Number(token);
  }

  function power(){
    let value=primary();

    while(peek()==="%"){
      next();
      value/=100;
    }

    if(peek()==="^"){
      next();
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary(){
    if(peek()==="+"){
      next();
      return unary();
    }
    if(peek()==="-"){
      next();
      return -unary();
    }
    return power();
  }

  function multiply(){
    let value=unary();

    while(peek()==="*" || peek()==="/"){
      const op=next();
      const rhs=unary();

      value=op==="*"?value*rhs:value/rhs;
    }

    return value;
  }

  function addition(){
    let value=multiply();

    while(peek()==="+" || peek()==="-"){
      const op=next();
      const rhs=multiply();

      value=op==="+"?value+rhs:value-rhs;
    }

    return value;
  }

  const result=addition();

  if(index!==tokens.length || !Number.isFinite(result)){
    throw Error("Calculation error");
  }

  return Math.abs(result)<1e-12?0:result;
}

// =============================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// =============================================

const simpleKeys=[
  ["AC","clear"],["⌫","back"],["%","%"],["÷","÷"],
  ["7","7"],["8","8"],["9","9"],["×","×"],
  ["4","4"],["5","5"],["6","6"],["−","−"],
  ["1","1"],["2","2"],["3","3"],["+","+"],
  ["0","0"],[".", "."],["(","("],[")",")"],
  ["=","equal"],["xʸ","^"]
];

const scienceKeys=[
  ["sin","sin("],["cos","cos("],["tan","tan("],
  ["cot","cot("],["π","π"],

  ["asin","asin("],["acos","acos("],["atan","atan("],
  ["√","sqrt("],["xʸ","^"],

  ["log","log("],["ln","ln("],["x²","^2"],
  ["e","e"],["%","%"],

  ["AC","clear"],["⌫","back"],["(","("],
  [")",")"],["÷","÷"],

  ["7","7"],["8","8"],["9","9"],
  ["×","×"],["−","−"],

  ["4","4"],["5","5"],["6","6"],
  ["+","+"],["1","1"],

  ["2","2"],["3","3"],["0","0"],
  [".","."],["=","equal"]
];

function renderCalcKeys(type,keys){
  const container=document.getElementById(
    "keys-"+type
  );

  container.innerHTML=keys.map(([label,value])=>{
    let className="";

    if(value==="clear") className="danger";
    if(value==="equal") className="equals";

    if(type==="simple" &&
       (value==="equal" || value==="^")){
      className+=" wide";
    }

    const action=
      value==="clear"
      ? `clearCalc('${type}')`
      : value==="back"
      ? `backCalc('${type}')`
      : value==="equal"
      ? `equalCalc('${type}')`
      : `pressCalc('${type}','${value}')`;

    return `<button class="${className}"
      onclick="${action}">${label}</button>`;
  }).join("");
}

function calcScreen(type){
  return document.getElementById("screen-"+type);
}

function pressCalc(type,value){
  const screen=calcScreen(type);

  if(screen.value==="Қате") screen.value="0";

  const operators=["+", "−","×","÷","^","%"];

  if(screen.value==="0" &&
     !operators.includes(value) &&
     value!=="." && value!==")"){
    screen.value=value;
  }else{
    screen.value+=value;
  }
}

function clearCalc(type){
  calcScreen(type).value="0";
}

function backCalc(type){
  const screen=calcScreen(type);
  screen.value=screen.value.slice(0,-1)||"0";
}

function equalCalc(type){
  const screen=calcScreen(type);

  try{
    const value=calculateExpression(screen.value);
    screen.value=String(Number(value.toPrecision(12)));
  }catch{
    screen.value="Қате";
  }
}

document.querySelectorAll(".calc-screen").forEach(el=>{
  el.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
      equalCalc(
        el.id==="screen-simple"?"simple":"science"
      );
    }
  });
});

function showCalc(type){
  const el=document.getElementById("calc-"+type);
  el.style.display="block";
  el.style.zIndex=++highestZ;
  keepCalcVisible(el);
}

function hideCalc(type){
  document.getElementById("calc-"+type).style.display="none";
}

function resizeCalc(type,direction){
  const el=document.getElementById("calc-"+type);
  const width=el.getBoundingClientRect().width;

  el.style.width=Math.max(
    235,Math.min(470,width+direction*35)
  )+"px";

  const size=parseFloat(getComputedStyle(el).fontSize);

  el.style.fontSize=Math.max(
    12,Math.min(20,size+direction)
  )+"px";

  keepCalcVisible(el);
}

function keepCalcVisible(el){
  const rect=el.getBoundingClientRect();

  if(rect.right>innerWidth){
    el.style.left=Math.max(
      0,innerWidth-rect.width-5
    )+"px";
    el.style.right="auto";
  }

  if(rect.bottom>innerHeight){
    el.style.top=Math.max(
      0,innerHeight-rect.height-5
    )+"px";
  }

  if(rect.left<0) el.style.left="0px";
  if(rect.top<0) el.style.top="0px";
}

// Кез келген бос бөлігінен ұстап жылжыту
document.querySelectorAll(".calculator").forEach(el=>{
  let dragging=false;
  let startX=0,startY=0;
  let originalX=0,originalY=0;

  el.addEventListener("pointerdown",event=>{
    el.style.zIndex=++highestZ;

    if(event.target.closest("button,input,a")) return;

    const rect=el.getBoundingClientRect();

    // Төменгі оң жақ бұрыш — өлшемін өзгерту
    if(event.clientX>rect.right-22 &&
       event.clientY>rect.bottom-22){
      return;
    }

    dragging=true;
    startX=event.clientX;
    startY=event.clientY;
    originalX=rect.left;
    originalY=rect.top;

    el.style.left=rect.left+"px";
    el.style.top=rect.top+"px";
    el.style.right="auto";

    el.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  el.addEventListener("pointermove",event=>{
    if(!dragging) return;

    const x=originalX+event.clientX-startX;
    const y=originalY+event.clientY-startY;

    el.style.left=Math.max(
      0,Math.min(innerWidth-el.offsetWidth,x)
    )+"px";

    el.style.top=Math.max(
      0,Math.min(innerHeight-el.offsetHeight,y)
    )+"px";
  });

  el.addEventListener("pointerup",()=>dragging=false);
  el.addEventListener("pointercancel",()=>dragging=false);
});

// =============================================
// САЙТТЫ ІСКЕ ҚОСУ
// =============================================

renderCalcKeys("simple",simpleKeys);
renderCalcKeys("science",scienceKeys);

renderSlide();
updateClock();
updateWeather();

setInterval(updateClock,1000);
setInterval(updateWeather,15*60*1000);
