<template>
  <section class="sec">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow">Who We Help</span>
        <h2>Industries we <span class="serif-it">grow</span></h2>
        <p>From local shops to enterprise brands, our digital marketing agency tailors strategy to the realities of your sector.</p>
      </div>
      <div class="ind-grid">
        <div v-for="ind in industries" :key="ind.title" class="ind reveal">
          <div class="ic" v-html="ind.icon"></div>
          <h3>{{ ind.title }}</h3>
          <p>{{ ind.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const industries = [
  { title: 'Ecommerce & Retail', sub: 'Ecommerce SEO & paid ads', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>` },
  { title: 'Healthcare', sub: 'Local visibility & trust', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>` },
  { title: 'Real Estate', sub: 'Lead-gen funnels', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>` },
  { title: 'Education', sub: 'Admissions campaigns', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>` },
  { title: 'Hospitality', sub: 'Bookings & reputation', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>` },
  { title: 'SaaS & Tech', sub: 'Demand generation', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>` },
  { title: 'Manufacturing', sub: 'B2B lead pipelines', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 7h-9M14 17H5M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>` },
  { title: 'Local Business', sub: 'Local SEO & maps', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z"/></svg>` },
]
</script>
