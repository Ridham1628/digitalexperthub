<template>
  <section class="sec" id="services">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow">What We Do</span>
        <h2>Full-funnel <span class="serif-it">digital marketing services</span> under one roof</h2>
        <p>As a full-service digital marketing agency, we combine strategy, creativity and data to grow your online presence and drive real revenue.</p>
      </div>
      <div class="services-grid">
        <article v-for="svc in services" :key="svc.title" class="svc reveal">
          <div class="ic" v-html="svc.icon"></div>
          <h3>{{ svc.title }}</h3>
          <p>{{ svc.desc }}</p>
          <a href="#contact" class="more">Learn more <span class="arr">→</span></a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'SEO Services',
    desc: 'Our search engine optimization services lift your rankings, grow organic traffic and keep you ahead of competitors with proven, white-hat strategies.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  },
  {
    title: 'PPC (Pay-Per-Click)',
    desc: 'Get immediate visibility with precision-targeted pay-per-click services. We put your ads in front of the right audience and maximise every rupee of ROI.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>`,
  },
  {
    title: 'Social Media Marketing',
    desc: 'Our social media marketing services build a recognisable brand, spark engagement and turn followers into loyal, paying customers across every platform.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
  },
  {
    title: 'Email Marketing',
    desc: 'Keep prospects engaged with email marketing services that nurture leads, improve retention and drive repeat sales with measurable, trackable results.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    title: 'Content Marketing',
    desc: 'Establish thought leadership with content marketing services built on keyword-rich, high-quality content that boosts rankings and wins customer trust.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  },
  {
    title: 'Digital Marketing',
    desc: 'Need a complete strategy? Our end-to-end digital marketing services align SEO, ads, social and content into one growth engine for your business.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  },
]
</script>
