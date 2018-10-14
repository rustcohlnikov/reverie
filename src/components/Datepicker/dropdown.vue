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
      <span
        @click="handleDayClick(day)"
        :class="[{['datepicker__day--disabled']: day.disabled}, {['datepicker__day--selected']: day.selected}, 'datepicker__day']"
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
      currentViewDate: '',
      selectedDate: '',
      weekdays: []
    }
  },
  computed: {
    monthName () {
      return this.currentViewDate.format('MMMM YYYY')
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
    this.currentViewDate = this.pValue ? moment(this.pValue, this.pFormat) : moment()
    this.selectedDate = this.pValue ? moment(this.pValue, this.pFormat) : moment()
    this.weekdays = moment.weekdaysShort(true)
  },
  methods: {
    constructDays () {
      const currentMonthDays = Array(this.currentViewDate.daysInMonth()).fill('')
      const days = currentMonthDays.map(this.constructDayCell)

      return days
    },
    constructDayCell (item, index) {
      const date = index + 1
      const momentDate = this.currentViewDate.clone().date(date)
      const formattedDate = momentDate.format(this.pFormat)
      const obj = {
        text: date,
        date: momentDate,
        format: formattedDate,
        disabled: this.pDisabledDates.includes(formattedDate),
        selected: momentDate.isSame(this.selectedDate, 'day')
      }
      
      return obj
    },
    constructOtherDays () {
      // Fill up empty dates from the previous month by
      // getting the weekday number of the first day of the current month

      var emptyDays = this.currentViewDate.date(1).day()
      return Array(emptyDays).fill('').map(() => ({
        disabled: true
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
    handleDayClick ({date, disabled}) {
      if (!disabled) {
        this.selectedDate = this.normalizeDate(date)
        this.$emit('change', date)
      }      
    },
    normalizeDate (date) {
      return date.startOf('day')
    }
  }
};
</script>