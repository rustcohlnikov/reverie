# REVERIE

/ˈrev.ər.i/ - the condition of being lost in thought

Minimalistic Vue Datepicker

Demo is [here](https://dist-riukoxrszo.now.sh)

## Installation
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
  :p-disabled-dates="disabledDates"

  @change="handleDateChange"
  @open="handleOpen"
  @close="handleClose"/>
```
## Development

```bash
npm run dev

```

## Available props

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| pValue                        | String          |             | Date value of the datepicker             |
| pName                         | String          | datepicker  | Input name                               |
| pDisabled                     | Boolean         | false       | To disable datepicker                    |
| pFormat                       | String          | DD.MM.YYYY  | Moment date format                       |
| pDisabledDates                | Array           | []          | Array of dates to disable in pFormat     |
| pDisplayFormat                | String          | D MMM, dddd | Moment date format for display           |
| pLanguage                     | String          | ru          | Moment locale (ru || en)                 |

## Events

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| change                        | Moment          |             | Date selected                            |
| open                          |                 |             | Dropdown is opened                       |
| close                         |                 |             | Dropdown is closed                       |

## Date formatting

See [Moment formatting rules](https://momentjs.com/docs/#/displaying/format/)