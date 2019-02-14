const fs = require('fs')

module.exports = function insertNewTrextTagIds (tags) {
    for (let tag of tags) {

        const contents = fs.readFileSync(tag.__componentFilePath, 'utf8')

        if (tag.__isNewTrextTag) {
            const newContents = contents.replace(
                tag.__trextTagContent,
                tag.__trextTagContent.replace('<Trext', `<Trext id='${tag.__id}'`)
            )
            fs.writeFileSync(tag.__componentFilePath, newContents)
        }
    }
}
