# REVERIE

/ˈrev.ər.i/ - the condition of being lost in thought

Minimalistic Vue Datepicker

# Installation
```js
import ReverieDatepicker from 'reverie'
```

```js
export default {
  name: 'App',
  components: {ReverieDatepicker},
  data () {
    return {
      date: '07.07.2019',
      format: 'DD.MM.YYYY',
      language: 'ru',
      disabled: ['03.07.2019']
    }
  }
}
```

```html
<ReverieDatepicker 
  :p-value="date"
  :p-format="format"
  :p-language="language"
  :p-disabled-dates="disabled"/>
```


# Development

```bash
npm run dev

```