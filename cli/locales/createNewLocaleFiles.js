const fs = require('fs')

module.exports = function createNewLocaleFiles(locales, outputDirectory) {
    try {
        for (let locale of locales) {
            fs.writeFileSync(`${outputDirectory}/${locale}.json`, JSON.stringify({
                translated: {},
                notTranslated: {}
            }))
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error(`${outputDirectory} does not exist.`)
            process.exit()
        }
    }
}
