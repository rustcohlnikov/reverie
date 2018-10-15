<template>
  <span 
    @click="handleDayClick(pDay)"
    :class="[
      {['datepicker__day--disabled']: pDay.disabled},
      {['datepicker__day--empty']: pDay.empty}, 
      {['datepicker__day--selected']: pDay.selected}, 
      'datepicker__day'
  ]">
    {{ pDay.text }} 
  </span>
</template>
<script type="text/javascript">
export default {
  name: 'App',
  data () {
    return {
    }
  },
  props: {
    pDay: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleDayClick ({date, disabled}) {
      if (!disabled) {
        this.selectedDate = this.normalizeDate(date)
        this.$emit('click', date)
      }      
    },
    normalizeDate (date) {
      return date.startOf('day')
    }
  }
};
</script>
