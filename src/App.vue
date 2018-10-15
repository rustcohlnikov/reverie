<template>
  <div class="reverie-demo">

    <div class="reverie-demo__main">
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
          @month-change="handleMonthChange"/>
      </div>
      <h4 class="reverie-demo__title">Props</h4>
      <div class="reverie-demo__settings">

        <label for="disabled">
          <input
            name="disabled"
            type="checkbox"
            v-model="isDisabled"> Disabled
        </label>
        <input
          type="text"
          v-model="date">
        <input
          type="text"
          v-model="format">
        <input
          type="text"
          v-model="displayFormat">        
      </div>      
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
  padding: 10% 15%;
}

.reverie-demo {
  height: 100%;
  display: flex;
  justify-content: center;
  
  &__datepicker {
    width: 250px;
  }

  &__title {
    margin-top: 3rem;
    font-weight: 400;
  }

  &__settings {    
    display: flex;
    justify-content: center;

    & input[type="text"] {
      width: 120px;
      margin: 0 .5rem;
      padding-left: 16px;
      border: none;
      outline: none;
      font-size: .8rem;
      padding-left: 1em;
      color: #475766;
      width: 100%;
      height: 32px;
      font-family: inherit;
      background-color: #fff;
      box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    }

    & label {
      display: flex;
      align-items: center;
      font-size: .8rem;
      color: #475766;
    }
  }
}
</style>
