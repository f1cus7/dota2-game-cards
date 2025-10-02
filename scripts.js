const containerNode = document.getElementById("container-main");
const mainNode = document.getElementById("main1");
const containerStrenght = document.getElementById("strenght1");
const containerAgallity = document.getElementById("agallity1");
const containerIntelligence = document.getElementById("intelligence1");
const containerUniversal = document.getElementById("universal1");
const containerSettings = document.getElementById("settings1");

const heroes = [
  {
    img: "images/npc_dota_hero_abaddon.webm",
    name: "Абаддон",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_abyssal_underlord.webm",
    name: "Андерлорд",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_alchemist.webm",
    name: "Алхимик",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_ancient_apparition.webm",
    name: "Аппарат",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_antimage.webm",
    name: "Антимаг",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_arc_warden.webm",
    name: "Арк Варден",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_axe.webm",
    name: "Акс",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_bane.webm",
    name: "Бэйн",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_batrider.webm",
    name: "Бэтрайдер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_beastmaster.webm",
    name: "Бистмастер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_bloodseeker.webm",
    name: "Бладсикер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_bounty_hunter.webm",
    name: "Баунти Хантер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_brewmaster.webm",
    name: "Брюмастер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_bristleback.webm",
    name: "Бристлбек",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_broodmother.webm",
    name: "Бруда",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_centaur.webm",
    name: "Кентавр",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_chaos_knight.webm",
    name: "Хаос Найт",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_chen.webm",
    name: "Чен",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_clinkz.webm",
    name: "Клинкз",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_crystal_maiden.webm",
    name: "Кристал Мэйден",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_dark_seer.webm",
    name: "Дарк Сиир",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_dark_willow.webm",
    name: "Дарк Виллоу",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_dawnbreaker.webm",
    name: "Даунбрейкер",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_dazzle.webm",
    name: "Дазл",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_death_prophet.webm",
    name: "Дез Профет",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_disruptor.webm",
    name: "Дизраптор",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_doom_bringer.webm",
    name: "Дум",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_dragon_knight.webm",
    name: "Драгон Найт",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_drow_ranger.webm",
    name: "Дроу Рейнджер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_earth_spirit.webm",
    name: "Эрс спирит",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_earthshaker.webm",
    name: "Шейкер",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_elder_titan.webm",
    name: "Элдер Титан",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_ember_spirit.webm",
    name: "Эмбер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_enchantress.webm",
    name: "Энчантрес",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_enigma.webm",
    name: "Энигма",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_faceless_void.webm",
    name: "Фейсес Войд",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_furion.webm",
    name: "Фурион",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_grimstroke.webm",
    name: "Гримстроук",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_gyrocopter.webm",
    name: "Гирокоптер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_hoodwink.webm",
    name: "Худвинк",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_huskar.webm",
    name: "Хускар",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_invoker.webm",
    name: "Инвокер",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_jakiro.webm",
    name: "Джакиро",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_juggernaut.webm",
    name: "Джаггернаут",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_keeper_of_the_light.webm",
    name: "Котл",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_kez.webm",
    name: "Кез",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_kunkka.webm",
    name: "Кунка",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_legion_commander.webm",
    name: "Легионка",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_leshrac.webm",
    name: "Лешрак",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_lich.webm",
    name: "Лич",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_life_stealer.webm",
    name: "Лайфстиллер",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_lina.webm",
    name: "Лина",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_lion.webm",
    name: "Лион",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_lone_druid.webm",
    name: "Лон Друид",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_luna.webm",
    name: "Луна",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_lycan.webm",
    name: "Люкан",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_magnataur.webm",
    name: "Магнус",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_marci.webm",
    name: "Марси",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_mars.webm",
    name: "Марс",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_medusa.webm",
    name: "Медуза",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_meepo.webm",
    name: "Мипо",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_mirana.webm",
    name: "Мирана",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_monkey_king.webm",
    name: "Манки Кинг",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_morphling.webm",
    name: "Морфлинг",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_muerta.webm",
    name: "Муэрта",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_naga_siren.webm",
    name: "Нага Сирена",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_necrolyte.webm",
    name: "Некрофос",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_nevermore.webm",
    name: "Шэдоу Финд",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_night_stalker.webm",
    name: "Найт Сталкер",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_nyx_assassin.webm",
    name: "Никс Ассасин",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_obsidian_destroyer.webm",
    name: "Аутворлд Дестройер",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_ogre_magi.webm",
    name: "Огр Маг",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_omniknight.webm",
    name: "Омник",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_oracle.webm",
    name: "Оракл",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_pangolier.webm",
    name: "Пангольер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_phantom_assassin.webm",
    name: "Фантомка",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_phantom_lancer.webm",
    name: "Фантом Лансер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_phoenix.webm",
    name: "Феникс",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_primal_beast.webm",
    name: "Праймал Бист",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_puck.webm",
    name: "Пак",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_pudge.webm",
    name: "Пудж",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_pugna.webm",
    name: "Пугна",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_queenofpain.webm",
    name: "Квопа",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_rattletrap.webm",
    name: "Клокверк",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_razor.webm",
    name: "Рэйзор",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_riki.webm",
    name: "Рики",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_ringmaster.webm",
    name: "Рингмастер",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_rubick.webm",
    name: "Рубик",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_sand_king.webm",
    name: "Сэнд Кинг",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_shadow_demon.webm",
    name: "Шэдоу Демон",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_shadow_shaman.webm",
    name: "Шаман",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_shredder.webm",
    name: "Тимберсов",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_silencer.webm",
    name: "Сайленсер",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_skeleton_king.webm",
    name: "Врейс Кинг",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_skywrath_mage.webm",
    name: "Скаймаг",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_slardar.webm",
    name: "Слардар",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_slark.webm",
    name: "Сларк",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_snapfire.webm",
    name: "Снэпфайр",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_sniper.webm",
    name: "Снайпер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_spectre.webm",
    name: "Спектра",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_spirit_breaker.webm",
    name: "Баратрум",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_storm_spirit.webm",
    name: "Шторм Спирит",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_sven.webm",
    name: "Свен",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_techies.webm",
    name: "Тэчис",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_templar_assassin.webm",
    name: "Тэмплар Ассасин",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_terrorblade.webm",
    name: "Тэррорблейд",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_tidehunter.webm",
    name: "Тайдхантер",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_tinker.webm",
    name: "Тинкер",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_tiny.webm",
    name: "Тини",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_treant.webm",
    name: "Трент",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_troll_warlord.webm",
    name: "Тролль",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_tusk.webm",
    name: "Тускар",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_undying.webm",
    name: "Андаинг",
    primaryAttribute: "Strength",
  },
  {
    img: "images/npc_dota_hero_ursa.webm",
    name: "Урса",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_vengefulspirit.webm",
    name: "Венга",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_venomancer.webm",
    name: "Веномансер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_viper.webm",
    name: "Вайпер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_visage.webm",
    name: "Визаж",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_void_spirit.webm",
    name: "Войд Спирит",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_warlock.webm",
    name: "Варлок",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_weaver.webm",
    name: "Вивер",
    primaryAttribute: "Agility",
  },
  {
    img: "images/npc_dota_hero_windrunner.webm",
    name: "Виндрэйнджер",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_winter_wyvern.webm",
    name: "Виверна",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_wisp.webm",
    name: "Ио",
    primaryAttribute: "Universal",
  },
  {
    img: "images/npc_dota_hero_witch_doctor.webm",
    name: "Вич Доктор",
    primaryAttribute: "Intelligence",
  },
  {
    img: "images/npc_dota_hero_zuus.webm",
    name: "Зевс",
    primaryAttribute: "Intelligence",
  },
];

heroes.forEach((hero) => {
  if (hero.primaryAttribute == "Strength") {
    const div = document.createElement("div");
    div.innerHTML = `
    <video src="${hero.img}" class="npc-video" muted preload="auto" ></video>
    <p class="npc-name">${hero.name}</p>
  `;
    div.classList.add("card-npc");
    const video = div.querySelector("video");

    video.addEventListener("mouseenter", () => {
      video.loop = true;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
    containerStrenght.appendChild(div);
  } else if (hero.primaryAttribute == "Agility") {
    const div = document.createElement("div");
    div.innerHTML = `
    <video src="${hero.img}" class="npc-video" muted></video>
    <p class="npc-name">${hero.name}</p>
  `;
    div.classList.add("card-npc");
    const video = div.querySelector("video");

    video.addEventListener("mouseenter", () => {
      video.loop = true;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
    containerAgallity.appendChild(div);
  } else if (hero.primaryAttribute == "Intelligence") {
        const div = document.createElement("div");
    div.innerHTML = `
    <video src="${hero.img}" class="npc-video" muted></video>
    <p class="npc-name">${hero.name}</p>
  `;
    div.classList.add("card-npc");
    const video = div.querySelector("video");

    video.addEventListener("mouseenter", () => {
      video.loop = true;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
    containerIntelligence.appendChild(div);
  } else if (hero.primaryAttribute == "Universal") {
        const div = document.createElement("div");
    div.innerHTML = `
    <video src="${hero.img}" class="npc-video" muted></video>
    <p class="npc-name">${hero.name}</p>
  `;
    div.classList.add("card-npc");
    const video = div.querySelector("video");

    video.addEventListener("mouseenter", () => {
      video.loop = true;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
    containerUniversal.appendChild(div);
  }
});

// pages
const btnMain = document.getElementById("btn-main");
const btnStrenght = document.getElementById("btn-strenght");
const btnAgallity = document.getElementById("btn-agallity");
const btnIntelligence = document.getElementById("btn-intelligence");
const btnUniversal = document.getElementById("btn-universal");
const btnSettings = document.getElementById("btn-settings");

document.addEventListener("DOMContentLoaded", () => {
  const ids = [
    "main",
    "container-strenght",
    "container-agallity",
    "container-intelligence",
    "container-universal",
    "container-settings",
  ];

  const nodes = Object.fromEntries(
    ids.map((id) => [id, document.getElementById(id)])
  );

  const map = {
    "btn-main": "main",
    "btn-strenght": "container-strenght",
    "btn-agallity": "container-agallity",
    "btn-intelligence": "container-intelligence",
    "btn-universal": "container-universal",
    "btn-settings": "container-settings",
  };

  function show(targetId) {
    ids.forEach((id) => {
      const node = nodes[id];
      if (!node) return;
      node.classList.toggle("d-none", id !== targetId);
    });
  }

  Object.keys(map).forEach((btnId) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener("click", () => show(map[btnId]));
  });
});


const casesContainer = document.getElementById('cases-container');
const cases = [
  {
  image: 'images/case_1.png',
  name: 'Сокровищница рекрута',
  chances: ''
  },
  {
  image: 'images/case_2.png',
  name: 'Сокровищница стража'
  },
  {
  image: 'images/case_3.png',
  name: 'Сокровищница Рыцаря'
  },
  {
  image: 'images/case_4.png',
  name: 'Сокровищница Героя'
  },
  {
  image: 'images/case_5.png',
  name: 'Сокровищница Легенды'
  },
  {
  image: 'images/case_6.png',
  name: 'Сокровищница Божества'
  },
]

for (const casee of cases) {
  casesContainer.innerHTML+=`
  <div id="${casee.name}-id" class="case">
    <img src="${casee.image}" class="img-case">
    <div>${casee.name}</div>
  </div>
  `
  }