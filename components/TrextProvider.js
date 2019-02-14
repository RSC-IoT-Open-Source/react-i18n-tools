const React = require('react')
const TrextContext = require('./TrextContext')

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
