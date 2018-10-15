import ReverieDatepicker from '../components/Datepicker'
import '../stylesheets/main.scss'

ReverieDatepicker.install = function (Vue) {
  Vue.component(ReverieDatepicker.name, ReverieDatepicker)
}

export default ReverieDatepicker
