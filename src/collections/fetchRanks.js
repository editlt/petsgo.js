const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchRanks = async (displayName = null) => {
    const data = await fetchCollection("Ranks");

    const formatRanks = (rank) => ({
        rawData: rank // im not doing this wth
    });

    if (displayName) {
        const rank = data.find(b => b.configName === displayName);
        if (!rank) {
            throw new Error(`Rank with display name "${displayName}" not found`);
        }
        return formatRanks(rank);
    }

    return data.map(formatRanks);
};

module.exports = fetchRanks;