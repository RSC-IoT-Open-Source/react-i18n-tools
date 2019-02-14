const fs = require('fs')
const TrextTagsRegex = require('./TrextTagsRegex')
const extractProps = require('./extractProps')

module.exports = function* parseTags(componentFiles, localeFiles) {
    for (let componentFile of componentFiles) {
        const fileContents = fs.readFileSync(componentFile, 'utf8')
        const tagMatches = fileContents.match(TrextTagsRegex('gm')) || []

        for (let tagMatch of tagMatches) {
            yield {
                __componentFilePath: componentFile,
                __trextTagContent: tagMatch,
                ...extractProps(tagMatch, localeFiles)
            }
        }
    }
}
