<template>
  <div class="reverie-demo">
    <div class="reverie-demo__datepicker">
      <ReverieDatepicker
        v-model="date"
        :format="format"
        :display-format="displayFormat"
        :language="language"
        :disabled="isDisabled"
        :disabled-dates="disabledDates"
        
        @select="handleDateSelect"
        @open="handleOpen"
        @close="handleClose"
        @monthChange="handleMonthChange"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import ReverieDatepicker from 'Components/Datepicker'

export default {
  name: 'App',
  components: {ReverieDatepicker},
  data () {
    return {
      // Demo values
      date: '15.10.2018',
      format: 'DD.MM.YYYY',
      displayFormat: 'D MMMM, dddd',
      language: 'en',
      disabledDates: [
        '26.10.2018',
        '27.10.2018',
        '28.10.2018',
        '29.10.2018',
        '30.10.2018'
      ],
      isDisabled: false
    }
  },
  methods: {
    handleDateSelect () {},
    handleMonthChange () {},
    handleOpen () {},
    handleClose () {}
  }
};
</script>
<style lang="scss">
html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  margin: 0;
  line-height: 1.15;
  background-color: #f3f3f3;
}

.reverie-demo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__datepicker {
    width: 250px;
  }
}
</style>
