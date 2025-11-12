const containerNode = document.getElementById("container-main");
const mainNode = document.getElementById("main1");
const containerStrenght = document.getElementById("strenght1");
const containerAgallity = document.getElementById("agallity1");
const containerIntelligence = document.getElementById("intelligence1");
const containerUniversal = document.getElementById("universal1");
const containerSettings = document.getElementById("settings1");
const casesContainer = document.getElementById("cases-container");
const npcAudio = document.getElementById("npc-audio");
const meepAudio = document.getElementById("meep-audio");
const pickAudio = document.getElementById("pick-audio");
const clickAudio = document.getElementById("click-audio");
const openCaseAudio = document.getElementById("openCase-audio");
const btnMain = document.getElementById("btn-main");
const btnStrenght = document.getElementById("btn-strenght");
const btnAgallity = document.getElementById("btn-agallity");
const btnIntelligence = document.getElementById("btn-intelligence");
const btnUniversal = document.getElementById("btn-universal");
const btnSettings = document.getElementById("btn-settings");
const goldNode = document.getElementById("gold");
let gold = 1000;
let goldPerSec = 0;
let goldPerSecAttributeStrenght = 0;
let goldPerSecAttributeAgallity = 0;
let goldPerSecAttributeIntelligence = 0;
let goldPerSecAttributeUniversal = 0;

let heroesStrength = [];
let heroesAgallity = [];
let heroesIntelligence = [];
let heroesUniversal = [];

setInterval(() => {
  gold += goldPerSec;
  goldNode.textContent = gold.toFixed(2);
  document.getElementById("balance-per-sec").innerHTML = `
  ${goldPerSec.toFixed(
    2
  )}<img src="images/gold.png" alt="" style="width: 0.75vw" />
                в сек
  `;
}, 1000);

const lvlObj = {
  0: 1,
  1: 5,
  2: 10,
  3: 25,
  4: 50,
  5: 100,
};

const heroes = [
  {
    img: "images/npc_dota_hero_pudge.mp4",
    name: "Пудж",
    primaryAttribute: "Strength",
    rare: "legend",
    id: 1,
    cards: 110,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_bristleback.mp4",
    name: "Бристлбек",
    primaryAttribute: "Strength",
    rare: "legend",
    id: 2,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_huskar.mp4",
    name: "Хускар",
    primaryAttribute: "Strength",
    rare: "legend",
    id: 3,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_axe.mp4",
    name: "Акс",
    primaryAttribute: "Strength",
    rare: "epic",
    id: 4,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_legion_commander.mp4",
    name: "Легионка",
    primaryAttribute: "Strength",
    rare: "epic",
    id: 5,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_ogre_magi.mp4",
    name: "Огр Маг",
    primaryAttribute: "Strength",
    rare: "epic",
    id: 6,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_spirit_breaker.mp4",
    name: "Баратрум",
    primaryAttribute: "Strength",
    rare: "epic",
    id: 7,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_earthshaker.mp4",
    name: "Шейкер",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 8,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_tidehunter.mp4",
    name: "Тайдхантер",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 9,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_tiny.mp4",
    name: "Тини",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 10,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_undying.mp4",
    name: "Андаинг",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 11,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_chaos_knight.mp4",
    name: "Хаос Найт",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 12,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_kunkka.mp4",
    name: "Кунка",
    primaryAttribute: "Strength",
    rare: "mythic",
    id: 13,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_skeleton_king.mp4",
    name: "Врейс Кинг",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 14,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_mars.mp4",
    name: "Марс",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 15,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_slardar.mp4",
    name: "Слардар",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 16,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_tusk.mp4",
    name: "Тускар",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 17,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_alchemist.mp4",
    name: "Алхимик",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 18,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_sven.mp4",
    name: "Свен",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 19,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_night_stalker.mp4",
    name: "Найт Сталкер",
    primaryAttribute: "Strength",
    rare: "rare",
    id: 20,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_shredder.mp4",
    name: "Тимберсов",
    primaryAttribute: "Strength",
    rare: "common",
    id: 21,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_abyssal_underlord.mp4",
    name: "Андерлорд",
    primaryAttribute: "Strength",
    rare: "common",
    id: 22,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_life_stealer.mp4",
    name: "Лайфстиллер",
    primaryAttribute: "Strength",
    rare: "common",
    id: 23,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_primal_beast.mp4",
    name: "Праймал Бист",
    primaryAttribute: "Strength",
    rare: "common",
    id: 24,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_dawnbreaker.mp4",
    name: "Даунбрейкер",
    primaryAttribute: "Strength",
    rare: "common",
    id: 25,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_centaur.mp4",
    name: "Кентавр",
    primaryAttribute: "Strength",
    rare: "common",
    id: 26,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_doom_bringer.mp4",
    name: "Дум",
    primaryAttribute: "Strength",
    rare: "common",
    id: 27,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_dragon_knight.mp4",
    name: "Драгон Найт",
    primaryAttribute: "Strength",
    rare: "common",
    id: 28,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_earth_spirit.mp4",
    name: "Эрс спирит",
    primaryAttribute: "Strength",
    rare: "common",
    id: 29,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_elder_titan.mp4",
    name: "Элдер Титан",
    primaryAttribute: "Strength",
    rare: "common",
    id: 30,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_lycan.mp4",
    name: "Люкан",
    primaryAttribute: "Strength",
    rare: "common",
    id: 31,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_omniknight.mp4",
    name: "Омник",
    primaryAttribute: "Strength",
    rare: "common",
    id: 32,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_phoenix.mp4",
    name: "Феникс",
    primaryAttribute: "Strength",
    rare: "common",
    id: 33,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_rattletrap.mp4",
    name: "Клокверк",
    primaryAttribute: "Strength",
    rare: "common",
    id: 34,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_treant.mp4",
    name: "Трент",
    primaryAttribute: "Strength",
    rare: "common",
    id: 35,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_nevermore.mp4",
    name: "Шэдоу Финд",
    primaryAttribute: "agallity",
    rare: "legend",
    id: 36,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_antimage.mp4",
    name: "Антимаг",
    primaryAttribute: "agallity",
    rare: "legend",
    id: 37,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_juggernaut.mp4",
    name: "Джаггернаут",
    primaryAttribute: "agallity",
    rare: "legend",
    id: 38,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_phantom_assassin.mp4",
    name: "Фантомка",
    primaryAttribute: "agallity",
    rare: "epic",
    id: 39,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_drow_ranger.mp4",
    name: "Дроу Рейнджер",
    primaryAttribute: "agallity",
    rare: "epic",
    id: 40,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_sniper.mp4",
    name: "Снайпер",
    primaryAttribute: "agallity",
    rare: "epic",
    id: 41,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_faceless_void.mp4",
    name: "Фейсес Войд",
    primaryAttribute: "agallity",
    rare: "epic",
    id: 42,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_morphling.mp4",
    name: "Морфлинг",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 43,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_ursa.mp4",
    name: "Урса",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 44,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_viper.mp4",
    name: "Вайпер",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 45,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_hoodwink.mp4",
    name: "Худвинк",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 46,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_meepo.mp4",
    name: "Мипо",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 47,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_weaver.mp4",
    name: "Вивер",
    primaryAttribute: "agallity",
    rare: "mythic",
    id: 48,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_riki.mp4",
    name: "Рики",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 49,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_vengefulspirit.mp4",
    name: "Венга",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 50,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_monkey_king.mp4",
    name: "Манки Кинг",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 51,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_phantom_lancer.mp4",
    name: "Фантом Лансер",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 52,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_terrorblade.mp4",
    name: "Тэррорблейд",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 53,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_bounty_hunter.mp4",
    name: "Баунти Хантер",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 54,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_bloodseeker.mp4",
    name: "Бладсикер",
    primaryAttribute: "agallity",
    rare: "rare",
    id: 55,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_slark.mp4",
    name: "Сларк",
    primaryAttribute: "agallity",
    rare: "common",
    id: 56,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_kez.mp4",
    name: "Кез",
    primaryAttribute: "agallity",
    rare: "common",
    id: 57,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_ember_spirit.mp4",
    name: "Эмбер",
    primaryAttribute: "agallity",
    rare: "common",
    id: 58,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_broodmother.mp4",
    name: "Бруда",
    primaryAttribute: "agallity",
    rare: "common",
    id: 59,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_clinkz.mp4",
    name: "Клинкз",
    primaryAttribute: "agallity",
    rare: "common",
    id: 60,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_gyrocopter.mp4",
    name: "Гирокоптер",
    primaryAttribute: "agallity",
    rare: "common",
    id: 61,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_lone_druid.mp4",
    name: "Лон Друид",
    primaryAttribute: "agallity",
    rare: "common",
    id: 62,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_luna.mp4",
    name: "Луна",
    primaryAttribute: "agallity",
    rare: "common",
    id: 63,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_medusa.mp4",
    name: "Медуза",
    primaryAttribute: "agallity",
    rare: "common",
    id: 64,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_mirana.mp4",
    name: "Мирана",
    primaryAttribute: "agallity",
    rare: "common",
    id: 65,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_naga_siren.mp4",
    name: "Нага Сирена",
    primaryAttribute: "agallity",
    rare: "common",
    id: 66,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_razor.mp4",
    name: "Рэйзор",
    primaryAttribute: "agallity",
    rare: "common",
    id: 67,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_templar_assassin.mp4",
    name: "Тэмплар Ассасин",
    primaryAttribute: "agallity",
    rare: "common",
    id: 68,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_troll_warlord.mp4",
    name: "Тролль",
    primaryAttribute: "agallity",
    rare: "common",
    id: 69,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_invoker.mp4",
    name: "Инвокер",
    primaryAttribute: "Intelligence",
    rare: "legend",
    id: 70,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_rubick.mp4",
    name: "Рубик",
    primaryAttribute: "Intelligence",
    rare: "legend",
    id: 71,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_crystal_maiden.mp4",
    name: "Кристал Мэйден",
    primaryAttribute: "Intelligence",
    rare: "legend",
    id: 72,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_storm_spirit.mp4",
    name: "Шторм Спирит",
    primaryAttribute: "Intelligence",
    rare: "epic",
    id: 73,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_shadow_shaman.mp4",
    name: "Шаман",
    primaryAttribute: "Intelligence",
    rare: "epic",
    id: 74,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_tinker.mp4",
    name: "Тинкер",
    primaryAttribute: "Intelligence",
    rare: "epic",
    id: 75,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_silencer.mp4",
    name: "Сайленсер",
    primaryAttribute: "Intelligence",
    rare: "epic",
    id: 76,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_necrolyte.mp4",
    name: "Некрофос",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 77,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_witch_doctor.mp4",
    name: "Вич Доктор",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 78,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_ancient_apparition.mp4",
    name: "Аппарат",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 79,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_lina.mp4",
    name: "Лина",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 80,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_jakiro.mp4",
    name: "Джакиро",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 81,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_skywrath_mage.mp4",
    name: "Скаймаг",
    primaryAttribute: "Intelligence",
    rare: "mythic",
    id: 82,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_grimstroke.mp4",
    name: "Гримстроук",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 83,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_queenofpain.mp4",
    name: "Квопа",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 84,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_lion.mp4",
    name: "Лион",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 85,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_zuus.mp4",
    name: "Зевс",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 86,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_dark_willow.mp4",
    name: "Дарк Виллоу",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 87,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_oracle.mp4",
    name: "Оракл",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 88,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_obsidian_destroyer.mp4",
    name: "Аутворлд Дестройер",
    primaryAttribute: "Intelligence",
    rare: "rare",
    id: 89,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_chen.mp4",
    name: "Чен",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 90,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_dark_seer.mp4",
    name: "Дарк Сиир",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 91,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_disruptor.mp4",
    name: "Дизраптор",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 92,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_enchantress.mp4",
    name: "Энчантрес",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 93,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_keeper_of_the_light.mp4",
    name: "Котл",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 94,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_leshrac.mp4",
    name: "Лешрак",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 95,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_lich.mp4",
    name: "Лич",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 96,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_muerta.mp4",
    name: "Муэрта",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 97,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_puck.mp4",
    name: "Пак",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 98,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_pugna.mp4",
    name: "Пугна",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 99,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_ringmaster.mp4",
    name: "Рингмастер",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 100,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_shadow_demon.mp4",
    name: "Шэдоу Демон",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 101,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_warlock.mp4",
    name: "Варлок",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 102,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_winter_wyvern.mp4",
    name: "Виверна",
    primaryAttribute: "Intelligence",
    rare: "common",
    id: 103,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_arc_warden.mp4",
    name: "Арк Варден",
    primaryAttribute: "Universal",
    rare: "legend",
    id: 104,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_enigma.mp4",
    name: "Энигма",
    primaryAttribute: "Universal",
    rare: "legend",
    id: 105,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_techies.mp4",
    name: "Тэчис",
    primaryAttribute: "Universal",
    rare: "legend",
    id: 106,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_marci.mp4",
    name: "Марси",
    primaryAttribute: "Universal",
    rare: "epic",
    id: 107,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_wisp.mp4",
    name: "Ио",
    primaryAttribute: "Universal",
    rare: "epic",
    id: 108,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_dazzle.mp4",
    name: "Дазл",
    primaryAttribute: "Universal",
    rare: "epic",
    id: 109,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_void_spirit.mp4",
    name: "Войд Спирит",
    primaryAttribute: "Universal",
    rare: "mythic",
    id: 110,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_bane.mp4",
    name: "Бэйн",
    primaryAttribute: "Universal",
    rare: "mythic",
    id: 111,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_spectre.mp4",
    name: "Спектра",
    primaryAttribute: "Universal",
    rare: "mythic",
    id: 112,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_sand_king.mp4",
    name: "Сэнд Кинг",
    primaryAttribute: "Universal",
    rare: "mythic",
    id: 113,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_furion.mp4",
    name: "Фурион",
    primaryAttribute: "Universal",
    rare: "rare",
    id: 114,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_magnataur.mp4",
    name: "Магнус",
    primaryAttribute: "Universal",
    rare: "rare",
    id: 115,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_venomancer.mp4",
    name: "Веномансер",
    primaryAttribute: "Universal",
    rare: "rare",
    id: 116,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_death_prophet.mp4",
    name: "Дез Профет",
    primaryAttribute: "Universal",
    rare: "rare",
    id: 117,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_windrunner.mp4",
    name: "Виндрэйнджер",
    primaryAttribute: "Universal",
    rare: "rare",
    id: 118,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_abaddon.mp4",
    name: "Абаддон",
    primaryAttribute: "Universal",
    rare: "common",
    id: 119,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_batrider.mp4",
    name: "Бэтрайдер",
    primaryAttribute: "Universal",
    rare: "common",
    id: 120,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_beastmaster.mp4",
    name: "Бистмастер",
    primaryAttribute: "Universal",
    rare: "common",
    id: 121,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_brewmaster.mp4",
    name: "Брюмастер",
    primaryAttribute: "Universal",
    rare: "common",
    id: 122,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_nyx_assassin.mp4",
    name: "Никс Ассасин",
    primaryAttribute: "Universal",
    rare: "common",
    id: 123,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_pangolier.mp4",
    name: "Пангольер",
    primaryAttribute: "Universal",
    rare: "common",
    id: 124,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_snapfire.mp4",
    name: "Снэпфайр",
    primaryAttribute: "Universal",
    rare: "common",
    id: 125,
    cards: 0,
    lvl: 0,
  },
  {
    img: "images/npc_dota_hero_visage.mp4",
    name: "Визаж",
    primaryAttribute: "Universal",
    rare: "common",
    id: 126,
    cards: 0,
    lvl: 0,
  },
];

const cases = [
  {
    image: "images/case_1.png",
    name: "Сокровищница рекрута",
    price: 100,
    chances_common: 80,
    chances_rare: 12,
    chances_mythic: 6,
    chances_epic: 2,
    chances_legend: 0,
    id: 1,
    cards_min: 1,
    cards_max: 3,
  },
  {
    image: "images/case_2.png",
    name: "Сокровищница стража",
    price: 250,
    chances_common: 65,
    chances_rare: 17,
    chances_mythic: 12,
    chances_epic: 5,
    chances_legend: 1,
    id: 2,
    cards_min: 4,
    cards_max: 6,
  },
  {
    image: "images/case_3.png",
    name: "Сокровищница Рыцаря",
    price: 1000,
    chances_common: 55,
    chances_rare: 20,
    chances_mythic: 15,
    chances_epic: 8,
    chances_legend: 2,
    id: 3,
    cards_min: 7,
    cards_max: 9,
  },
  {
    image: "images/case_4.png",
    name: "Сокровищница Героя",
    price: 5000,
    chances_common: 45,
    chances_rare: 22,
    chances_mythic: 20,
    chances_epic: 10,
    chances_legend: 3,
    id: 4,
    cards_min: 10,
    cards_max: 12,
  },
  {
    image: "images/case_5.png",
    name: "Сокровищница Легенды",
    price: 10000,
    chances_common: 25,
    chances_rare: 30,
    chances_mythic: 25,
    chances_epic: 16,
    chances_legend: 4,
    id: 5,
    cards_min: 13,
    cards_max: 15,
  },
  {
    image: "images/case_6.png",
    name: "Сокровищница Божества",
    price: 25000,
    chances_common: 20,
    chances_rare: 25,
    chances_mythic: 30,
    chances_epic: 20,
    chances_legend: 5,
    id: 6,
    cards_min: 16,
    cards_max: 20,
  },
];

heroes.forEach((hero) => {
  let container;
  switch (hero.primaryAttribute) {
    case "Strength":
      container = containerStrenght;
      break;
    case "agallity":
      container = containerAgallity;
      break;
    case "Intelligence":
      container = containerIntelligence;
      break;
    case "Universal":
      container = containerUniversal;
      break;
    default:
      return;
  }

  const div = document.createElement("div");
  div.classList.add("card-npc");
  div.id = `div-npc-${hero.id}`;
  div.innerHTML = `
    <video src="${hero.img}" id="npc-video-${hero.id}" class="npc-video" muted preload="auto" onclick="openNpc(${hero.id})"></video>
    <p class="npc-name">${hero.name}</p>
  `;

  const video = div.querySelector("video");
  video.addEventListener("mouseenter", () => {
    video.loop = true;
    video.play();
    npcAudio.currentTime = 0;
    npcAudio.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  if (hero.rare === "common") {
    video.style.border = ".1vw solid rgba(0, 128, 0, .5)";
    video.addEventListener("mouseenter", () => {
      video.style.boxShadow = "0 0 0.2vw .2vw rgba(0, 128, 0, .5)";
    });
    video.addEventListener("mouseleave", () => {
      video.style.boxShadow = "";
    });
  } else if (hero.rare === "rare") {
    video.style.border = ".1vw solid rgba(37, 37, 207, .5)";
    video.addEventListener("mouseenter", () => {
      video.style.boxShadow = "0 0 0.2vw .2vw rgba(37, 37, 207, .5)";
    });
    video.addEventListener("mouseleave", () => {
      video.style.boxShadow = "";
    });
  } else if (hero.rare === "mythic") {
    video.style.border = ".1vw solid rgba(138, 43, 226, .5)";
    video.addEventListener("mouseenter", () => {
      video.style.boxShadow = "0 0 0.2vw .2vw rgba(138, 43, 226, .5)";
    });
    video.addEventListener("mouseleave", () => {
      video.style.boxShadow = "";
    });
  } else if (hero.rare === "epic") {
    video.style.border = ".1vw solid rgba(165, 42, 42, .5)";
    video.addEventListener("mouseenter", () => {
      video.style.boxShadow = "0 0 0.2vw .2vw rgba(165, 42, 42, .5)";
    });
    video.addEventListener("mouseleave", () => {
      video.style.boxShadow = "";
    });
  } else if (hero.rare === "legend") {
    video.style.border = ".1vw solid rgba(255, 215, 0, .5)";
    video.addEventListener("mouseenter", () => {
      video.style.boxShadow = "0 0 0.2vw .2vw rgba(255, 215, 0, .5)";
    });
    video.addEventListener("mouseleave", () => {
      video.style.boxShadow = "";
    });
  }

  container.appendChild(div);
});

// pages

document.addEventListener("DOMContentLoaded", () => {
  goldNode.textContent = gold.toFixed(2);

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

setTimeout(() => {
  document.querySelectorAll(".case-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      npcAudio.currentTime = 0;
      npcAudio.play();
    });
  });
}, 10000);

const vkladki = () => {
  const sound = document.getElementById("vkladki-audio");
  sound.currentTime = 0;
  sound.play();
};

for (const casee of cases) {
  casesContainer.innerHTML += `
  <div id="${casee.name}-id" class="case">
    <img src="${casee.image}" class="img-case"">
    <img src="${casee.image}" class="img-case-open" id="case-img-id-${casee.id}">
    <p class="name-case">${casee.name}</p>
    <hr class="case-hr">
    <div class="case-cost-container">
      <p class="case-price">${casee.price}</p>
      <img src="images/gold.png" alt="" style="width: 1vw; height: 1vw">
    </div>
    <p class="chances-p">Шансы</p>
    <div class="case-chances-container">
      <ul clas="case-ul">
        <li class="case-li case-common"><span>Обычный:</span> <span>${casee.chances_common}%</span></li>
        <li class="case-li case-rare"><span>Редкий:</span> <span>${casee.chances_rare}%</span></li>
        <li class="case-li case-mythic"><span>Мифический:</span> <span>${casee.chances_mythic}%</span></li>
        <li class="case-li case-epic"><span>Эпический:</span> <span>${casee.chances_epic}%</span></li>
        <li class="case-li case-legend"><span>Легендарный:</span> <span>${casee.chances_legend}%</span></li>
        <li class="case-li case-hero"><span>Карточек:</span> <span>${casee.cards_min} - ${casee.cards_max}</span></li>
      </ul>
    </div>
    <button class="case-btn" onclick="caseOpen(${casee.id})" id="case-${casee.id}">ОТКРЫТЬ</button>
  </div>
  `;
}

const caseOpen = (id) => {
  for (const casee of cases) {
    if (casee.id === id) {
      if (Number(casee.price) <= Number(gold)) {
        clickAudio.currentTime = 0;
        clickAudio.play();
        gold -= Number(casee.price);
        goldNode.textContent = gold.toFixed(2);
        const cardsDrop =
          Math.floor(Math.random() * (casee.cards_max - casee.cards_min + 1)) +
          casee.cards_min;
        const cardsAttributeDrop = [];
        for (let i = 0; i < cardsDrop; i++) {
          cardsAttributeDrop.push((Math.random() * 100).toFixed(2));
        }

        const dropped = {
          common: 0,
          rare: 0,
          mythic: 0,
          epic: 0,
          legend: 0,
        };

        for (const dropNpc of cardsAttributeDrop) {
          const chance = Number(dropNpc);
          if (chance < casee.chances_common) {
            dropped.common++;
          } else if (chance < casee.chances_common + casee.chances_rare) {
            dropped.rare++;
          } else if (
            chance <
            casee.chances_common + casee.chances_rare + casee.chances_mythic
          ) {
            dropped.mythic++;
          } else if (
            chance <
            casee.chances_common +
              casee.chances_rare +
              casee.chances_mythic +
              casee.chances_epic
          ) {
            dropped.epic++;
          } else {
            dropped.legend++;
          }
        }

        const droppedNpc = [];

        if (dropped.common != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "common");
          const rand = Math.floor(Math.random() * filteredArray.length);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.rare != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "rare");
          const rand = Math.floor(Math.random() * filteredArray.length);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.mythic != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "mythic");
          const rand = Math.floor(Math.random() * filteredArray.length);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.epic != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "epic");
          const rand = Math.floor(Math.random() * filteredArray.length);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.legend != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "legend");
          const rand = Math.floor(Math.random() * filteredArray.length);
          droppedNpc.push(filteredArray[rand].name);
        }

        const getRarity = (name) => {
          const hero = heroes.find((h) => h.name === name);
          return hero ? hero.rare : null;
        };

        const strEnd = droppedNpc.map((name) => {
          const rarity = getRarity(name);
          let imgHeroDrop = "";
          let idHeroDrop = 0;
          for (const hero of heroes) {
            if (hero.name === name) {
              imgHeroDrop = hero.img;
              idHeroDrop = hero.id;
            }
          }
          return {
            name: name,
            cards: dropped[rarity],
            img: imgHeroDrop
              .replace("images/npc_dota_hero_", "")
              .replace(".mp4", ""),
            id: idHeroDrop,
          };
        });

        for (let npc of strEnd) {
          document.getElementById(`npc-video-${npc.id}`).style.opacity = "100%";

          for (let hero of heroes) {
            if (hero.id === npc.id) {
              hero.cards += npc.cards;
              if (hero.cards >= lvlObj[hero.lvl]) {
                document
                  .getElementById(`npc-video-${npc.id}`)
                  .classList.add("canUpdate");
              }
            }
          }
        }

        for (let heroWithAttribute of heroes) {
          if (
            heroWithAttribute.primaryAttribute === "agallity" &&
            (heroWithAttribute.cards > 0 || heroWithAttribute.lvl > 0)
          ) {
            const alreadyExists = heroesAgallity.includes(heroWithAttribute);
            if (!alreadyExists) {
              heroesAgallity.push(heroWithAttribute);
            }
          } else if (
            heroWithAttribute.primaryAttribute === "Intelligence" &&
            (heroWithAttribute.cards > 0 || heroWithAttribute.lvl > 0)
          ) {
            const alreadyExists =
              heroesIntelligence.includes(heroWithAttribute);
            if (!alreadyExists) {
              heroesIntelligence.push(heroWithAttribute);
            }
          } else if (
            heroWithAttribute.primaryAttribute === "Universal" &&
            (heroWithAttribute.cards > 0 || heroWithAttribute.lvl > 0)
          ) {
            const alreadyExists = heroesUniversal.includes(heroWithAttribute);
            if (!alreadyExists) {
              heroesUniversal.push(heroWithAttribute);
            }
          } else if (
            heroWithAttribute.primaryAttribute === "Strength" &&
            (heroWithAttribute.cards > 0 || heroWithAttribute.lvl > 0)
          ) {
            const alreadyExists = heroesStrength.includes(heroWithAttribute);
            if (!alreadyExists) {
              heroesStrength.push(heroWithAttribute);
            }
          }
        }

        if (heroesStrength.length === 35) {
          fullStrenght = true;
        }
        if (heroesAgallity.length === 34) {
          fullAgallity = true;
        }
        if (heroesIntelligence.length === 34) {
          fullIntelligence = true;
        }
        if (heroesUniversal.length === 23) {
          fullUniversal = true;
        }

        const modal = document.getElementById("modal");
        const closeBtn = document.getElementById("closeModal");
        const droppedContainer = document.getElementById(
          "dropped-npc-container"
        );

        closeBtn.addEventListener("click", () => {
          modal.classList.remove("show");

          clickAudio.currentTime = 0;
          clickAudio.play();
        });

        openCaseAudio.currentTime = 0;
        openCaseAudio.play();

        document.getElementById(`case-img-id-${casee.id}`).style.display =
          "block";
        document.getElementById(`case-img-id-${casee.id}`).style.opacity =
          "100%";
        document.getElementById(`case-img-id-${casee.id}`).style.position =
          "fixed";
        document.getElementById(`case-img-id-${casee.id}`).style.width = "30vw";
        document.getElementById(`case-img-id-${casee.id}`).style.height =
          "auto";
        document.getElementById(`case-img-id-${casee.id}`).style.transform =
          "translate(-30%, -50%)";
        document.getElementById(`case-img-id-${casee.id}`).style.top = "50%";
        document.getElementById(`case-img-id-${casee.id}`).style.left = "50%";
        document.getElementById("case-1").disabled = true;
        document.getElementById("case-2").disabled = true;
        document.getElementById("case-3").disabled = true;
        document.getElementById("case-4").disabled = true;
        document.getElementById("case-5").disabled = true;
        document.getElementById("case-6").disabled = true;
        setTimeout(() => {
          document.getElementById(`case-img-id-${casee.id}`).style.transition =
            "0s";
          document.getElementById(`case-img-id-${casee.id}`).style.opacity =
            "0%";
          document.getElementById(`case-img-id-${casee.id}`).style.position =
            "static";
          document.getElementById(`case-img-id-${casee.id}`).style.width =
            "0vw";
          document.getElementById(`case-img-id-${casee.id}`).style.transform =
            "translate(50%, 50%)";
          document.getElementById(`case-img-id-${casee.id}`).style.top = "50%";
          document.getElementById(`case-img-id-${casee.id}`).style.left = "50%";
          document.getElementById("case-1").disabled = false;
          document.getElementById("case-2").disabled = false;
          document.getElementById("case-3").disabled = false;
          document.getElementById("case-4").disabled = false;
          document.getElementById("case-5").disabled = false;
          document.getElementById("case-6").disabled = false;
          setTimeout(() => {
            document.getElementById(
              `case-img-id-${casee.id}`
            ).style.transition = "6s";
          }, 100);
        }, 6000);

        setTimeout(() => {
          droppedContainer.innerHTML = "";
          modal.classList.add("show");

          let index = 0;

          const interval = setInterval(() => {
            if (index >= strEnd.length) {
              clearInterval(interval);
              return;
            }

            const npc = strEnd[index];
            droppedContainer.innerHTML += `
        <div class="dropped-npc-item" id="dropped-card-${npc.id}">
          <img src="images/${npc.img}.png" class="dropped-npc-img">
          <p class="dropped-npc-name">${npc.name}</p>
          <hr class="dropped-hr" id="dropped-hr-${npc.id}">
          <div class='dropped-cards-val-container'>
            <p class="dropped-cards-val">${npc.cards}</p>
            <img src="images/cards.png" class="dropped-cards-img">
          </div>
        </div>
      `;

            const card = document.getElementById(`dropped-card-${npc.id}`);
            const hero = heroes.find((h) => h.id === npc.id);
            if (hero) {
              const colors = {
                common: "green",
                rare: "rgb(37, 37, 207)",
                mythic: "blueviolet",
                epic: "brown",
                legend: "gold",
              };
              const color = colors[hero.rare] || "gray";
              card.style.borderColor = color;
              document.getElementById(
                `dropped-hr-${npc.id}`
              ).style.borderColor = color;
            }

            pickAudio.currentTime = 0;
            pickAudio.play();
            index++;
          }, 1000);
        }, 6000);

        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.remove("show");

            clickAudio.currentTime = 0;
            clickAudio.play();
          }
        });
      } else {
        meepAudio.currentTime = 0;
        meepAudio.play();
        document.getElementById(`case-${casee.id}`).style.borderColor = "red";
        document.getElementById(`case-${casee.id}`).style.color = "red";

        setTimeout(() => {
          document.getElementById(`case-${casee.id}`).style.borderColor =
            "white";
          document.getElementById(`case-${casee.id}`).style.color = "white";
        }, 100);
      }
    }
  }
};

const openNpc = (id) => {
  pickAudio.currentTime = 0;
  pickAudio.play();

  for (const npc of heroes) {
    if (npc.id === id) {
      const reg = npc.img
        .replace("images/npc_dota_hero_", "")
        .replace(".mp4", "");
      const attribute = npc.primaryAttribute.toLowerCase();
      let attributeTranslate = "";
      let heroAttribute;
      let attributeColor;
      let perSecHero;
      if (npc.rare === "common") {
        perSecHero = 0.1 * npc.lvl;
      } else if (npc.rare === "rare") {
        perSecHero = 0.25 * npc.lvl;
      } else if (npc.rare === "mythic") {
        perSecHero = 0.5 * npc.lvl;
      } else if (npc.rare === "epic") {
        perSecHero = 1.0 * npc.lvl;
      } else if (npc.rare === "legend") {
        perSecHero = 2.5 * npc.lvl;
      }
      if (npc.primaryAttribute === "Strength") {
        attributeTranslate = "Сила";
        attributeColor = "#fd5d17";
        heroAttribute = goldPerSecAttributeStrenght;
      } else if (npc.primaryAttribute === "agallity") {
        attributeTranslate = "Ловкость";
        attributeColor = "#41d754";
        heroAttribute = goldPerSecAttributeAgallity;
      } else if (npc.primaryAttribute === "Intelligence") {
        attributeTranslate = "Интеллект";
        attributeColor = "#0adcf8";
        heroAttribute = goldPerSecAttributeIntelligence;
      } else if (npc.primaryAttribute === "Universal") {
        attributeTranslate = "Универсал";
        attributeColor = "#dd00dd";
        heroAttribute = goldPerSecAttributeUniversal;
      }
      document.getElementById(`${attribute}-info`).innerHTML = `
      <div style="display:flex; flex-direction: column">
        <div class="per-sec-container" style="color: ${attributeColor}">
          <div class="per-sec-npc">${npc.name}: ${perSecHero.toFixed(2)}/с</div>
          <div class="per-sec-attribute">${attributeTranslate}: ${heroAttribute.toFixed(
        2
      )}/с</div>
          <div class="per-sec-all">всего: ${goldPerSec.toFixed(2)}/с</div>
        </div>
        <div class="info-container">
          <img src="images/${reg}.png" alt="" class="img-npc-info">
          <div class="cards-container">
            <div class="cards-visual"></div>
            <p class="cards-value">${npc.cards} / ${lvlObj[npc.lvl]}</p>
            <img src="images/cards.png" alt="" class="cards-img">
          </div>
          <p>уровень: ${npc.lvl}/5</p>
          <div class='btn-update-lvl-npc-container'>
            <button onclick='updateLvl(${
              npc.id
            })' class="btn-update-lvl-npc" disabled>улучшить</button>
          </div>
        </div>
      </div>
      `;

      const progressBars = document.querySelectorAll(".cards-visual");

      progressBars.forEach((pb) => {
        const container = pb.closest(".info-container");
        const cardsValue = container.querySelector(".cards-value").textContent;

        const [pb1Str, pb2Str] = cardsValue.split("/").map((s) => s.trim());
        const pb1 = Number(pb1Str);
        const pb2 = Number(pb2Str);

        let pb3 = 0;
        if (pb1 > 0 && pb2 > 0) {
          pb3 = (pb1 / pb2) * 100;
          pb3 = Math.min(pb3, 100);
        }

        pb.style.setProperty("--before-width", `${pb3}%`);

        if (pb1 >= pb2) {
          pb.style.setProperty("--before-color", attributeColor);
          const btn = container.querySelector(".btn-update-lvl-npc");
          btn.style.opacity = "100%";
          btn.disabled = false;
        }
      });
    }
  }
};

const updateLvl = (id) => {
  const hero = heroes.find((h) => h.id === id);
  if (hero.cards >= lvlObj[hero.lvl]) {
    hero.cards -= lvlObj[hero.lvl];
    hero.lvl++;
    let goldHero = 0;
    if (hero.rare === "common") {
      goldHero += 0.1;
    } else if (hero.rare === "rare") {
      goldHero += 0.25;
    } else if (hero.rare === "mythic") {
      goldHero += 0.5;
    } else if (hero.rare === "epic") {
      goldHero += 1.0;
    } else if (hero.rare === "legend") {
      goldHero += 2.5;
    }
    if (hero.primaryAttribute === "Strength") {
      goldPerSecAttributeStrenght += goldHero;
    } else if (hero.primaryAttribute === "agallity") {
      goldPerSecAttributeAgallity += goldHero;
    } else if (hero.primaryAttribute === "Intelligence") {
      goldPerSecAttributeIntelligence += goldHero;
    } else if (hero.primaryAttribute === "Universal") {
      goldPerSecAttributeUniversal += goldHero;
    }
    if (hero.cards < lvlObj[hero.lvl]) {
      document
        .getElementById(`npc-video-${hero.id}`)
        .classList.remove("canUpdate");
    }
    goldPerSec += goldHero;

    openNpc(id);
  }
};

const arrRune = ["dd", "illusion", "invise", "magic", "speed"];
const arrRuneRus = [
  "Двойного урона",
  "Иллюзии",
  "Невидимости",
  "Магии",
  "Скорости",
];
const runeBonuses = [
  "бонус заработка за 30 секунд",
  "дополнительные карты к любому герою",
  `украсть под невидимостью 2% текущего золота`,
  "цены сокровищниц снижены на 20 секунд",
  "увеличенную скорость заработка в 2 раза на 20 секунд",
];

const runeEvent = () => {
  const randRune = Math.floor(Math.random() * 5);
  let rune = arrRune[randRune];
  const audio = new Audio(`audio/${rune}.mp3`);
  audio.play();
  const el = document.createElement("div");
  el.className = "rune-container";
  el.innerHTML += `
<div class="rune-container">
  <div class="rune-flex">
    <div class="img-rune-container">
      <img src="images/${rune}.png" class="rune-img">
    </div>
    <div class="rune-container-text">
      <p>Вам выпала руна ${arrRuneRus[randRune]}!</p><br>
      <p class="rune-bonus">Она дает бонус: ${runeBonuses[randRune]}</p>
      <div class="rune-buttons">
        <button class="rune-btn-free" onclick="btnRune('${rune}', 'noAd')">получить</button>
        <button class="rune-btn-ad" onclick="btnRune('${rune}', 'ad')">
        x5 за просмотр рекламы
          <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="100%" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
  `;

  containerNode.appendChild(el);
};

const trees = ["tree1", "tree2", "tree3"];

const mkEvent = () => {
  const audio = new Audio(`audio/mk.mp3`);
  audio.volume = 0.3;
  audio.play();
  const shuffledTrees = trees.sort(() => Math.random() - 0.5);
  const el = document.createElement("div");
  const randTreeTrue = Math.floor(Math.random() * 3) + 1;
  el.className = "rune-container";
  el.innerHTML += `
<div class="rune-container">
  <div class="rune-flex">
    <div class="img-rune-container">
      ${shuffledTrees
        .map(
          (tree) =>
            `<button class="mk-img-btn" onclick="tree('${tree}', '${randTreeTrue}')"><img src="images/${tree}.png" class="mk-img"></button>`
        )
        .join("")}
    </div>
    <div class="rune-container-text">
      <p style="font-size: 1.5vw">Манки кинг стал одним из деревьев, угадаешь каким?</p><br>
    </div>
  </div>
</div>
  `;

  containerNode.appendChild(el);
};

const tree = (tree, randTreeTrue) => {
  let clickedTree = Number(tree.replace("tree", ""));
  randTreeTrue = Number(randTreeTrue);
  if (clickedTree === randTreeTrue) {
    const audio = new Audio("audio/mkTrue.mp3");
    audio.volume = 0.3;
    audio.play();
    document.querySelector(".rune-container").remove();
    const elmk = document.createElement("div");
    elmk.className = "dropped-npc-item-rune";
    elmk.innerHTML = `<p class="rune-dd-p">+${(gold / 25).toFixed(2)}</p>`;
    gold += gold / 25;
    containerNode.appendChild(elmk);
    elmk.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      elmk.style.opacity = "0";
      setTimeout(() => {
        elmk.remove();
      }, 500);
    }, 1000);
  } else {
    document.querySelector(".rune-container").remove();
    const audio = new Audio("audio/mkFalse.mp3");
    audio.volume = 0.3;
    audio.play();
  }
};

setInterval(() => {
  if (
    !document.querySelector(".rune-container") &&
    !document.querySelector(".story-container")
  ) {
    const rand = Math.floor(Math.random() * 6);
    if (rand <= 4) {
      runeEvent();
    } else {
      mkEvent();
    }
  }
}, 120000);

const btnRune = (rune, ad) => {
  switch (rune) {
    case "dd":
      if (ad === "noAd") {
        document.querySelector(".rune-container").remove();
        gold += goldPerSec * 30;
        const eldd = document.createElement("div");
        eldd.className = "dropped-npc-item-rune";
        eldd.innerHTML = `<p class="rune-dd-p">+${goldPerSec * 30}</p>`;
        containerNode.appendChild(eldd);
        eldd.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          eldd.style.opacity = "0";
          setTimeout(() => {
            eldd.remove();
          }, 500);
        }, 1000);
      } else {
        document.querySelector(".rune-container").remove();
        gold += goldPerSec * 150;
        const eldd = document.createElement("div");
        eldd.className = "dropped-npc-item-rune";
        eldd.innerHTML = `<p class="rune-dd-p">+${goldPerSec * 150}</p>`;
        containerNode.appendChild(eldd);
        eldd.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          eldd.style.opacity = "0";
          setTimeout(() => {
            eldd.remove();
          }, 500);
        }, 1000);
      }

      break;
    case "illusion":
      if (ad === "noAd") {
        document.querySelector(".rune-container").remove();
        let randomHero;
        do {
          randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        } while (!(randomHero.lvl < 5 && randomHero.cards < 98));
        const randCards = Math.floor(Math.random() * 3) + 1;
        randomHero.cards += randCards;
        const randomHeroImg = randomHero.img
          .replace(".mp4", ".png")
          .replace("npc_dota_hero_", "");
        const el = document.createElement("div");
        el.className = "dropped-npc-item-rune";
        el.innerHTML = `
        <img src="${randomHeroImg}" class="dropped-npc-img">
        <p class="dropped-npc-name">${randomHero.name}</p>
        <hr class="dropped-hr">
        <div class='dropped-cards-val-container'>
        <p class="dropped-cards-val">${randCards}</p>
        <img src="images/cards.png" class="dropped-cards-img">
        </div>
        `;
        containerNode.appendChild(el);
        el.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          el.style.opacity = "0";
          setTimeout(() => {
            el.remove();
          }, 500);
        }, 1000);
      } else {
        document.querySelector(".rune-container").remove();
        let randomHero;
        do {
          randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        } while (!(randomHero.lvl < 5 && randomHero.cards < 86));
        const randCards = Math.floor(Math.random() * 15) + 1;
        randomHero.cards += randCards;
        const randomHeroImg = randomHero.img
          .replace(".mp4", ".png")
          .replace("npc_dota_hero_", "");
        const el = document.createElement("div");
        el.className = "dropped-npc-item-rune";
        el.innerHTML = `
        <img src="${randomHeroImg}" class="dropped-npc-img">
        <p class="dropped-npc-name">${randomHero.name}</p>
        <hr class="dropped-hr">
        <div class='dropped-cards-val-container'>
        <p class="dropped-cards-val">${randCards}</p>
        <img src="images/cards.png" class="dropped-cards-img">
        </div>
        `;
        containerNode.appendChild(el);
        el.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          el.style.opacity = "0";
          setTimeout(() => {
            el.remove();
          }, 500);
        }, 1000);
      }

      break;
    case "invise":
      if (ad === "noAd") {
        document.querySelector(".rune-container").remove();
        const elin = document.createElement("div");
        elin.className = "dropped-npc-item-rune";
        elin.innerHTML = `<p class="rune-dd-p">+${(gold / 50).toFixed(2)}</p>`;
        gold += gold / 50;
        containerNode.appendChild(elin);
        elin.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elin.style.opacity = "0";
          setTimeout(() => {
            elin.remove();
          }, 500);
        }, 1000);
      } else {
        document.querySelector(".rune-container").remove();
        const elin = document.createElement("div");
        elin.className = "dropped-npc-item-rune";
        elin.innerHTML = `<p class="rune-dd-p">+${(gold / 10).toFixed(2)}</p>`;
        gold += gold / 10;
        containerNode.appendChild(elin);
        elin.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elin.style.opacity = "0";
          setTimeout(() => {
            elin.remove();
          }, 500);
        }, 1000);
      }

      break;
    case "magic":
      if (ad === "noAd") {
        document.querySelector(".rune-container").remove();
        const originalPrices = cases.map((c) => c.price);
        for (let casee of cases) {
          casee.price -= casee.price / 10;
        }
        const allCases = document.querySelectorAll(".case-price");
        for (let i = 0; i < allCases.length; i++) {
          allCases[i].textContent = cases[i].price.toFixed(0);
        }
        const elma = document.createElement("div");
        elma.className = "dropped-npc-item-rune";
        elma.innerHTML = `<p class="rune-ma-p">-10% стоимость сокровищниц на 20 секунд!</p>`;
        containerNode.appendChild(elma);
        elma.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elma.style.opacity = "0";
          setTimeout(() => {
            elma.remove();
          }, 500);
        }, 1500);
        setTimeout(() => {
          for (let i = 0; i < cases.length; i++) {
            cases[i].price = originalPrices[i];
            allCases[i].textContent = cases[i].price.toFixed(0);
          }
        }, 20000);
      } else {
        document.querySelector(".rune-container").remove();
        const originalPrices = cases.map((c) => c.price);
        for (let casee of cases) {
          casee.price -= casee.price / 10;
        }
        const allCases = document.querySelectorAll(".case-price");
        for (let i = 0; i < allCases.length; i++) {
          allCases[i].textContent = cases[i].price.toFixed(0);
        }
        const elma = document.createElement("div");
        elma.className = "dropped-npc-item-rune";
        elma.innerHTML = `<p class="rune-ma-p">-10% стоимость сокровищниц на 100 секунд!</p>`;
        containerNode.appendChild(elma);
        elma.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elma.style.opacity = "0";
          setTimeout(() => {
            elma.remove();
          }, 500);
        }, 1500);
        setTimeout(() => {
          for (let i = 0; i < cases.length; i++) {
            cases[i].price = originalPrices[i];
            allCases[i].textContent = cases[i].price.toFixed(0);
          }
        }, 100000);
      }

      break;
    case "speed":
      if (ad === "noAd") {
        document.querySelector(".rune-container").remove();
        const intervalId = setInterval(() => {
          gold += goldPerSec;
          goldNode.textContent = gold.toFixed(2);
          document.getElementById("balance-per-sec").innerHTML = `
          ${goldPerSec.toFixed(
            2
          )}<img src="images/gold.png" alt="" style="width: 0.75vw" />в сек`;
        }, 1000);
        const elsp = document.createElement("div");
        elsp.className = "dropped-npc-item-rune";
        elsp.innerHTML = `<p class="rune-dd-p">двойной заработок на 20 секунд</p>`;
        containerNode.appendChild(elsp);
        elsp.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elsp.style.opacity = "0";
          setTimeout(() => {
            elsp.remove();
          }, 500);
        }, 1000);
        setTimeout(() => {
          clearInterval(intervalId);
        }, 20000);
      } else {
        document.querySelector(".rune-container").remove();
        const intervalId = setInterval(() => {
          gold += goldPerSec;
          goldNode.textContent = gold.toFixed(2);
          document.getElementById("balance-per-sec").innerHTML = `
          ${goldPerSec.toFixed(
            2
          )}<img src="images/gold.png" alt="" style="width: 0.75vw" />в сек`;
        }, 1000);
        const elsp = document.createElement("div");
        elsp.className = "dropped-npc-item-rune";
        elsp.innerHTML = `<p class="rune-dd-p">двойной заработок на 100 секунд</p>`;
        containerNode.appendChild(elsp);
        elsp.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          elsp.style.opacity = "0";
          setTimeout(() => {
            elsp.remove();
          }, 500);
        }, 1000);
        setTimeout(() => {
          clearInterval(intervalId);
        }, 100000);
      }

      break;

    default:
      break;
  }
};

function showStory(
  message,
  btn1Text,
  btn1Action,
  btn2Text = null,
  btn2Action = null,
  img
) {
  const prev = document.querySelector(".story-container");
  if (prev) prev.remove();

  const el = document.createElement("div");
  el.className = "story-container";
  el.innerHTML = `
    <div class="story-container-flex">
      <div class="story-container-image">
        <img src="images/${img}.png" class="story-img">
      </div>
      <div class="story-container-text">
        <div class="story-container-message"></div>
        <div class="story-container-answers"></div>
      </div>
    </div>
  `;

  containerNode.appendChild(el);

  const container = el.querySelector(".story-container-message");
  const answers = el.querySelector(".story-container-answers");

  // Печатаем текст
  let i = 0;
  function typeLetter() {
    if (i < message.length) {
      container.textContent += message[i];
      i++;
      setTimeout(typeLetter, 50);
    }
  }
  typeLetter();

  // После печати добавляем кнопки
  setTimeout(() => {
    const btn1 = document.createElement("button");
    btn1.className = "story-btn story-btn-active";
    btn1.textContent = btn1Text;
    btn1.onclick = btn1Action;
    answers.appendChild(btn1);

    // если передана вторая кнопка — создаем её
    if (btn2Text && btn2Action) {
      const btn2 = document.createElement("button");
      btn2.className = "story-btn story-btn-active";
      btn2.textContent = btn2Text;
      btn2.onclick = btn2Action;
      answers.appendChild(btn2);
    }
  }, (message.length + 10) * 50);
}

let currEnd = 1;


function endAndRemove(code) {
  currEnd = code;
  const el = document.querySelector(".story-container");
  if (el) el.remove();
}

// setTimeout(() => {
//   const helpStory = () => showStory(
//     "странный ты, ладно, меня только что чуть не притоптал гигантский... я даже не знаю кто это был, но был он с размером с два наших лягушатника! Я так устал, пока убегал от него, что у меня нет сил дойти до моих родных болот, не мог бы ты помочь мне? 12 танго бы меня очень выручили :(",
//     "Ты же у торговца берешь? цены те же, 3 танго по 90? Это тогда получается... 360 золота! Если тебе так нужно — бери.",
//     () => showStory(
//       "СПАСИБО ТЕБЕ БОЛЬШОЕ! надеюсь, мы еще встретимся! Удачи, и еще раз спасибо!",
//       "далее",
//       () => {endAndRemove(3); gold -= 360},
//       null,
//       null,
//       "big_golov"
//     ),
//     "Извини, но я тебя даже не знаю",
//     () => showStory(
//       "но.. я так надеялся на твою помощь... прощай.",
//       "далее",
//       () => endAndRemove(2),
//       null,
//       null,
//       "big_golov"
//     ),
//     "big_golov"
//   );

//   showStory(
//     "эй, не похож ты на нейтрала, ты за какие силы воюешь?",
//     "а тебе что?",
//     () => showStory(
//       "ты как разговариваешь, я самый уважаемый музыкант на бамбуковой палочке в нашем лягушатнике, извинись!",
//       "не буду, уходи.",
//       () => showStory(
//         "знай, если я не дойду, моя лягушачья кровь будет на твоих руках, прощай.",
//         "далее",
//         () => endAndRemove(1),
//         null,
//         null,
//         "big_golov"
//       ),
//       "извини.",
//       helpStory,
//       "big_golov"
//     ),
//     "да не за какие... вроде бы..",
//     helpStory,
//     "big_golov"
//   );
// }, 300);



// setTimeout(() => {
//   for (let sheet of document.styleSheets) {
//     for (let rule of sheet.cssRules) {
//       if (rule.selectorText === ".story-container") {
//         rule.style.backgroundImage = `
//           linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
//           url("../images/landscape2.jpg")
//         `;
//       }
//     }
//   }

//   const nextStory = () => showStory(
//           'меня прислал мой папа, отблагодарить тебя за его спасение, правда он переел, и сейчас только спит и квакает..',
//           'а чего он клареткой то не запивал?',
//           () => showStory(
//             'он на диете.',
//             'хорошо, я понял',
//             () => nextnextStory(),
//             'ты не боишься тут один ходить?',
//             () => showStory(
//               'да я тут прыгал, еще до 7-го 38-го, когда еще засуха была, так что за меня не переживай.',
//               'квакого-квакого?',
//               () => showStory(
//                 'седьмого, тридцать восьмого!\nты слушай жабрами, оно лучше.',
//                 'очень постараюсь',
//                 () => nextnextStory(),
//                 null,
//                 null,
//                 'golov'
//               ),
//               null,
//               null,
//               'golov'
//             ),
//             'golov'
//           ),
//           'да не за что, я люблю лягушек, а у него еще крутая дудка была',
//           () => showStory(
//             'да, дудка и в правду хорошая, ему её вручил дикокрыл, когда мой папа купил тому фласку',
//             'хорошо, я понял',
//             () => nextnextStory(),
//             'ты не боишься тут один ходить?',
//             () => showStory(
//               'да я тут прыгал, еще до 7-го 38-го, когда еще засуха была, так что за меня не переживай.',
//               'квакого-квакого?',
//               () => showStory(
//                 'седьмого, тридцать восьмого!\nты слушай жабрами, оно лучше.',
//                 'очень постараюсь',
//                 () => nextnextStory(),
//                 null,
//                 null,
//                 'golov'
//               ),
//               null,
//               null,
//               'golov'
//             ),
//             'golov'
//           ),
//           'golov'
//   )

//   const nextnextStory = () => showStory(
//     'ладно, я поквакал',
//     'давай, пока!',
//     () => endAndRemove(3),
//     'поква!',
//     () => endAndRemove(3),
//     'golov'
//   )

//   switch (currEnd) {
//     case 1:
//       showStory(
//         "папа.. папа! где мой папа?!",
//         "какой папа?",
//         () =>
//           showStory(
//             "мой, мой папа! Ты его не видел?",
//             "нет, не видел",
//             () => endAndRemove(1),
//             "с палочкой такой, музыкант?",
//             () =>
//               showStory(
//                 "да! ты видел его?!",
//                 "да, он встретил кого-то большого, просил у меня золота на танго, но у меня не оказалось",
//                 () =>
//                   showStory(
//                     "о нет... папа.. где же он теперь, я же не успею осмотреть всю долину",
//                     "все равно попробуй его поискать",
//                     () => endAndRemove(1),
//                     "может я смогу тебе помочь? дать золота на ботинки?",
//                     () =>
//                       showStory(
//                         "спасибо! надеюсь это сможет мне помочь.",
//                         "удачи в поисках!",
//                         () => {
//                           endAndRemove(2); gold -= 500},
//                         null,
//                         null,
//                         "golov"
//                       ),
//                     "golov_sad"
//                   ),
//                 null,
//                 null,
//                 "golov_sad"
//               ),
//             "golov_sad"
//           ),
//         null,
//         null,
//         "golov_sad"
//       );

//       break;
//     case 2:
//       showStory(
//         "папа.. папа! где мой папа?!",
//         "ты сын музыканта?",
//         () => showStory(
//           'да! мой папа должен был вернуться домой еще несколько часов назад, но.. но.. он не пришел! Теперь я его ищу. Не знаешь где он сейчас?',
//           'нет, не знаю',
//           () => showStory(
//             'надеюсь он где-то рядом, пока..',
//             'пока',
//             () => endAndRemove(2),
//             null,
//             null,
//             'golov_sad'
//           ),
//           'он может быть в округе или у лавки, просил у меня денег на танго. за ним гнался кто-то большой.',
//           () => showStory(
//             "о нет... папа.. где же он теперь, я же не успею осмотреть всю долину",
//                     "все равно попробуй его поискать",
//                     () => endAndRemove(1),
//                     "может я смогу тебе помочь? дать золота на ботинки?",
//                     () => showStory(
//                         "спасибо! надеюсь это сможет мне помочь.",
//                         "удачи в поисках!",
//                         () => {
//                           endAndRemove(2); gold -= 500},
//                         null,
//                         null,
//                         "golov"
//                       ),

//                     "golov_sad"
//           ),
//           'golov_sad'
//         ),
//         null,
//         null,
//         'golov_sad');
//       break;
//     case 3:
//       showStory('привет! это ты помог моему папе?',
//         'да, я',
//         () => nextStory(),
//         'нет, не я',
//         () => showStory(
//           'да прям не ты, мне про тебя всё всё описали, вылитый ты:\nпервое: крип-переросток\nвторое: богатый\nтретье: добрый\nчетвертое: не лягух',
//           'ладно, раскусил',
//           () => nextStory(),
//           'если квакну, я буду похож на лягуха?',
//           () => showStory(
//             'ахах, смешной, так все же, это ты?',
//             'да, я',
//             () => nextStory(),
//             null,
//             null,
//             'golov'
//           ),
//           'golov'
//         ),
//         'golov'
//       )
//       break;
//     default:
//       break;
//   }
// }, 300);


setTimeout(() => {
  for (let sheet of document.styleSheets) {
    for (let rule of sheet.cssRules) {
      if (rule.selectorText === ".story-container") {
        rule.style.backgroundImage = `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url("../images/landscape3.jpg")
        `;
      }
    }
  }



  switch (currEnd) {
    case 1:
      showStory(
        `*громкие шаги*`,
        'далее',
        () => showStory(
          '*рык*',
          'далее',
          () => showStory(
            'ты..., это ты хотел украсть мой аегис?!',
            'нет',
            () => showStory(
              'так это ты...',
              'далее',
              () => showStory(
                'вы теряете сознание, просыпаясь осознаете, что все что у вас осталось — это только 1000 золота.',
                '#%$#&$',
                () => {
                  endAndRemove(1);
                  gold = 1000;
                  for (let hero of heroes) {
                    hero.lvl = 0;
                    hero.cards = 0;
                  }
                },
                null,
                null,
                'roshan'
              ),
              null,
              null,
              'roshan'
            ),
            'да',
            () => showStory(
              'так это ты...',
              'далее',
              () => showStory(
                'вы теряете сознание, просыпаясь осознаете, что все что у вас осталось — это только 1000 золота.',
                '#%$#&$',
                () => {
                  endAndRemove(1);
                  gold = 1000;
                  for (let hero of heroes) {
                    hero.lvl = 0;
                    hero.cards = 0;
                  }
                },
                null,
                null,
                'roshan'
              ),
              null,
              null,
              'roshan'
            ),
            'roshan'
          ),
          null,
          null,
          'roshan'
        ),
        null,
        null,
        'roshan'
)
      break;
    case 2:

      break;
    case 3:
    showStory()
      break;
    default:
      break;
  }
}, 300);