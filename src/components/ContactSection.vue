<template>
  <section class="sec" id="contact">
    <div class="wrap">
      <div class="contact-layout">

        <!-- Info column -->
        <div class="contact-info reveal">
          <span class="eyebrow">Get In Touch</span>
          <h2 style="margin-top:16px">How can we <span class="serif-it">help</span> you today?</h2>
          <p>Tell us about your goals and we'll show you exactly how our digital marketing agency can get you there.</p>
          <div class="cinfo-row">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div><b>Visit us</b><span>House No. 785, Street No. 7, Master Colony, Santokh Nagar, Shivpuri, Ludhiana, Punjab 141008</span></div>
          </div>
          <div class="cinfo-row">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92Z"/></svg>
            </div>
            <div><b>Call us</b><span>+91 79867 13605 · Mon–Fri, 9am–5pm</span></div>
          </div>
          <div class="cinfo-row">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div><b>Email us</b><span>info@digitalexperthub.com</span></div>
          </div>
        </div>

        <!-- Form -->
        <div class="form reveal">
          <h3>Get a free quote</h3>
          <p>We'll get back to you within one business day.</p>

          <div class="field" :class="{ invalid: errors.name }">
            <label for="f-name">Full name</label>
            <input type="text" id="f-name" v-model="form.name" autocomplete="name" placeholder="Your name">
            <span class="err">Please enter your name.</span>
          </div>
          <div class="field" :class="{ invalid: errors.email }">
            <label for="f-email">Email address</label>
            <input type="email" id="f-email" v-model="form.email" autocomplete="email" placeholder="you@company.com">
            <span class="err">Please enter a valid email address.</span>
          </div>
          <div class="field" :class="{ invalid: errors.phone }">
            <label for="f-phone">Phone number</label>
            <input type="tel" id="f-phone" v-model="form.phone" autocomplete="tel" placeholder="+91">
            <span class="err">Please enter your phone number.</span>
          </div>
          <div class="field">
            <label for="f-service">Service you need</label>
            <select id="f-service" v-model="form.service">
              <option>SEO Services</option>
              <option>PPC / Pay-Per-Click</option>
              <option>Social Media Marketing</option>
              <option>Email Marketing</option>
              <option>Content Marketing</option>
              <option>Full Digital Marketing</option>
            </select>
          </div>
          <div class="field">
            <label for="f-msg">Message</label>
            <textarea id="f-msg" v-model="form.message" placeholder="Tell us about your goals…"></textarea>
          </div>

          <button class="btn btn-lime" type="button" :disabled="loading" @click="submit">
            <span v-if="loading" class="btn-spinner"></span>
            <span v-else>Submit Now</span>
            <span class="arr" v-if="!loading">→</span>
          </button>

          <!-- Success -->
          <div class="form-status ok" :class="{ show: status==='ok' }" role="status" aria-live="polite">
            <svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>
            <span>Thanks! Your request has been received — a specialist will reach out within one business day.</span>
          </div>
          <!-- Error -->
          <div class="form-status err-status" :class="{ show: status==='err' }" role="alert" aria-live="polite">
            <svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            <span>{{ errMsg }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const form    = reactive({ name: '', email: '', phone: '', service: 'SEO Services', message: '' })
const errors  = reactive({ name: false, email: false, phone: false })
const loading = ref(false)
const status  = ref('')   // '' | 'ok' | 'err'
const errMsg  = ref('')

async function submit() {
  // Validate
  errors.name  = !form.name.trim()
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  errors.phone = !form.phone.trim()
  if (errors.name || errors.email || errors.phone) { status.value = ''; return }

  loading.value = true
  status.value  = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || 'Something went wrong.')
    }

    status.value = 'ok'
    form.name = form.email = form.phone = form.message = ''

    const statusEl = document.querySelector('.form-status.ok')
    if (statusEl) statusEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' })

  } catch (err) {
    status.value = 'err'
    errMsg.value  = err.message || 'Could not send. Please call us at +91 79867 13605.'
  } finally {
    loading.value = false
  }
}
</script>
