# React i18n Tools

## Getting Started

Install the tool.

```
npm install --save react-i18n-tools
```

Then create a `.i18nconfig` file in the root of the project you would like to internationalize. Populate it with the content below, changing it as you see fit.

```
{
  "outputDirectory": "modules/translations/",
  "locales": [
    "es-ar"
  ],
  "rootComponentDirectory": "components/"
}
```

At the top level of your component tree (e.g., your `App.js`) add the `<TrextProvider />` and pass it the current locale, as well as a mapping to your translations. For example,

```
const translations = {
  'es-ar': require('../modules/translations/es-ar.json')
}
const locale = 'es-ar'

// ...

render () {
  return (
    <TrextProvider translations={translations} locale={locale}>
      // ...
    </TrextProvider>  
  )
}
```


## Trext Component

Wrap any text you would like to translate with the `<Trext />` component. You can add styles to the text that will be stripped out when the text is exported for translation. You can also provide template variables—such as a `name`, demonstrated in the example below.

```
import { Trext } from 

// ... 

render () {
  return (
    <Trext name='world'>
      Hello, [color=red,italic,bold]#{name}[/b]!
    </Trext>  
  )
}
```

## Exporting Text for Translation

From the CLI run
```
react-i18n
```

The text will be exported to the `outputDirectory` specified in your `.i18nconfig` file.
