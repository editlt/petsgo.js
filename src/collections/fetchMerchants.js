const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchMerchants = async (displayName = null) => {
    const data = await fetchCollection("Merchants");

    const formatMerchant = (merchant) => ({
        configName: merchant.configName,
        category: merchant.category,
        collection: merchant.collection,
        PriceMult: merchant.configData.PriceMult,
        DisableApproachOpen: merchant.configData.DisableApproachOpen,
        CurrencyNickname: merchant.configData.CurrencyNickname,
        HideNotification: merchant.configData.HideNotification,
        Slots: merchant.configData.Slots,
        GetOffers: merchant.configData.GetOffers,
        displayName: merchant.configData.DisplayName,
        MachineName: merchant.configData.MachineName,
        CurrencyColor: merchant.configData.CurrencyColor,
        UpgradeRequirement: merchant.configData.UpgradeRequirement,
        RefreshRate: merchant.configData.RefreshRate,
        HideRespect: merchant.configData.HideRespect,
        Stock: {
            stock: merchant.configData.Stock || []
        },
        
        rawData: merchant
    });

    if (displayName) {
        const merchant = data.find(b => b.configName === displayName); // anyone reading the code, sorry idk how else to search for it
        if (!merchant) {
            throw new Error(`merchant with display name "${displayName}" not found`);
        }
        return formatMerchant(merchant);
    }

    return data.map(formatMerchant);
};

module.exports = fetchMerchants;