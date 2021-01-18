<template>
  <div :class="$style.weather">
    Weather Widget
    <div>{{ getInitial }}</div>
    <div @click="setInitial(false)">
      set initial
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/weather';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'WeatherWidget',
  store,
  computed: {
    ...mapGetters(['getInitial']),
  },
  created() {
    console.log('created');
  },
  methods: {
    ...mapMutations(['setInitial', 'setCities']),
  },
});
</script>

<style lang="scss" module>
.weather {
  position: relative;
}
</style>
