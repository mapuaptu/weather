<template>
  <div :class="$style.menu">
    <div :class="$style.title">
      Settings
    </div>

    <div
      v-for="city in data"
      :key="city.id"
      :class="$style.item"
    >
      <div :class="$style.left">
        <Icon
          icon="menu"
          :width="20"
          :height="20"
          :class="$style.drag"
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
      />
    </div>

    <div :class="$style.addCity">
      <div :class="$style.title">
        Add location
      </div>

      <div :class="$style.controls">
        <input
          type="text"
          :class="$style.input"
        >

        <Icon
          icon="enter"
          :width="35"
          :height="35"
          :class="$style.button"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/common/Icon.vue';

export default {
  name: 'WeatherMenu',
  components: {
    Icon,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
@import '@/styles/variables.scss';

.menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
      transition: $transition;
      cursor: pointer;

      &:hover {
        opacity: $opacity;
      }
    }
  }
}

</style>
