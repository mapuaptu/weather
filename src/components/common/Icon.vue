<template>
  <div
    :class="$style.icon"
    :style="{
      width: `${width}px`,
      height: `${height}px`
    }"
    v-on="$listeners"
  >
    <svg
      v-if="icon === 'navigation'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"
        :fill="fill"
      />
    </svg>

    <svg
      v-if="icon === 'gauge'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        :d="`M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10
        0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16
        12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9
        13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29
        10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08
        14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17
        14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1
        0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0
        0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z`"
        :fill="fill"
      />
    </svg>

    <svg
      v-if="icon === 'settings'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        :d="`M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2
        0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82
        9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95
        4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78
        2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22
        2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66
        8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18
        14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05
        19.66,5.27L21.66,8.73C21.79,8.95
        21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05
        21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34
        15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22
        14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5
        7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64
        6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5
        9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14
        15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37
        17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5
        14.32,6.86 13.12,6.62L12.75,4H11.25Z`"
      />
    </svg>

    <svg
      v-if="icon === 'close'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        :d="`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,
        19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`"
        :fill="fill"
      />
    </svg>

    <svg
      v-if="icon === 'menu'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        :fill="fill"
      />
    </svg>

    <svg
      v-if="icon === 'trash'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        :d="`M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,
        6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z`"
        :fill="fill"
      />
    </svg>

    <svg
      v-if="icon === 'enter'"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        d="M11,9L12.42,10.42L8.83,14H18V4H20V16H8.83L12.42,19.58L11,21L5,15L11,9Z"
        :fill="fill"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    fill: {
      type: String,
      default: '#000',
    },
  },
};
</script>

<style lang="scss" module>
.icon {
  position: relative;
}
</style>
