const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchPets = async (displayName = null) => {
    const data = await fetchCollection("Pets");

    const formatPet = (pet) => ({
        configName: pet.configName,
        category: pet.category,
        collection: pet.collection,
        name: pet.configData.name,
        difficulty: pet.configData.difficulty,
        fly: pet.configData?.fly ?? null,
        secret: pet.configData?.secret ?? null,
        huge: pet.configData?.huge ?? null,
        fromWorldNumber: pet.configData?.fromWorldNumber ?? null,
        fromZoneNumber: pet.configData?.fromZoneNumber ?? null,
        thumbnail: getImageURL(pet.configData.thumbnail),
        animations: {
            vertexColorAnimSpeed: pet.configData.animations?.vertexColorAnimSpeed ?? null,
            vertexColorAnim: pet.configData.animations?.vertexColorAnim || [],
            spinZ: pet.configData.animations?.spinZ ?? null,
            RenderStepped: pet.configData.animations?.RenderStepped ?? null,
            angelusSpin: pet.configData.animations?.angelusSpin ?? null,
            balloon: pet.configData.animations?.balloon ?? null,
            ballBounceHeight: pet.configData.animations?.ballBounceHeight ?? null,
            flyHeight: pet.configData.animations?.flyHeight ?? null,
            flyHeightChange: pet.configData.animations?.flyHeightChange ?? null,
            flySpeed: pet.configData.animations?.flySpeed ?? null,
        },
        
        rawData: pet
    });

    if (displayName) {
        const pet = data.find(b => b.configData.name === displayName);
        if (!pet) {
            throw new Error(`pet with display name "${displayName}" not found`);
        }
        return formatPet(pet);
    }

    return data.map(formatPet);
};

module.exports = fetchPets;