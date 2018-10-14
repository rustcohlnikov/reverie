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
      displayFormat: 'D MMM, dddd',
      language: 'ru',
      disabled: ['03.07.2019'],
      isDisabled: true
    }
  }
}
```

```html
<ReverieDatepicker 
  :p-value="date"
  :p-format="format"
  :p-display-format="displayFormat"
  :p-language="language"
  :p-disabled="isDisabled"
  :p-disabled-dates="disabledDates"/>/>
```


# Development

```bash
npm run dev

```