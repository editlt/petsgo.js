const fetchAPI = require('../utils/fetchApi')

const fetchExists = async (pet) => {
    const data = await fetchAPI('exists');

    if (!pet) {
        console.error('Please provide a pet.')
        return []
    }

    return data
    .filter((existsData) => existsData.configData.id === pet)
    .map((existsData) => {
        return {
            category: existsData.category,
            pet: existsData.configData.id,
            exists: existsData.value,
            rawData: existsData
        }
    })
}

module.exports = fetchExists