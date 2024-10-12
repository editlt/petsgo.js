const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchEffects = async (displayName = null) => {
    const data = await fetchCollection("Effects");

    const formatEffects = (effect) => ({
        configName: effect.configName,
        category: effect.category,
        collection: effect.collection,
        name: effect.configData.Name,
        mode: effect.configData.Mode,

        tiers: effect.configData.Tiers.map((tier) => {
            return {
                Icon: getImageURL(tier.Icon),
                Description: tier.Desc,
                Rarity: {
                    number: tier.Rarity.RarityNumber,
                    name: tier.Rarity.DisplayName,
                    DifficultyThreshold: tier.Rarity.DifficultyThreshold,
                    announce: tier.Rarity.Announce
                },
                Powers: {
                    RollSpeed: tier.Powers?.RollSpeed ?? null,
                    Luck: tier.Powers?.Luck ?? null,
                    BreakableMax: tier.Powers?.BreakableMax ?? null,
                    BreakableRate: tier.Powers?.BreakableRate ?? null,
                    BreakableDamage: tier.Powers?.BreakableDamage ?? null,
                    BreakableLuck: tier.Powers?.BreakableLuck ?? null,
                    WalkspeedBoost: tier.Powers?.WalkspeedBoost ?? null,
                    ItemsChanceBoost: tier.Powers?.ItemsChanceBoost ?? null,
                    Coins: tier.Powers?.Coins ?? null,
                    InstantLuck: tier.Powers?.InstantLuck ?? null
                }
            }
        }),
        
        rawData: effect
    });

    if (displayName) {
        const effects = data.find(b => b.configData.Name === displayName);
        if (!effects) {
            throw new Error(`Potion/Effect with display name "${displayName}" not found`);
        }
        return formatEffects(effects);
    }

    return data.map(formatEffects);
};

module.exports = fetchEffects;