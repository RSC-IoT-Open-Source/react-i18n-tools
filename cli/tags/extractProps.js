const TrextPropsRegex = require('./TrextPropsRegex')
const uuid = require('uuid/v4')

module.exports = function parseProps(tag, localeFiles) {
    const propMatches = tag.match(TrextPropsRegex()) || []

    let tagId = uuid(),
        props = {},
        isNewTrextTag = true
    for (let propMatch of propMatches) {
        const [propName, propValue] = propMatch.replace(/\s*/gm, '')
            .replace(/['"]$/, '')
            .split(/='|="/)

        if (propName === 'id') {
            tagId = propValue
            isNewTrextTag = false
        } else {
            props[propName] = propValue
        }
    }
    return {
        __id: tagId,
        __isNewTrextTag: isNewTrextTag,
        props: props
    }
}
