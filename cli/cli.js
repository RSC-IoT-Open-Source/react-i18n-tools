const getComponentFiles = require('./tags/getComponentFiles')
const getLocaleFiles = require('./locales/getLocaleFiles')
const createNewLocaleFiles = require('./locales/createNewLocaleFiles')
const extractTags = require('./tags/extractTags')
const updateLocaleFile = require('./locales/updateLocaleFile')
const insertNewTrextTagIds = require('./tags/insertNewTrextTagIds')
const validateTrextTagIdsAreUnique = require('./tags/validateTrextTagIdsAreUnique')

const { outputDirectory, rootComponentDirectory, locales } = require('./config/importConfig')()

createNewLocaleFiles(locales, outputDirectory)
const localeFiles = getLocaleFiles(outputDirectory)
const componentFiles = getComponentFiles(rootComponentDirectory)
const tags = Array.from(extractTags(componentFiles, localeFiles))

validateTrextTagIdsAreUnique(tags)
// TODO: Validate all Tag IDs exist in the files.
insertNewTrextTagIds(tags)

for (let localeFile of localeFiles) {
    updateLocaleFile(localeFile, tags)
}
