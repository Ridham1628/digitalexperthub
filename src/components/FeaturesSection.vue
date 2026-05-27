<template>
  <section class="sec dark">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow on-dark">The Advantage</span>
        <h2>Advanced features <span class="serif-it">built in</span></h2>
        <p>Every engagement comes with the systems and safeguards that keep your campaigns sharp and accountable.</p>
      </div>
      <div class="feat-grid">
        <div v-for="feat in features" :key="feat.title" class="feat reveal">
          <div class="ic" v-html="feat.icon"></div>
          <div>
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Real-time analytics',
    desc: 'Live dashboards so you always know what\'s working and where every rupee is going.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="6" width="3" height="12"/><rect x="17" y="13" width="3" height="5"/></svg>`,
  },
  {
    title: '24/7 system monitoring',
    desc: 'We keep an eye on rankings, ads and site health around the clock so issues never linger.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    title: '30-day money-back guarantee',
    desc: 'Confident in our process — if we don\'t deliver, you\'re protected. Simple as that.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  {
    title: 'Complete transparency',
    desc: 'Clear reporting, honest timelines and full visibility into every campaign we run for you.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
]
</script>
