const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchHoverboards = async (displayName = null) => {
    const data = await fetchCollection("Hoverboards");

    const formatHoverboard = (hoverboard) => ({
        configName: hoverboard.configName,
        category: hoverboard.category,
        collection: hoverboard.collection,
        displayName: hoverboard.configData.DisplayName,
        icon: getImageURL(hoverboard.configData.Icon),
        description: hoverboard.configData.Desc,
        tradable: hoverboard.configData.tradable,
        ShinyParticleScale: hoverboard.configData.ShinyParticleScale,
        CanBeShiny: hoverboard.configData.CanBeShiny,
        rarity: {
            number: hoverboard.configData.Rarity.RarityNumber,
            name: hoverboard.configData.Rarity.DisplayName,
            announce: hoverboard.configData.Rarity.Announce,
            DifficultyThreshold: hoverboard.configData.Rarity.DifficultyThreshold
        },
        Sounds: {
            equip: hoverboard.configData.Sounds?.equip ?? null,
            idle: hoverboard.configData.Sounds?.idle ?? null,
            jump: hoverboard.configData.Sounds?.jump ?? null
        },
        
        rawData: hoverboard
    });

    if (displayName) {
        const hoverboard = data.find(b => b.configData.DisplayName === displayName);
        if (!hoverboard) {
            throw new Error(`hoverboard with display name "${displayName}" not found`);
        }
        return formatHoverboard(hoverboard);
    }

    return data.map(formatHoverboard);
};

module.exports = fetchHoverboards;