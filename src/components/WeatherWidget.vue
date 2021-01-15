<template>
  <div :class="$style.weather">
    Weather Widget
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WeatherWidget',
});
</script>

<style lang="scss" module>
.weather {
  position: relative;
}
</style>
