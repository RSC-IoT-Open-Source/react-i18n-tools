const React = require('react')
const TrextContext = require('./TrextContext')

let TextComponent = undefined
const propsTagsRegex = /#\[([A-z0-9]*?)]/g

module.exports = ({ Text, style, id, children, ...props }) => {
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
          return React.createElement(TextComponent, { style: style }, parseText(children, props))
        }
        return React.createElement(
          TextComponent,
          { style: style },
          parseText(translations[locale].translated[id].translated, props)
        )
      }
    )
  }
}
const parseText = (text, props) => {
  if(typeof(text) === 'string'){
    let vars = text.match(propsTagsRegex)
    let attributes = []
    if(vars){
      Object.keys(vars).forEach((index) => {
        let temp = vars[index].replace('#[','')
        temp = temp.replace(']','')
        attributes.push(temp)
      })
      attributes.forEach((att) => {
        if(props[att]){
          text = text.replace(`#[${att}]`, props[att])
        }
        else {
          console.warn('TREXT ERR: Prop does not exist for attribute', att)
        }
      })
    }
    return text.split('[\\n]').join('\n')
  }
  else{
    console.warn('TREXT ERR: Trext received a non-string type', text)
    return text
  }
}