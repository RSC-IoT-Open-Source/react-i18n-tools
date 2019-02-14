const fs = require('fs')
const extractTagText = require('../tags/extractTagText')

module.exports = function updateLocaleFile (localeFile, tags) {
    const localeFileContent = JSON.parse(fs.readFileSync(localeFile, 'utf8'))
    for (let tag of tags) {
        if (localeFileContent[tag.__id] === undefined) {
            localeFileContent.notTranslated[tag.__id] = {
                default: extractTagText(tag.__trextTagContent),
                translated: ''
            }
        }
    }
    fs.writeFileSync(localeFile, JSON.stringify(localeFileContent))
}
