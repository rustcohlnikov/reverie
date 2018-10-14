<template>
  <div class="reverie-demo">
    <div class="reverie-demo__datepicker">
      <ReverieDatepicker
        :p-format="format"
        :p-display-format="displayFormat"
        :p-language="language"
        :p-disabled="isDisabled"
        :p-disabled-dates="disabledDates"/>
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
      date: '07.07.2019',
      format: 'DD.MM.YYYY',
      displayFormat: 'D MMM, dddd',
      language: 'ru',
      disabledDates: ['30.10.2018'],
      isDisabled: false
    }
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
