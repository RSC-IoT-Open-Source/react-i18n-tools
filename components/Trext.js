const React = require('react')
const TrextContext = require('./TrextContext')

let TextComponent = undefined

module.exports = ({ Text, style, id, children }) => {
  if (TextComponent === undefined && Text === undefined) {
    throw new Error('You must initialize Trext with a Component to wrap text in. In React Native this is a Text component.')
  } else if (TextComponent === undefined && Text !== undefined) {
    TextComponent = Text
  } else {
    return React.createElement(
      TrextContext.Consumer,
      {},
      ({ translations, locale }) => {
        if (translations[locale] === undefined || translations[locale].translated === undefined || translations[locale].translated[id] === undefined) {
          return React.createElement(TextComponent, { style: style }, applyNewLines(children))
        }
        return React.createElement(
          TextComponent,
          { style: style },
          applyNewLines(translations[locale].translated[id].translated)
        )
      }
    )
  }
}
const applyNewLines = (text) => {
  return text.split('[\\n]').join('\n')
}