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
      @month-change="handleMonthChange" />  
  </div>
</template>
<script type="text/javascript">
import moment from 'moment'
import isString from 'lodash.isstring'
import 'moment/locale/ru'

import config from "../../config.js"
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
      type: [Array, String],
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
    renderDates (value) {
      const date = this.createMoment(value)
      if (date.isValid()) {
        this.setDateValues(date)
      }
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
      this.$emit('month-change')
    },
    setDateValues (value) {     
      this.inputValue = value.format(this.validFormat)
      this.displayValue = value.format(this.validDisplayFormat)

      this.$emit('select', this.inputValue)
      this.$emit('input', this.inputValue)    
    },
    close () {
      this.isOpen = false
      this.$emit('close')
    },
    createMoment (date) {
      // Check if value is a Moment object or a date string
      if (date && moment.isMoment(date)) {
        return date
      } else {
        return date ? moment(date, this.validFormat) : moment()
      }
    }
  },
  beforeMount () {
    moment.locale(this.language)
    this.renderDates(this.value)  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
  computed: {
    validFormat () {
      return this.format ? this.format : config.format
    },
    validDisplayFormat () {
      return this.displayFormat ? this.displayFormat : config.displayFormat
    }
  },
  watch: {
    value (value) {
      this.renderDates(value)
      this.$emit('input', this.value) 
    },
    displayFormat () {
      this.renderDates(this.value)
    },
    format () {
      this.renderDates(this.value)
    },
    disabledDates () {
      this.renderDates(this.value)
    }
  }
};
</script>