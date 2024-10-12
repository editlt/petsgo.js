const fetchAPI = require('../utils/fetchApi')

const fetchRAP = async (pet) => {
    const data = await fetchAPI('rap');

    if (!pet) {
        console.error('Please provide a pet.')
        return []
    }

    return data
    .filter((petRap) => petRap.configData.id === pet)
    .map((petRap) => {
        return {
            category: petRap.category,
            pet: petRap.configData.id,
            value: petRap.value,
            rawData: petRap
        }
    })
}

module.exports = fetchRAP