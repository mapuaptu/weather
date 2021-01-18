<template>
  <div :class="$style.weather">
    Weather Widget
    <div>{{ getInitial }}</div>
    <div @click="setInitial(false)">
      set initial
    </div>
    <div>{{ error }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/weather';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import getCurrentCoordinates from '@/helpers/index';

export default Vue.extend({
  name: 'WeatherWidget',
  store,
  data() {
    return {
      error: '',
    };
  },
  computed: {
    ...mapGetters(['getInitial', 'getCities']),
  },
  async created() {
    if (this.getInitial) {
      const { error, latitude, longitude } = await getCurrentCoordinates();

      if (error) {
        this.error = error;
      }

      const { dataError } = await this.loadDataFromCoordinates({ latitude, longitude });

      if (dataError) {
        this.error = error || '';
      }

      this.setInitial(false);
    } else {
      this.loadAllData(this.getCities);
    }
  },
  methods: {
    ...mapMutations(['setInitial', 'setCities']),
    ...mapActions(['loadDataFromCoordinates', 'loadAllData']),
  },
});
</script>

<style lang="scss" module>
.weather {
  position: relative;
}
</style>
