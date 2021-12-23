const redis = require("redis");

class CacheService {
    cache = null
    connectionUrl = ""

    constructor(url) {
        if (typeof url === "string") {
            this.connectionUrl = url
        }
        this.init()
    }

    async init() {
        this.cache = redis.createClient({
            url: this.connectionUrl
        });
        this.cache.on('error', (err) => console.log('Redis Client Error', err));

        await this.cache.connect();
    }

    validateCache() {
        if (!this.cache) {
            throw new Error("Invalid cache instance")
        }
    }
    get(key) {
        this.validateCache()
        return this.cache.get(key)
    }

    set(key, value, options) {
        this.validateCache()
        return this.cache.set(key, value)
    }
}

module.exports = CacheService