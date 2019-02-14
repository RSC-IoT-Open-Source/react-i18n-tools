const fs = require('fs')

module.exports = function importConfig () {
    try {
        const config = JSON.parse(fs.readFileSync(`${process.cwd()}/.i18nconfig`, 'utf8'))
        return {
            outputDirectory: `${process.cwd()}/${config.outputDirectory}`,
            rootComponentDirectory: `${process.cwd()}/${config.rootComponentDirectory}`,
            locales: config.locales
        }
    } catch (err) {
        console.error(`Could not find and import .i18nconfig`)
        process.exit()
    }
}
