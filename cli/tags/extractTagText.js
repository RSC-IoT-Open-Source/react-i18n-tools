const TrextTagTextRegex = require('./TrextTagTextRegex')

module.exports = function extractTagText (trextTagContent) {
    const [,text] = trextTagContent.match(TrextTagTextRegex()).map((match) => match.replace(/\r?\n|\r|\s\s/gm, ''))
    return text
}
