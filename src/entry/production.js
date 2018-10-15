import ReverieDatepicker from 'Components/Datepicker'
import 'Stylesheets/main.scss'

ReverieDatepicker.install = function (Vue, config) {
  Vue.component(ReverieDatepicker.name, ReverieDatepicker)
}

export default ReverieDatepicker
