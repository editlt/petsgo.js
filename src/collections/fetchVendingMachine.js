const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchMachine = async (displayName = null) => {
    const data = await fetchCollection("VendingMachines");

    const formatMachine = (machine) => ({
        configName: machine.configName,
        category: machine.category,
        collection: machine.collection,
        FlashSaleUpgrade: machine.configData.FlashSaleUpgrade,
        CurrencyType: machine.configData.CurrencyType,
        DisplayName: machine.configData.DisplayName,
        MachineName: machine.configData.MachineName,
        PromptIcon: getImageURL(machine.configData.PromptIcon),
        Prompt: machine.configData.Prompt,
        UpgradePrefix: machine.configData.UpgradePrefix,
        CurrencyCosts: {
            costs: machine.configData.CurrencyCosts || []
        },
        RestockTimes: {
            times: machine.configData.RestockTimes || []
        },
        Stocks: {
            stocks: machine.configData.Stocks || []
        },
        Loot: {
            loot: machine.configData.Loot || []
        },

        rawData: machine
    });

    if (displayName) {
        const machine = data.find(b => b.configData.DisplayName === displayName);
        if (!machine) {  
            throw new Error(`machine with display name "${displayName}" not found`);
        }
        return formatMachine(machine);
    }

    return data.map(formatMachine);
};

module.exports = fetchMachine;