const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchGamepasses = async (displayName = null) => {
    const data = await fetchCollection("Gamepasses");

    const formatGamepasses = (gamepasses) => ({
        configName: gamepasses.configName,
        category: gamepasses.category,
        collection: gamepasses.collection,
        name: gamepasses.configData.DisplayName,
        ProductId: gamepasses.configData.ProductId,
        Icon: getImageURL(gamepasses.configData.Icon),
        Description: gamepasses.configData.Desc,
        
        rawData: gamepasses
    });

    if (displayName) {
        const gamepasses = data.find(b => b.configData.DisplayName === displayName);
        if (!gamepasses) {
            throw new Error(`Gamepass with display name "${displayName}" not found`);
        }
        return formatGamepasses(gamepasses);
    }

    return data.map(formatGamepasses);
};

module.exports = fetchGamepasses;