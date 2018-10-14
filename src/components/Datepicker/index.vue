<template>
  <div 
    class="datepicker" 
    v-on-clickaway="handleClickAway">

    <input
      readonly
      v-model="displayValue"
      :class="[{['datepicker__input--disabled']: pDisabled}, 'datepicker__input']" 
      type="text"
      placeholder="Pick a date"
      @click="handleInputClick">

    <DatepickerDropdown
      v-if="isOpen"
      :p-disabled-dates="pDisabledDates"
      :p-value="inputValue"
      :p-format="pFormat"
      
      @change="handleChange"/>  
  </div>
</template>
<script type="text/javascript">
import moment from 'moment'

import { mixin as clickaway } from 'vue-clickaway'

import DatepickerDropdown from './dropdown'

export default {
  name: 'ReverieDatepicker',
  props: {
   pValue: {
      type: String,
      default: ''
    },
    pName: {
      type: String,
      default: 'datepicker'
    },
    pDisabled: {
      type: Boolean,
      default: false
    },
    pDisabledDates: {
      type: Array,
      default: () => []
    },
    pFormat: {
     type: String,
     default: 'DD.MM.YYYY' 
    },
    pDisplayFormat: {
     type: String,
     default: 'D MMM, dddd'
    },
    pLanguage: {
     type: String,
     default: 'ru' 
    }
  },
  data () {
    return {
      inputValue: '',
      displayValue: '',
      isOpen: false
    }
  },
  methods: {
    init () {
      const date = this.pValue ? moment(this.pValue) : moment()
      this.setDateValues(date)
    },
    handleInputClick () {
      this.isOpen = !this.pDisabled && !this.isOpen
    },
    handleClickAway () {
      this.close()
    },
    handleChange (date) {
      this.setDateValues(date)
      this.close()
    },
    setDateValues (value) {
      this.inputValue = value.format(this.pFormat)
      this.displayValue = value.format(this.pDisplayFormat)
    },
    close () {
      this.isOpen = false
    }
  },
  computed: {
    format () {
      return moment(this.pValue)
    }
  },
  beforeMount () {
    moment.locale('en')
    this.init()  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
};
</script>