<template>
  <div 
    class="datepicker" 
    v-on-clickaway="handleClickAway">

    <input
      readonly
      v-model="displayValue"
      :class="[{['datepicker__input--disabled']: pDisabled}, 'datepicker__input']"
      :name="pName"
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
import isString from 'lodash.isstring'
import 'moment/locale/ru'

import config from "@/config.js"
import { mixin as clickaway } from 'vue-clickaway'
import DatepickerDropdown from './dropdown'

export default {
  name: 'ReverieDatepicker',
  props: {
   pValue: {
      type: [String, Object],
      default: '',
      validator: (value) => {
        return moment.isMoment(value) || isString(value)
      }
    },
    pName: {
      type: String,
      default: config.inputName
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
     default: config.format 
    },
    pDisplayFormat: {
     type: String,
     default: config.displayFormat
    },
    pLanguage: {
     type: String,
     default: config.language,
     validator: (value) => {
        return config.supportedLanguages.includes(value)
      }
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
      const date = this.checkValue(this.pValue)
      this.setDateValues(date)
    },
    handleInputClick () {
      this.isOpen = !this.pDisabled && !this.isOpen
      this.$emit(this.isOpen ? 'open' : 'close')
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

      this.$emit('change', value,  this.inputValue, this.displayValue)
    },
    close () {
      this.isOpen = false
      this.$emit('close')
    },
    checkValue (date) {
      // Check if value is a Moment object or a date string
      if (date && moment.isMoment(date)) {
        return date
      } else {
        return date ? moment(date, this.pFormat) : moment()
      }
    }
  },
  computed: {
    format () {
      return moment(this.pValue)
    }
  },
  beforeMount () {
    moment.locale(this.pLanguage)
    this.init()  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
};
</script>