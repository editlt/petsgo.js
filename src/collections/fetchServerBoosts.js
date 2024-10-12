const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchServerBoosts = async (displayName = null) => {
    const data = await fetchCollection("ServerBoosts");

    const formatServerBoosts = (boost) => ({
        configName: boost.configName,
        category: boost.category,
        collection: boost.collection,
        RequiredUpgradeId: boost.configData.RequiredUpgradeId,
        Description: boost.configData.Description,
        Power: boost.configData.Power,
        Color: boost.configData.Color,
        DisplayName: boost.configData.DisplayName,
        Weight: boost.configData.Weight,
        StartMessage: boost.configData.StartMessage,
        Icon: getImageURL(boost.configData.Icon),
        EndMessage: boost.configData.EndMessage,
        
        rawData: boost
    });

    if (displayName) {
        const boost = data.find(b => b.configData.DisplayName === displayName);
        if (!boost) {  
            throw new Error(`ServerBoost with display name "${displayName}" not found`);
        }
        return formatServerBoosts(boost);
    }

    return data.map(formatServerBoosts);
};

module.exports = fetchServerBoosts;