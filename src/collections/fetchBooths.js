const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchBooths = async (displayName = null) => {
    const data = await fetchCollection("Booths");

    const formatBooth = (booth) => ({
        configName: booth.configName,
        category: booth.category,
        collection: booth.collection,
        displayName: booth.configData.DisplayName,
        icon: getImageURL(booth.configData.Icon),
        description: booth.configData.Desc,
        tradable: booth.configData.tradable,
        rarity: {
            number: booth.configData.Rarity.RarityNumber,
            name: booth.configData.Rarity.DisplayName,
            announce: booth.configData.Rarity.Announce,
            DifficultyThreshold: booth.configData.Rarity.DifficultyThreshold
        },
        
        rawData: booth
    });

    if (displayName) {
        const booth = data.find(b => b.configData.DisplayName === displayName);
        if (!booth) {
            throw new Error(`Booth with display name "${displayName}" not found`);
        }
        return formatBooth(booth);
    }

    return data.map(formatBooth);
};

module.exports = fetchBooths;