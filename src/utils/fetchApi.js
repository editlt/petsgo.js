const fetchURL = async (url) => {
    const data = await fetch(`https://petsgo.biggamesapi.io/api/${url}`)
    const json = await data.json()
    if (json.error) {
        const errorMessage = typeof json.error === 'object' ? JSON.stringify(json.error) : json.error
        throw new Error(errorMessage)
    }

    if (json.data) {
        return json.data
    }

    throw new Error('unknown error or missing data')
}

module.exports = fetchURL