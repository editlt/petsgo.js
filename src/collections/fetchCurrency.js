const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchCurrency = async (displayName = null) => {
    const data = await fetchCollection("Currency");

    const formatCurrency = (currency) => ({
        configName: currency.configName,
        category: currency.category,
        collection: currency.collection,
        tradable: currency.tradable,
        displayName: currency.configData.DisplayName,
        description: currency.configData.Desc,
        IsWorldCurrency: currency.configData.IsWorldCurrency,
        maxAmount: currency.configData.MaxAmount,
        rarity: {
            number: currency.configData.Rarity.RarityNumber,
            name: currency.configData.Rarity.DisplayName,
            announce: currency.configData.Rarity.Announce,
        },

        tiers: currency.configData.Tiers.map((tier) => {
            return {
                orbImage: getImageURL(tier.orbImage),
                imageOutline: getImageURL(tier.imageOutline),
                isBottom: tier.isBottom,
                value: tier.value,
                order: tier.Order,
                tierName: tier.tierName,
                mobileOrbImage: getImageURL(tier.orbImageMobile),
                textColor: tier.textColor,
                rainData: {
                    lightEmission: tier.rainData?.LightEmission ?? null
                },
            }
        }),

        bagTiers: currency.configData.BagTiers.map((bagData) => {
            return {
                value: bagData.value,
                image: getImageURL(bagData.image)
            }
        }),
        rawData: currency
    });

    if (displayName) {
        const currency = data.find(b => b.configData.DisplayName === displayName);
        if (!currency) {
            throw new Error(`Currency with display name "${displayName}" not found`);
        }
        return formatCurrency(currency);
    }

    return data.map(formatCurrency);
};

module.exports = fetchCurrency;