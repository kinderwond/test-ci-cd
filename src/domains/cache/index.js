const CacheService = require("./cache.service")

function getCacheService() {
    const url = process.env.REDIS_URL
    return new CacheService(url)
}

module.exports = {
    getCacheService
}