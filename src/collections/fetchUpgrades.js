const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchUpgrades = async (displayName = null) => {
    const data = await fetchCollection("Upgrades");

    const formatUpgrades = (upgrade) => ({
        configName: upgrade.configName,
        category: upgrade.category,
        collection: upgrade.collection,
        DisplayName: upgrade.configData.DisplayName,
        Implemented: upgrade.configData.Implemented,
        Desc: upgrade.configData.Desc,
        Depth: upgrade.configData.Depth,
        GroupId: upgrade.configData.GroupId,
        ChildrenCount: upgrade.configData.ChildrenCount,
        Icon: getImageURL(upgrade.configData.Icon),
        Powers: {
            FasterEggs: upgrade.configData.Powers?.FasterEggs ?? null,
            RollSpeed: upgrade.configData.Powers?.RollSpeed ?? null,
            CoinsComboBoost: upgrade.configData.Powers?.CoinsComboBoost ?? null,
            RandomCoinBonusChance: upgrade.configData.Powers?.RandomCoinBonusChance ?? null,
            RandomCoinBonusBoost: upgrade.collection.Powers?.RandomCoinBonusBoost ?? null,
            ItemsChance: upgrade.collection.Powers?.ItemsChance ?? null,
            ItemsAmount: upgrade.collection.Powers?.ItemsAmount ?? null,
            ItemsQualityBoost: upgrade.collection.Powers?.ItemsQualityBoost ?? null,
            Luck: upgrade.collection.Powers?.Luck ?? null,
            Egg: upgrade.collection.Powers?.Egg ?? null,
            "Pet Equip": upgrade.collection.Powers?.["Pet Equip"] ?? null,
            PetSpeed: upgrade.collection.Powers?.PetSpeed ?? null,
            PetLuck: upgrade.collection.Powers?.PetLuck ?? null,
            DupePetChance: upgrade.collection.Powers?.DupePetChance ?? null,
            ShinyPets: upgrade.collection.Powers?.ShinyPets ?? null,
            "Break Faster": upgrade.collection.Powers?.["Break Faster"] ?? null,
            Lightning: upgrade.collection.Powers?.Lightning ?? null,
            HiddenGifts: upgrade.collection.Powers?.HiddenGifts ?? null,
            MorePresents: upgrade.collection.Powers?.MorePresents ?? null,
            "Extra Breakable Coins": upgrade.collection.Powers?.["Extra Breakable Coins"] ?? null,
            "Breaking Bonus": upgrade.collection.Powers?.["Breaking Bonus"] ?? null,
            "Extra Breakables": upgrade.collection.Powers?.["Extra Breakables"] ?? null,
            BreakableLuck: upgrade.collection.Powers?.BreakableLuck ?? null,
            BreakableBetterDrops: upgrade.collection.Powers?.BreakableBetterDrops ?? null,
            BreakableDrops: upgrade.collection.Powers?.BreakableDrops ?? null,
            Fruit: upgrade.collection.Powers?.Fruit ?? null,
            FruitStack: upgrade.collection.Powers?.FruitStack ?? null,
            PotionDurationBoost: upgrade.collection.Powers?.PotionDurationBoost ?? null,
            PotionVending: upgrade.collection.Powers?.PotionVending ?? null,
            FasterPotionVendingRestock: upgrade.collection.Powers?.FasterPotionVendingRestock ?? null,
            MorePotionVendingStock: upgrade.collection.Powers?.MorePotionVendingStock ?? null,
            PotionVendingDiscount: upgrade.collection.Powers?.PotionVendingDiscount ?? null,
            InstantSecondChance: upgrade.collection.Powers?.InstantSecondChance ?? null,
            FasterPotionCrafting: upgrade.collection.Powers?.FasterPotionCrafting ?? null,
            PotionCraftingDouble: upgrade.collection.Powers?.PotionCraftingDouble ?? null,
            HoverboardSpeed: upgrade.collection.Powers?.HoverboardSpeed ?? null,
            LevelingXPBoost: upgrade.collection.Powers?.LevelingXPBoost ?? null,
            LevelingItems: upgrade.collection.Powers?.LevelingItems ?? null,
            LevelingItemsQualityBoost: upgrade.collection.Powers?.LevelingItemsQualityBoost ?? null,
            Paychecks: upgrade.collection.Powers?.Paychecks ?? null,
            Friends: upgrade.collection.Powers?.Friends ?? null,
            BiggerBooth: upgrade.collection.Powers?.BiggerBooth ?? null,
            BiggerMailbox: upgrade.collection.Powers?.BiggerMailbox ?? null,
        },
        Price: {
            id: upgrade.configData.Price?.[0]._data.id,
            cost: upgrade.configData.Price?.[0]._data._am,
        },
        
        rawData: upgrade
    });

    if (displayName) {
        const upgrade = data.find(b => b.configName === displayName);
        if (!upgrade) {  
            throw new Error(`Upgrade with display name "${displayName}" not found`);
        }
        return formatUpgrades(upgrade);
    }

    return data.map(formatUpgrades);
};

module.exports = fetchUpgrades;