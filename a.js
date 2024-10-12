const fetchBooths = require('./src/collections/fetchBooths')
// const petExists = require('./other/petExists')
// const { getExist } = require('petsim.js')
// const fetchCurrency = require('./collections/fetchCurrency')
// const fetchEffects = require('./collections/fetchEffects')
// const fetchEggs = require('./collections/fetchEggs')
// const fetchFruits = require('./collections/fetchFruits')
// const fetchGamepasses = require('./collections/fetchGamepasses')
// const fetchHoverboards = require('./collections/fetchHoverboards')
// const fetchMerchants = require('./collections/fetchMerchants')
// const fetchItems = require('./collections/fetchItems')
// const fetchPets = require('./collections/fetchPets')
// const fetchUpgrades = require('./collections/fetchUpgrades')
// const fetchVendingMachine = require('./collections/fetchVendingMachine')

async function b() {
    const booths = await fetchBooths("Default Booth"); 
    console.log(JSON.stringify(booths.configName));
}

async function a() {
    const exists = await petExists("Cat");
    console.log(JSON.stringify(exists));
}

async function c() {
    const exists = await getExist("Cat");
    console.log(JSON.stringify(exists));
}

async function d() {
    const currency = await fetchCurrency("Coins");
    console.log(JSON.stringify(currency));
}

async function e() {
    const effects = await fetchEffects("Golden Dice Potion");
    console.log(JSON.stringify(effects));
}

async function f() {
    const effects = await fetchEggs("Cracked Egg");
    console.log(JSON.stringify(effects));
}

async function g() {
    const effects = await fetchFruits("Banana");
    console.log(JSON.stringify(effects));
}

async function h() {
    const effects = await fetchGamepasses("Ultra Lucky");
    console.log(JSON.stringify(effects));
}

async function i() {
    const effects = await fetchHoverboards("Blue Flying Carpet");
    console.log(JSON.stringify(effects));
}

async function j() {
    const effects = await fetchMerchants("AdvancedIndexMerchant");
    console.log(JSON.stringify(effects));
}

async function k() {
    const effects = await fetchItems("Index Token");
    console.log(JSON.stringify(effects));
}

async function L() {
    const effects = await fetchPets("Abyssal Dolphin");
    console.log(JSON.stringify(effects));
}

async function m() {
    const effects = await fetchUpgrades("Second Chance");
    console.log(JSON.stringify(effects));
}

async function n() {
    const effects = await fetchVendingMachine("Potions");
    console.log(JSON.stringify(effects));
}


b()