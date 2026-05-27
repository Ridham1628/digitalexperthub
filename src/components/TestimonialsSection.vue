<template>
  <section class="sec">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow">Happy Clients</span>
        <h2>What our customers <span class="serif-it">say</span></h2>
        <p>We're proud of the relationships we build — and the growth we drive for them.</p>
      </div>
      <div class="test-grid">
        <div v-for="t in testimonials" :key="t.name" class="test reveal">
          <div class="q">"</div>
          <div class="rating">★★★★★</div>
          <p>{{ t.quote }}</p>
          <div class="who">
            <div class="av">{{ t.initials }}</div>
            <div><b>{{ t.name }}</b><span>{{ t.role }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { initials: 'RK', name: 'Rajesh Kumar', role: 'Founder, Apparel Ecommerce Store', quote: 'Our organic traffic nearly tripled in eight months. The team actually explains what they\'re doing and the reporting is crystal clear.' },
  { initials: 'SP', name: 'Simran Preet', role: 'Director, Real Estate Group', quote: 'Their PPC management cut our cost per lead in half. Genuinely the best digital marketing agency we\'ve worked with in Punjab.' },
  { initials: 'AM', name: 'Aman Mehta', role: 'CEO, B2B Manufacturing', quote: 'From SEO to social media, everything is handled under one roof. We finally feel like we have a real marketing partner.' },
]
</script>
