<template>
  <svg :width="size" viewBox="0 0 52 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- Left vertical bar -->
    <rect x="0" y="0" width="13" height="58" rx="2"/>
    <!-- Top horizontal bar -->
    <rect x="13" y="0" width="23" height="11" rx="2"/>
    <!-- Bottom horizontal bar -->
    <rect x="13" y="47" width="23" height="11" rx="2"/>
    <!-- Upper-right corner -->
    <rect x="34" y="11" width="11" height="11" rx="2"/>
    <!-- Right vertical -->
    <rect x="42" y="22" width="10" height="14" rx="2"/>
    <!-- Lower-right corner -->
    <rect x="34" y="36" width="11" height="11" rx="2"/>
    <!-- Circuit pad — top-left cluster -->
    <rect x="1" y="1" width="7" height="7" rx="1.5" opacity="0.5"/>
    <rect x="9" y="1" width="4" height="4" rx="1" opacity="0.35"/>
    <rect x="1" y="9" width="4" height="4" rx="1" opacity="0.3"/>
    <!-- Circuit pad — bottom-left cluster -->
    <rect x="1" y="50" width="7" height="7" rx="1.5" opacity="0.5"/>
    <rect x="9" y="53" width="4" height="4" rx="1" opacity="0.35"/>
    <rect x="1" y="45" width="4" height="4" rx="1" opacity="0.3"/>
    <!-- Inner circuit traces -->
    <rect x="16" y="17" width="6" height="6" rx="1" opacity="0.22"/>
    <rect x="16" y="35" width="6" height="6" rx="1" opacity="0.22"/>
    <rect x="25" y="24" width="5" height="10" rx="1" opacity="0.14"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: Number, default: 44 } })
</script>
