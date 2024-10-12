const getImageURL = require('../utils/getImageUrl');
const fetchCollection = require('../utils/fetchCollection');

const fetchProducts = async (displayName = null) => {
    const data = await fetchCollection("Products");

    const formatProducts = (product) => ({
        configName: product.configName,
        category: product.category,
        collection: product.collection,
        name: product.configData.DisplayName,
        ProductId: product.configData.ProductId,
        Icon: getImageURL(product.configData.Icon),
        Description: product.configData.Desc,
        
        rawData: product
    });

    if (displayName) {
        const product = data.find(b => b.configData.DisplayName === displayName);
        if (!product) {
            throw new Error(`Product with display name "${displayName}" not found`);
        }
        return formatProducts(product);
    }

    return data.map(formatProducts);
};

module.exports = fetchProducts;