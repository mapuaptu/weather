<template>
  <div :class="$style.weather">
    <Icon
      icon="settings"
      :width="30"
      :height="30"
      :class="$style.settingsButton"
      @click="settingsIsOpen = true"
    />

    <div
      v-if="settingsIsOpen"
      :class="$style.settings"
    >
      <Icon
        icon="close"
        :width="30"
        :height="30"
        :class="$style.close"
        @click="settingsIsOpen = false"
      />
      settings
    </div>

    <WeatherItem
      v-for="city in getCities"
      :key="city.id"
      :data="city"
    />

    <WeatherItem
      v-for="city in getCities"
      :key="city.id + 2"
      :data="city"
    />
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/weather';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import getCurrentCoordinates from '@/helpers/index';
import WeatherItem from '@/components/WeatherWidget/WeatherItem.vue';
import Icon from '@/components/common/Icon.vue';

export default Vue.extend({
  name: 'WeatherWidget',
  store,
  components: {
    WeatherItem,
    Icon,
  },
  data() {
    return {
      settingsIsOpen: false,
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
@import '@/styles/variables.scss';

.weather {
  position: relative;

  .settingsButton {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 10;
    transition: $transition;
    cursor: pointer;

    &:hover {
      opacity: $opacity;
    }
  }

  .settings {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 11;
    border-radius: $border-radius;
    padding: 40px;
    background-color: $color-white;

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      transition: $transition;
      cursor: pointer;

      &:hover {
        opacity: $opacity;
      }
    }
  }
}
</style>
