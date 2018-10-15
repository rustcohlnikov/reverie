<template>
  <div 
    class="datepicker" 
    v-on-clickaway="handleClickAway">

    <input
      readonly
      v-model="displayValue"
      :class="[{['datepicker__input--disabled']: disabled}, 'datepicker__input']"
      :name="name"
      type="text"
      placeholder="Pick a date"
      @click="handleInputClick">

    <DatepickerDropdown
      v-if="isOpen"
      :disabled-dates="disabledDates"
      :value="inputValue"
      :format="format"
      
      @select="handleDateSelect"
      @changeMonth="handleMonthChange" />  
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
   value: {
      type: [String, Object],
      default: '',
      validator: (value) => {
        return moment.isMoment(value) || isString(value)
      }
    },
    name: {
      type: String,
      default: config.inputName
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledDates: {
      type: Array,
      default: () => []
    },
    format: {
     type: String,
     default: config.format 
    },
    displayFormat: {
     type: String,
     default: config.displayFormat
    },
    language: {
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
      const date = this.checkValue(this.value)
      this.setDateValues(date)
    },
    handleInputClick () {
      this.isOpen = !this.disabled && !this.isOpen
      this.$emit(this.isOpen ? 'open' : 'close')
    },
    handleClickAway () {
      this.close()
    },
    handleDateSelect (date) {
      this.setDateValues(date)
      this.close()
    },
    handleMonthChange () {
      this.$emit('monthChange')
    },
    setDateValues (value) {
      this.inputValue = value.format(this.format)
      this.displayValue = value.format(this.displayFormat)

      this.$emit('select', value,  this.inputValue, this.displayValue)
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
        return date ? moment(date, this.format) : moment()
      }
    }
  },
  beforeMount () {
    moment.locale(this.language)
    this.init()  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
};
</script>