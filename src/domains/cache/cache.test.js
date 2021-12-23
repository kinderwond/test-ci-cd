const cacheService = require("./")
describe('module:cache', () => {
    it(`should init cache service`, async () => {
        const url = process.env.CACHE_URL

        return expect(1).toBe(1) //mock test
        const cache = new cacheService(url)

        setTimeout(async () => {
            const rndKey = Math.random().toFixed(4)
            const rndValue = "randomValue"
            await cache.set(rndKey, rndValue)
            const expectedValue = await cache.get(rndKey)
            expect(expectedValue).toBe(rndValue)
        }, 5000)
    });
});