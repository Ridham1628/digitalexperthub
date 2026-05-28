<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 56 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- D outline: vertical left bar + semicircle right -->
    <path
      d="M 7,4 L 7,58 L 22,58 A 27,27 0 0 0 22,4 Z"
      stroke="currentColor"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
    />

    <!-- Circuit traces inside D — 3-row staircase pattern -->

    <!-- Row 1: 1 square pad + horizontal bar -->
    <rect x="15" y="16" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="25" y="18.5" width="15" height="3" rx="1" fill="currentColor"/>

    <!-- Row 2: 2 square pads + shorter bar -->
    <rect x="15" y="27" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="25" y="27" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="35" y="29.5" width="10" height="3" rx="1" fill="currentColor"/>

    <!-- Row 3: 3 square pads only (staircase base) -->
    <rect x="15" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="25" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="35" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: Number, default: 44 } })
</script>
