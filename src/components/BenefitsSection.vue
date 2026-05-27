<template>
  <section class="sec">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">Why It Matters</span>
        <h2>The benefits of <span class="serif-it">digital marketing</span> for your business</h2>
      </div>
      <div class="ben-layout">
        <div class="ben-visual reveal" ref="visualRef">
          <div class="big">+212%</div>
          <h3>Average organic growth</h3>
          <p>Across clients who stayed on a 12-month strategy with us.</p>
          <div class="ben-bars">
            <div v-for="bar in bars" :key="bar.label" class="ben-bar">
              <div class="lab"><span>{{ bar.label }}</span><span>{{ bar.pct }}</span></div>
              <div class="track"><div class="fill" :style="{ width: animated ? bar.pct : '0%' }"></div></div>
            </div>
          </div>
        </div>
        <div class="ben-list">
          <div v-for="item in benefits" :key="item.title" class="ben-item reveal">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visualRef = ref(null)
const animated = ref(false)

const bars = [
  { label: 'Search engine optimization', pct: '95%' },
  { label: 'Paid search marketing', pct: '65%' },
  { label: 'Social & content reach', pct: '80%' },
]

const benefits = [
  { title: 'Increased visibility & brand awareness', desc: 'Reach a wider audience, discover new markets and build a strong online presence for your brand.' },
  { title: 'A real competitive edge', desc: 'Adapt to market trends and customer behaviour in real time, and stay a step ahead of your competitors.' },
  { title: 'Engagement & loyalty', desc: 'Create personalised experiences, interact in real time and turn first-time buyers into loyal customers.' },
  { title: 'Measurable, trackable results', desc: 'Every campaign is data-driven, so you always know what\'s working and where to invest next.' },
  { title: 'Cost-effective growth', desc: 'Affordable solutions that maximise ROI and deliver results without blowing your budget.' },
]

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animated.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (visualRef.value) observer.observe(visualRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>
