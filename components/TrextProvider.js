const React = require('react')
const TrextContext = require('./TrextContext')

// TODO: Add debug mode. Will highlight text that is within a Trext tag for spotting text that is not translatable.

module.exports = ({ locale = undefined, translations = {}, children }) => {

  if (translations[locale] === undefined) {
    console.log(`Locale ${locale} is not found in translations. Reverting to default language.`)
  }

  return React.createElement(
      TrextContext.Provider,
      { value: { locale: locale, translations: translations } },
      children
  )
}
