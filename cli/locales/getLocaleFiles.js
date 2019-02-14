const fs = require('fs')

module.exports = function getLocaleFiles(outputDirectory) {
    try {
        return fs.readdirSync(outputDirectory)
            .map((file) => `${outputDirectory}${file}`)
            .filter((file) => fs.statSync(`${file}`).isFile())
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error(`${outputDirectory} does not exist.`)
            process.exit()
        }
    }
}
