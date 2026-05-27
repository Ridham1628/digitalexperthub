<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="item in items" :key="item + '1'">{{ item }}</span>
      <span v-for="item in items" :key="item + '2'">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Search Engine Optimization',
  'Pay-Per-Click Advertising',
  'Social Media Marketing',
  'Email Marketing',
  'Content Marketing',
  'Local SEO',
  'Ecommerce SEO',
  'Technical SEO',
]
</script>
