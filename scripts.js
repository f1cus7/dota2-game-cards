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

setInterval(() => {
  gold+= goldPerSec
  goldNode.textContent = gold.toFixed(2);
  document.getElementById('balance-per-sec').innerHTML = `
  ${goldPerSec.toFixed(2)}<img src="images/gold.png" alt="" style="width: 0.75vw" />
                в сек
  `
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
    cards: 0,
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
            console.log("распространённое");
            dropped.common++;
          } else if (chance < casee.chances_common + casee.chances_rare) {
            console.log("редкое");
            dropped.rare++;
          } else if (
            chance <
            casee.chances_common + casee.chances_rare + casee.chances_mythic
          ) {
            console.log("мифическое");
            dropped.mythic++;
          } else if (
            chance <
            casee.chances_common +
              casee.chances_rare +
              casee.chances_mythic +
              casee.chances_epic
          ) {
            console.log("эпическое");
            dropped.epic++;
          } else {
            console.log("легендарное");
            dropped.legend++;
          }
        }
        console.log(dropped);

        const droppedNpc = [];

        if (dropped.common != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "common");
          const rand = Math.floor(Math.random() * filteredArray.length);
          console.log(filteredArray[rand]);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.rare != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "rare");
          const rand = Math.floor(Math.random() * filteredArray.length);
          console.log(filteredArray[rand]);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.mythic != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "mythic");
          const rand = Math.floor(Math.random() * filteredArray.length);
          console.log(filteredArray[rand]);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.epic != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "epic");
          const rand = Math.floor(Math.random() * filteredArray.length);
          console.log(filteredArray[rand]);
          droppedNpc.push(filteredArray[rand].name);
        }
        if (dropped.legend != 0) {
          const filteredArray = heroes.filter((hero) => hero.rare === "legend");
          const rand = Math.floor(Math.random() * filteredArray.length);
          console.log(filteredArray[rand]);
          droppedNpc.push(filteredArray[rand].name);
        }

        const getRarity = (name) => {
          const hero = heroes.find((h) => h.name === name);
          return hero ? hero.rare : null;
        };

        const strEnd = droppedNpc.map((name) => {
          const rarity = getRarity(name);
          let imgHeroDrop = ''
          let idHeroDrop = 0;
          for (const hero of heroes) {
            if(hero.name === name) {
              imgHeroDrop = hero.img
              idHeroDrop = hero.id
            }
          }
          return {
            name: name,
            cards: dropped[rarity],
            img: imgHeroDrop.replace("images/npc_dota_hero_", "").replace(".mp4", ""),
            id: idHeroDrop
          };
        });

        console.log(strEnd);
        for (let npc of strEnd) {
          document.getElementById(`npc-video-${npc.id}`).style.opacity = '100%';
          for (let hero of heroes) {
            if (hero.id === npc.id) {
              hero.cards += npc.cards
            }
          }
        }

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');
const droppedContainer = document.getElementById('dropped-npc-container');

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show')
    
  clickAudio.currentTime = 0;
  clickAudio.play();
})

  openCaseAudio.currentTime = 0;
  openCaseAudio.play();
  
  document.getElementById(`case-img-id-${casee.id}`).style.display = 'block'
  document.getElementById(`case-img-id-${casee.id}`).style.opacity = '100%'
  document.getElementById(`case-img-id-${casee.id}`).style.position = 'fixed'
  document.getElementById(`case-img-id-${casee.id}`).style.width = '30vw'
  document.getElementById(`case-img-id-${casee.id}`).style.height = 'auto'
  document.getElementById(`case-img-id-${casee.id}`).style.transform = 'translate(-30%, -50%)';
  document.getElementById(`case-img-id-${casee.id}`).style.top = '50%'
  document.getElementById(`case-img-id-${casee.id}`).style.left = '50%'
  document.getElementById('case-1').disabled = true;
  document.getElementById('case-2').disabled = true;
  document.getElementById('case-3').disabled = true;
  document.getElementById('case-4').disabled = true;
  document.getElementById('case-5').disabled = true;
  document.getElementById('case-6').disabled = true;
  setTimeout(() => {
  document.getElementById(`case-img-id-${casee.id}`).style.transition = '0s'
  document.getElementById(`case-img-id-${casee.id}`).style.opacity = '0%'
  document.getElementById(`case-img-id-${casee.id}`).style.position = 'static'
  document.getElementById(`case-img-id-${casee.id}`).style.width = '0vw'
  document.getElementById(`case-img-id-${casee.id}`).style.transform = 'translate(50%, 50%)';
  document.getElementById(`case-img-id-${casee.id}`).style.top = '50%'
  document.getElementById(`case-img-id-${casee.id}`).style.left = '50%'
  document.getElementById('case-1').disabled = false;
  document.getElementById('case-2').disabled = false;
  document.getElementById('case-3').disabled = false;
  document.getElementById('case-4').disabled = false;
  document.getElementById('case-5').disabled = false;
  document.getElementById('case-6').disabled = false;
  setTimeout(() => {
  document.getElementById(`case-img-id-${casee.id}`).style.transition = '6s'
  }, 100);
  }, 6000);

  setTimeout(() => {
    droppedContainer.innerHTML = '';
    modal.classList.add('show');

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
      const hero = heroes.find(h => h.id === npc.id);
      if (hero) {
        const colors = {
          common: 'green',
          rare: 'rgb(37, 37, 207)',
          mythic: 'blueviolet',
          epic: 'brown',
          legend: 'gold'
        };
        const color = colors[hero.rare] || 'gray';
        card.style.borderColor = color;
        document.getElementById(`dropped-hr-${npc.id}`).style.borderColor = color;
      }

      pickAudio.currentTime = 0;
      pickAudio.play();
      index++;
    }, 1000);
  }, 6000);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show')
    
  clickAudio.currentTime = 0;
  clickAudio.play();
  };


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
      console.log("Имя:", npc.name);
      console.log("Атрибут:", npc.primaryAttribute);
      console.log("Картинка:", npc.img);
      const reg = npc.img
        .replace("images/npc_dota_hero_", "")
        .replace(".mp4", "");
      const attribute = npc.primaryAttribute.toLowerCase();
      let attributeTranslate = "";
      let heroAttribute;
      if (npc.primaryAttribute === "Strength") {
        attributeTranslate = "Сила";
        heroAttribute = goldPerSecAttributeStrenght
      } else if (npc.primaryAttribute === "agallity") {
        attributeTranslate = "Ловкость";
        heroAttribute = goldPerSecAttributeAgallity
      } else if (npc.primaryAttribute === "Intelligence") {
        attributeTranslate = "Интеллект";
        heroAttribute = goldPerSecAttributeIntelligence
      } else if (npc.primaryAttribute === "Universal") {
        attributeTranslate = "Универсал";
        heroAttribute = goldPerSecAttributeUniversal
      }
      document.getElementById(`${attribute}-info`).innerHTML = `
      <div style="display:flex; flex-direction: column">
        <div class="per-sec-container">
          <div class="per-sec-npc">${npc.name}: 0.05/с</div>
          <div class="per-sec-attribute">${attributeTranslate}: ${heroAttribute.toFixed(2)}/с</div>
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
            <button onclick='updateLvl(${npc.id})' class="btn-update-lvl-npc" disabled>улучшить</button>
          </div>
        </div>
      </div>
      `;

      const progressBars = document.querySelectorAll(".cards-visual");

progressBars.forEach(pb => {
  const container = pb.closest(".info-container");
  const cardsValue = container.querySelector(".cards-value").textContent;
  
  const [pb1Str, pb2Str] = cardsValue.split("/").map(s => s.trim());
  const pb1 = Number(pb1Str);
  const pb2 = Number(pb2Str);

  let pb3 = 0;
  if (pb1 > 0 && pb2 > 0) {
    pb3 = (pb1 / pb2) * 100;
    pb3 = Math.min(pb3, 100);
  }

  pb.style.setProperty("--before-width", `${pb3}%`);

  if (pb1 >= pb2) {
    pb.style.setProperty("--before-color", "green");
    const btn = container.querySelector(".btn-update-lvl-npc");
    btn.style.opacity = "100%";
    btn.disabled = false;
  }
});
    }
  }
};

const updateLvl = (id) => {
  console.log(id);
  const hero = heroes.find(h => h.id === id);
  console.log(hero.name)
  if(hero.cards >= lvlObj[hero.lvl]) {
    console.log(hero.cards, lvlObj[hero.lvl])
    hero.cards -= lvlObj[hero.lvl];
    hero.lvl++
    let goldHero = 0; 
    if(hero.rare === 'common') {
      goldHero += 0.10
    } else if(hero.rare === 'rare') {
      goldHero += 0.25
    } else if(hero.rare === 'mythic') {
      goldHero += 0.50
    }  else if(hero.rare === 'epic') {
      goldHero += 1.00
    }  else if(hero.rare === 'legend') {
      goldHero += 2.50
    }
    if (hero.primaryAttribute === 'Strength') {
      goldPerSecAttributeStrenght += goldHero
    } else if(hero.primaryAttribute === 'agallity') {
      goldPerSecAttributeAgallity += goldHero
    } else if(hero.primaryAttribute === 'Intelligence') {
      goldPerSecAttributeIntelligence += goldHero
    }  else if(hero.primaryAttribute === 'Universal') {
      goldPerSecAttributeUniversal += goldHero
    }

    goldPerSec += goldHero;

    console.log(goldPerSec)
    openNpc(id)
  }
};


