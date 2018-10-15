# REVERIE

/ˈrev.ər.i/ - the condition of being lost in thought

Minimalistic Vue Datepicker

## Demo 
View [here](https://dist-evyavuwqhs.now.sh)

## Installation
```js
import Vue from 'vue'
import Reverie from 'reverie'

Vue.use(Reverie)
```

```html
 <ReverieDatepicker
  v-model="date"
  :format="format"
  :display-format="displayFormat"
  :language="language"
  :disabled="isDisabled"
  :disabled-dates="disabledDates"
  
  @select="handleDateSelect"
  @open="handleOpen"
  @close="handleClose"
  @monthChange="handleMonthChange"/>
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
| pLanguage                     | String          | ru          | Moment locale (ru or en)                 |

## Events

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| change                        | Moment          |             | Date selected                            |
| open                          |                 |             | Dropdown is opened                       |
| close                         |                 |             | Dropdown is closed                       |
| monthChange                   |                 |             | Month change                             |

## Date formatting

See [Moment formatting rules](https://momentjs.com/docs/#/displaying/format/)