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
        class="datepicker__weekday"
        v-for="(weekday, index) in weekdays" 
        :key="index">{{ weekday }}
      </span>
    </div>

    <div class="datepicker__days">
      <span
        @click="handleDayClick(day.date, day.format)"
        :class="[{['datepicker__day--disabled']: !day.active}, 'datepicker__day']"
        v-for="(day, index) in days" 
        :key="index">{{ day.text }}
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
      return this.currentDate.format('MMMM YYYY')
    },
    days () {
      const days = this.constructDays()     
      const otherDays = this.constructOtherDays()
      return [...otherDays,...days]
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
    this.currentDate = this.pValue ? moment(this.pValue, this.pFormat) : moment()
  },
  methods: {
    constructDays () {
      const currentMonthDays = Array(this.currentDate.daysInMonth()).fill('')
      const days = currentMonthDays.map(this.constructDayCell)

      return days
    },
    constructDayCell (item, index) {
      const date = index + 1
      const momentDate = this.currentDate.clone().date(date)
      const obj = {
        text: date,
        date: momentDate,
        format: momentDate.format(this.pFormat),
        active: true,
        selected: false
      }
      
      return obj
    },
    constructOtherDays () {
      // Fill up empty dates from the previous month
      var emptyDays = this.currentDate.date(1).day()
      return Array(emptyDays).fill('').map(() => ({
        active: false
      }))
    },
    setMonth (step) {
      const month = this.currentDate.get('month') + step
      this.currentDate = this.currentDate.clone().month(month)
    },
    previous () {      
     this.setMonth(-1)
    },
    next () {
      this.setMonth(1)
    },
    handleDayClick (date, formatted) {
      this.currentDate = this.normalizeDate(date)
      this.$emit('change', date, formatted)
    },
    normalizeDate (date) {
      return date.startOf('day')
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