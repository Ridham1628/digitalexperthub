<template>
  <section class="sec dark" id="results">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow on-dark">Proof, Not Promises</span>
        <h2>Results that speak <span class="serif-it">for themselves</span></h2>
        <p>Numbers from real campaigns run by our digital marketing agency.</p>
      </div>
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat reveal" ref="statRefs">
          <div class="n">{{ stat.display }}</div>
          <div class="lab">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const stats = ref([
  { end: 25, suffix: '+', label: 'Projects delivered', display: '0' },
  { end: 1000, suffix: '+', label: 'Brands that trust us', display: '0' },
  { end: 40, suffix: '+', label: 'Five-star reviews', display: '0' },
  { end: 7, suffix: ' yrs', label: 'Industry experience', display: '0' },
])

function finalVal(end, suffix) {
  return (end >= 1000 ? end.toLocaleString() : end) + suffix
}

function animateStat(stat) {
  if (reduceMotion) { stat.display = finalVal(stat.end, stat.suffix); return }
  let start = null
  const dur = 1500
  const step = (t) => {
    if (!start) start = t
    const p = Math.min((t - start) / dur, 1)
    const v = Math.floor(p * stat.end)
    stat.display = (stat.end >= 1000 ? v.toLocaleString() : v) + stat.suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx)
          animateStat(stats.value[idx])
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.5 }
  )
  document.querySelectorAll('#results .stat').forEach((el, i) => {
    el.dataset.idx = i
    observer.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>
