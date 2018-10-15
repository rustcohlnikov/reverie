<template>
  <div class="datepicker__dropdown">
    <div class="datepicker__header">
      <span 
        @click="previousMonth" 
        class="datepicker__arrow">←</span>
      <h3 
        class="datepicker__month-name">
        {{ monthName }}
      </h3>
      <span 
        @click="nextMonth" 
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
      <DayCell
        @click="handleDayClick"
        v-for="(day, index) in days"
        :key="index"
        :p-day="day"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import moment from 'moment'
import DayCell from './dayCell'

import config from "@/config.js"

export default {
  name: 'DatepickerDropdown',
  data () {
    return {
      currentViewDate: '',
      selectedDate: '',
      weekdays: []
    }
  },
  computed: {
    monthName () {
      return this.currentViewDate.format(config.monthNameFormat)
    },
    days () {
      const days = this.constructDays()     
      const otherDays = this.constructPreviousMonthDays()
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
     default: config.format
    }
  },
  beforeMount () {
    this.currentViewDate = this.pValue ? moment(this.pValue, this.pFormat) : moment()
    this.selectedDate = this.pValue ? moment(this.pValue, this.pFormat) : moment()
    this.weekdays = moment.weekdaysShort(true)
  },
  methods: {
    constructDays () {
      const currentMonthDays = Array(this.currentViewDate.daysInMonth()).fill('')
      const days = currentMonthDays.map(this.constructDay)

      return days
    },
    constructDay (day, index) {
      const date = index + 1
      const momentDate = this.currentViewDate.clone().date(date)
      const formattedDate = momentDate.format(this.pFormat)
      const obj = {
        text: date,
        date: momentDate,
        format: formattedDate,
        disabled: this.pDisabledDates.includes(formattedDate),
        selected: momentDate.isSame(this.selectedDate, 'day'),
        empty: false
      }
      
      return obj
    },
    constructPreviousMonthDays () {
      // Fill up empty dates from the previous month by
      // getting the locale aware weekday number of the first day of the current month

      var emptyDays = this.currentViewDate.date(1).weekday()
      return Array(emptyDays).fill('').map(() => ({
        empty: true
      }))
    },
    setMonth (step) {
      const month = this.currentViewDate.get('month') + step
      this.currentViewDate = this.currentViewDate.clone().month(month)
    },
    previousMonth () {      
     this.setMonth(-1)
    },
    nextMonth () {
      this.setMonth(1)
    },
    handleDayClick (date) {
      this.$emit('change', date) 
    }
  },
  components: { DayCell }
};
</script>