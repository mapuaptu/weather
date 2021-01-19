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
}

</style>
