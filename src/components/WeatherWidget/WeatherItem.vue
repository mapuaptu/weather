<template>
  <div :class="$style.weatherItem">
    {{ data.name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WeatherItem',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss" module>
.weatherItem {
  position: relative;
}
</style>
