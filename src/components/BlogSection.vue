<template>
  <section class="sec" id="blog" style="background: var(--paper-2)">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="eyebrow">Blog &amp; News</span>
        <h2>Insights to <span class="serif-it">grow</span> your business</h2>
        <p>Practical guidance from our experts on SEO, ads and modern digital marketing.</p>
      </div>
      <div class="blog-grid">
        <article v-for="post in posts" :key="post.title" class="post reveal">
          <div class="thumb"><div v-html="post.icon"></div></div>
          <div class="body">
            <div class="meta"><span>{{ post.category }}</span><span>{{ post.date }}</span></div>
            <h3>{{ post.title }}</h3>
            <a href="#" class="more">Read more <span class="arr">→</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    category: 'SEO',
    date: 'Apr 7, 2025',
    title: 'We Don\'t Play Dirty: Our Ethical SEO Approach Gets Long-Term Results',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  },
  {
    category: 'Strategy',
    date: 'Apr 7, 2025',
    title: 'What Most SEO Agencies Won\'t Tell You – And How We\'re Different',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  },
  {
    category: 'Growth',
    date: 'Apr 7, 2025',
    title: 'Use SEO to Drive Real Growth at Your Business',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  },
]
</script>
