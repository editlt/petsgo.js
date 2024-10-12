const getImageURL = (imageId) => {
    imageId = imageId.toString()
    imageId = imageId.replace('rbxassetid://', "")
    return `https://biggamesapi.io/image/${imageId}`
};

module.exports = getImageURL