const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchItems = async (displayName = null) => {
    const data = await fetchCollection("MiscItems");

    const formatItems = (item) => ({
        configName: item.configName,
        category: item.category,
        collection: item.collection,
        displayName: item.configData.DisplayName,
        icon: getImageURL(item.configData.Icon),
        AltIcon: item.configData?.AltIcon ? getImageURL(item.configData.AltIcon) : null,
        description: item.configData.Desc,
        tradable: item.configData.tradable,
        rarity: {
            number: item.configData.Rarity.RarityNumber,
            name: item.configData.Rarity.DisplayName,
            announce: item.configData.Rarity.Announce,
            DifficultyThreshold: item.configData.Rarity.DifficultyThreshold
        },
        
        rawData: item
    });

    if (displayName) {
        const item = data.find(b => b.configData.DisplayName === displayName);
        if (!item) {
            throw new Error(`item with display name "${displayName}" not found`);
        }
        return formatItems(item);
    }

    return data.map(formatItems);
};

module.exports = fetchItems;