<template>
  <div :class="$style.weatherItem">
    <div :class="$style.name">
      {{ data.name }}, {{ data.sys.country }}
    </div>

    <div :class="$style.main">
      <div :class="$style.image">
        <img :src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`">
      </div>

      <div :class="$style.temperature">
        {{ data.main.temp }} &#8451;
      </div>
    </div>

    <div :class="$style.description">
      Feels like {{ data.main.feels_like }}&#8451;.
      {{ data.weather[0].main }},
      {{ data.weather[0].description }}
    </div>

    <div :class="$style.values">
      <div :class="$style.item">
        {{ data.wind.speed }}ms/s SSE
      </div>

      <div :class="$style.item">
        {{ data.main.pressure }}hPa
      </div>

      <div :class="$style.item">
        Humidity: {{ data.main.humidity }}%
      </div>

      <!-- Don't find dew point value in api response -->

      <!-- <div :class="$style.item">
        Dew point: {{ data.main.dew }}%
      </div> -->

      <div :class="$style.item">
        Visibility: {{ data.visibility / 1000 }}km
      </div>
    </div>
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
@import '@/styles/variables.scss';

.weatherItem {
  position: relative;
  border-radius: 5px;
  padding: 20px;
  width: 350px;
  background-color: $color-white;

  .name {
    margin-bottom: 30px;
    font-size: 20px;
  }

  .main {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .temperature {
      margin-left: 40px;
      font-size: 40px;
    }
  }

  .description {
    margin-bottom: 30px;
  }

  .values {
    display: flex;
    flex-flow: row wrap;

    .item {
      margin-bottom: 15px;
      width: 50%;
    }
  }
}
</style>
