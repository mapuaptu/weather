<template>
  <div :class="$style.menu">
    <div :class="$style.title">
      Settings
    </div>

    <draggable
      :value="getCities"
      handle=".drag"
      @input="setCities"
    >
      <div
        v-for="city in data"
        :key="city.name"
        :class="$style.item"
      >
        <div :class="$style.left">
          <Icon
            icon="menu"
            :width="20"
            :height="20"
            :class="$style.drag"
            class="drag"
          />

          <div :class="$style.name">
            {{ city.name }}, {{ city.sys.country }}
          </div>
        </div>

        <Icon
          icon="trash"
          :width="20"
          :height="20"
          :class="$style.delete"
          @click="deleteCity(city.name)"
        />
      </div>
    </draggable>

    <div :class="$style.addCity">
      <div :class="$style.title">
        Add location
      </div>

      <form
        :class="$style.controls"
        @submit.prevent
      >
        <input
          v-model="location"
          type="text"
          :class="$style.input"
        >

        <button
          :class="$style.button"
          @click="addCity"
        >
          <Icon
            icon="enter"
            :width="35"
            :height="35"
          />
        </button>
      </form>

      <div
        v-if="error"
        :class="$style.error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '@/components/common/Icon.vue';
import draggable from 'vuedraggable';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default Vue.extend({
  name: 'WeatherMenu',
  components: {
    Icon,
    draggable,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      location: '',
      error: '',
    };
  },
  computed: {
    ...mapGetters(['getCities']),
  },
  methods: {
    ...mapMutations(['setCities', 'deleteCity']),
    ...mapActions(['loadDataFromCityName']),
    async addCity() {
      this.error = '';

      const result = await this.loadDataFromCityName(this.location);

      if (result.error) {
        return this.error = result.error;
      }

      if (this.getCities.some((city: { name: string }) => city.name === result.name)) {
        return this.error = 'This city already added';
      }

      this.setCities([...this.getCities, result]);

      return result;
    },
  },
});
</script>

<style lang="scss" module>
@import '@/styles/variables.scss';

.menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 11;
  border-radius: $border-radius;
  padding: 25px;
  background-color: $color-white;

  .title {
    margin-bottom: 20px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: $border-radius;
    padding: 10px;
    background-color: $color-gray;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .left {
      display: flex;
      align-items: center;
    }

    .name {
      margin-right: 10px;
      margin-left: 10px;
    }

    .drag,
    .delete {
      transition: $transition;
      cursor: pointer;

      &:hover {
        opacity: $opacity;
      }
    }
  }

  .addCity {
    margin-top: 40px;

    .controls {
      display: flex;
      align-items: center;
    }

    .input {
      flex: 1 0 auto;
      border: 1px solid $color-black;
      border-radius: $border-radius;
      padding: 10px;
      height: 35px;
    }

    .button {
      border: none;
      background: none;
      transition: $transition;
      cursor: pointer;

      &:active,
      &:focus {
        outline: none;
      }

      &:hover {
        opacity: $opacity;
      }
    }
  }

  .error {
    margin-top: 20px;
    font-size: 15px;
  }
}

</style>
