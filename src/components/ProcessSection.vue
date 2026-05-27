<template>
  <section class="sec dark" id="process" style="background: var(--ink-2)">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow on-dark">How We Work</span>
        <h2>A glimpse into <span class="serif-it">our process</span></h2>
        <p>A clear, five-step path from research to measurable growth — no guesswork, no black boxes.</p>
      </div>
      <div class="proc">
        <div class="proc-line"></div>
        <div class="proc-steps">
          <div v-for="step in steps" :key="step.num" class="step reveal">
            <div class="circ">{{ step.num }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { num: '1', title: 'Research & Analysis', desc: 'We study your audience, audit competitors and run deep keyword research.' },
  { num: '2', title: 'Custom Strategy', desc: 'We build a tailored plan mapped to your goals and timeline.' },
  { num: '3', title: 'Content Creation', desc: 'High-quality, engaging content that lifts rankings and converts.' },
  { num: '4', title: 'Execution', desc: 'We launch targeted campaigns and build real audience relationships.' },
  { num: '5', title: 'Track & Optimise', desc: 'We measure, learn and refine to keep results compounding.' },
]
</script>
