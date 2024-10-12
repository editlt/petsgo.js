const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchEggs = async (displayName = null) => {
    const data = await fetchCollection("Eggs");

    const formatEggs = (eggs) => ({
        configName: eggs.configName,
        category: eggs.category,
        collection: eggs.collection,
        name: eggs.configData.Name,
        Number: eggs.configData.Number,
        icon: getImageURL(eggs.configData.Icon),
        MinDifficulty: eggs.configData?.MinDifficulty ?? null,
        AssociatedUpgradeId: eggs.configData?.AssociatedUpgradeId ?? null,
        
        rawData: eggs
    });

    if (displayName) {
        const eggs = data.find(b => b.configData.Name === displayName);
        if (!eggs) {
            throw new Error(`Egg with display name "${displayName}" not found`);
        }
        return formatEggs(eggs);
    }

    return data.map(formatEggs);
};

module.exports = fetchEggs;