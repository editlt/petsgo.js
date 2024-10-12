const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchFruits = async (displayName = null) => {
    const data = await fetchCollection("Fruits");

    const formatFruits = (fruits) => ({
        configName: fruits.configName,
        category: fruits.category,
        collection: fruits.collection,
        ShinyIcon: getImageURL(fruits.configData.ShinyIcon),
        Duration: fruits.configData.Duration,
        displayName: fruits.configData.DisplayName,
        Description: fruits.configData.Desc,
        UpgradeTier: fruits.configData.UpgradeTier,
        Icon: getImageURL(fruits.configData.Icon),
        rarity: {
            number: fruits.configData.Rarity.RarityNumber,
            name: fruits.configData.Rarity.DisplayName,
            DifficultyThreshold: fruits.configData.Rarity.DifficultyThreshold,
            announce: fruits.configData.Rarity.Announce
        },

        boost: fruits.configData.Boost.map((boost) => {
            return {
                amount: boost.Amount,
                Type: boost.Type
            }
        }),

        rawData: fruits
    });

    if (displayName) {
        const Fruits = data.find(b => b.configData.DisplayName === displayName);
        if (!Fruits) {
            throw new Error(`Fruit with display name "${displayName}" not found`);
        }
        return formatFruits(Fruits);
    }

    return data.map(formatFruits);
};

module.exports = fetchFruits;