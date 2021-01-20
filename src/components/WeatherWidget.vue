<template>
  <div :class="$style.weather">
    <template v-if="!settingsIsOpen">
      <Icon
        icon="settings"
        :width="30"
        :height="30"
        :class="$style.settingsButton"
        @click="settingsIsOpen = true"
      />

      <WeatherItem
        v-for="city in getCities"
        :key="city.name"
        :data="city"
      />
    </template>

    <template v-else>
      <Icon
        icon="close"
        :width="30"
        :height="30"
        :class="$style.closeButton"
        @click="settingsIsOpen = false"
      />

      <WeatherMenu
        :data="getCities"
      />
    </template>

    <div
      v-if="!getCities.length"
      :class="$style.empty"
    >
      Click on setting button to add some city
    </div>

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
import Icon from '@/components/common/Icon.vue';
import WeatherItem from '@/components/WeatherWidget/WeatherItem.vue';
import WeatherMenu from '@/components/WeatherWidget/WeatherMenu.vue';

export default Vue.extend({
  name: 'WeatherWidget',
  store,
  components: {
    Icon,
    WeatherItem,
    WeatherMenu,
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
  width: 350px;

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

  .closeButton {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 12;
    transition: $transition;
    cursor: pointer;

    &:hover {
      opacity: $opacity;
    }
  }

  .empty {
    border-radius: $border-radius;
    padding: 25px 40px;
    background-color: $color-white;
  }
}
</style>
