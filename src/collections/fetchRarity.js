const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchRarity = async (displayName = null) => {
    const data = await fetchCollection("Rarity");

    const formatRarity = (rarity) => ({
        configName: rarity.configName,
        category: rarity.category,
        collection: rarity.collection,
        rarityNumber: rarity.configData.RarityNumber,
        color: rarity.configData.Color,
        DifficultyThreshold: rarity.configData.DifficultyThreshold,
        DisplayName: rarity.configData.DisplayName,
        Announce: rarity.configData.Announce,

        rawData: rarity
    });

    if (displayName) {
        const rarity = data.find(b => b.configData.DisplayName === displayName);
        if (!rarity) {  
            throw new Error(`rarity with display name "${displayName}" not found`);
        }
        return formatRarity(rarity);
    }

    return data.map(formatRarity);
};

module.exports = fetchRarity;