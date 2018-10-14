<template>
  <div class="datepicker__dropdown">
    <div class="datepicker__header">
      <span 
        @click="previous" 
        class="datepicker__arrow">←</span>
      <h3 
        class="datepicker__month-name">
        {{ monthName }}
      </h3>
      <span 
        @click="next" 
        class="datepicker__arrow">→</span>
    </div>
    <div class="datepicker__weekdays">
      <span 
        v-for="(weekday, index) in weekdays" 
        :key="index">{{ weekday }}
      </span>
    </div>
  </div>
</template>
<script type="text/javascript">
import moment from 'moment'

export default {
  name: 'DatepickerDropdown',
  data () {
    return {
      currentDate: '',
      weekdays: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
      ]
    }
  },
  computed: {
    monthName () {
      return this.currentDate.format('MMMM')
    }
  },
  props: {
    pValue: {
      type: String,
      default: ''
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
  beforeMount () {
    this.currentDate = moment(this.pValue, this.pFormat)
  },
  methods: {
    setMonth (step) {
      const month = this.currentDate.get('month') + step
      this.currentDate = this.currentDate.clone().month(month)
    },
    previous () {      
     this.setMonth(-1)
    },
    next () {
      this.setMonth(1)
    }    
  },
  watch: {
    pValue () {
      console.log(this.pValue)
    },
    currentDate () {
      console.log(this.currentDate.format('MMMM'))
    }
  }
};
</script>