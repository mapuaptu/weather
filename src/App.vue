<template>
  <div :class="$style.app">
    <WeatherWidget />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WeatherWidget from './components/WeatherWidget.vue';

export default Vue.extend({
  name: 'App',
  components: {
    WeatherWidget,
  },
});
</script>

<style lang="scss" module>
.app {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;
  min-height: 100vh;
  background-color: rgb(51, 107, 153);
}
</style>
