const fetchURL = require('./fetchApi')

const fetchCollection = async (collection) => {
    return await fetchURL(`collection/${collection}`)
}

module.exports = fetchCollection