<template>
  <div class="reverie-demo">
    <div class="reverie-demo__datepicker">
      <ReverieDatepicker :p-value="date"/>
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
      date: '12/05/2019'
    }
  }
};
</script>
<style lang="scss">
html, body {
  height: 100%;
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
