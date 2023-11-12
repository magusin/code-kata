function generateHashtag(str) {
    result = "";
    const worlds = str.split(" ");
    for (world of worlds) {
        if (world !== "") {
            delTrim = world.trim()
            result += delTrim[0].toUpperCase() + delTrim.slice(1)
        }
    }
    if (result === "") {
        return false
    }
    if (result.length > 139) {
        return false
    }
    const final = '#' + result
    return final
}

module.exports = generateHashtag 

