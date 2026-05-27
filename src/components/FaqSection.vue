<template>
  <section class="sec dark">
    <div class="wrap">
      <div class="faq-layout">
        <div class="sec-head reveal" style="margin-bottom: 0">
          <span class="eyebrow on-dark">FAQs</span>
          <h2>Questions, <span class="serif-it">answered</span></h2>
          <p>Still curious? Talk to a specialist and we'll walk you through everything.</p>
          <a href="#contact" class="btn btn-lime" style="margin-top: 24px">Talk to a Specialist</a>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="faq-item reveal"
            :class="{ open: openIndex === i }"
          >
            <button
              class="faq-q"
              :aria-expanded="(openIndex === i).toString()"
              @click="toggle(i)"
            >
              {{ faq.q }}
              <span class="pm">+</span>
            </button>
            <div class="faq-a" :style="{ maxHeight: openIndex === i ? answerHeight(i) : null }" :ref="el => setRef(el, i)">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)
const answerRefs = ref([])

const faqs = [
  { q: 'What is SEO and why is it important?', a: 'SEO (search engine optimization) improves your website so it ranks higher on Google and other search engines. It matters because higher rankings bring in more organic, qualified visitors — without paying for every single click.' },
  { q: 'How much do digital marketing services cost?', a: 'The cost varies from business to business depending on your goals, industry and competition. Get in touch with our team and we\'ll prepare a custom quote that fits your budget.' },
  { q: 'When can I expect to see results?', a: 'Paid and social campaigns can drive traffic almost immediately, while SEO typically shows meaningful movement within 3 to 6 months depending on your market and starting point.' },
  { q: 'What services do you provide?', a: 'As a full-service digital marketing agency we provide SEO, pay-per-click (PPC), social media marketing, email marketing and content marketing services — all under one roof.' },
]

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

function setRef(el, i) {
  if (el) answerRefs.value[i] = el
}

function answerHeight(i) {
  const el = answerRefs.value[i]
  return el ? el.scrollHeight + 'px' : null
}
</script>
