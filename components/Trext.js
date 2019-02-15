const React = require('react')
const { Text } = require('react-native')
const TrextContext = require('./TrextContext')

// TODO: If passed a style object, pass the object down to the <Text /> component.

module.exports = ({ id, children }) => {
  return React.createElement(
      TrextContext.Consumer,
      {},
      ({ translations, locale }) => {

          if (translations[locale] === undefined) {
            return React.createElement(Text, {}, children)
          }
          return React.createElement(Text, {}, translations[locale][id].translation)
      }
  )
}