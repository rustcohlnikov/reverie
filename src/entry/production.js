import ReverieDatepicker from 'Components/Datepicker'
import 'Stylesheets/main.scss'

ReverieDatepicker.install = function (Vue) {
  Vue.component(ReverieDatepicker.name, ReverieDatepicker)
}

export default ReverieDatepicker
