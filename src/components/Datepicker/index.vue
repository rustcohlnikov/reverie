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
      default: new Date(),
      required: true
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
      this.inputValue = this.pValue ? this.pValue : moment().format(this.pFormat)
      //console.log(this.format)
    },
    handleInputClick () {
      this.isOpen = !this.isOpen
    },
    handleClickAway () {
      this.close()
    },
    handleChange (date, formattedDate) {
      this.inputValue = formattedDate
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
    this.init()  
  },
  components: { DatepickerDropdown },
  mixins: [ clickaway ],
};
</script>