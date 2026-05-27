<template>
  <section class="sec dark" id="why">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow on-dark">Why Digital Expert Hub</span>
        <h2>What makes us the <span class="serif-it">best digital marketing agency</span> for your brand</h2>
        <p>We don't sell empty promises. Here's what genuinely sets our digital marketing company apart from the rest.</p>
      </div>
      <div class="usp-grid">
        <div v-for="usp in usps" :key="usp.num" class="usp reveal">
          <span class="num">{{ usp.num }}</span>
          <div>
            <h3>{{ usp.title }}</h3>
            <p>{{ usp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const usps = [
  { num: '01', title: 'Years of proven expertise', desc: 'With 7+ years in the industry, we\'ve helped thousands of businesses grow their online presence — from building websites to scaling them across every channel.' },
  { num: '02', title: 'Custom-built strategies', desc: 'No copy-paste playbooks. We craft tailored digital marketing solutions around your goals, audience and budget to deliver results within your timeline.' },
  { num: '03', title: 'A proven track record', desc: 'We deliver results, not just reports. Our work has improved search rankings, grown organic traffic and generated qualified leads for businesses of all sizes.' },
  { num: '04', title: 'Cost-effective solutions', desc: 'You don\'t need to break the bank. Our digital marketing services are affordable, transparent and engineered to maximise return on every rupee spent.' },
]
</script>
