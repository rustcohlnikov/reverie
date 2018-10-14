<template>
  <div 
    class="datepicker" 
    v-on-clickaway="handleClickAway">

    <input
      v-model="inputValue"
      :disabled="pDisabled"
      class="datepicker__input" 
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
      isOpen: false
    }
  },
  methods: {
    init () {
      const value = this.pValue ? moment(this.pValue) : moment()
      this.inputValue = value.format(this.pDisplayFormat)
    },
    handleInputClick () {
      this.isOpen = !this.isOpen
    },
    handleClickAway () {
      this.close()
    },
    handleChange (date) {
      this.inputValue = date.format(this.pDisplayFormat)
      this.close()
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
    require(`moment/locale/${this.pLanguage}`)
    moment.locale(this.pLanguage)
    this.init()  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
};
</script>