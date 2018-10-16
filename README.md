# REVERIE

/ˈrev.ər.i/ - the condition of being lost in thought

Minimalistic Vue Datepicker

## Demo 
View [here](https://dist-vxwuxenrip.now.sh)

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
  @month-change="handleMonthChange"/>
```
## Development

```bash
npm run dev

```

## Available props

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| value                         | String          |             | Date value of the datepicker             |
| name                          | String          | datepicker  | Input name                               |
| disabled                      | Boolean         | false       | To disable datepicker                    |
| format                        | String          | DD.MM.YYYY  | Moment date format                       |
| disabledDates                 | Array           | []          | Array of dates to disable in format      |
| displayFormat                 | String          | D MMM, dddd | Moment date format for display           |
| language                      | String          | en          | Moment locale (ru or en)                 |

## Events

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| select                        |                 |             | Date selected                            |
| open                          |                 |             | Dropdown is opened                       |
| close                         |                 |             | Dropdown is closed                       |
| month-change                  |                 |             | Month change                             |

## Date formatting

See [Moment formatting rules](https://momentjs.com/docs/#/displaying/format/)