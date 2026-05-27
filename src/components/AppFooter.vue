<template>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="#" class="logo"><span class="dot">◆</span>Digital<b>Expert</b>Hub</a>
          <p>A results-driven digital marketing agency helping businesses build, grow and scale their online presence with SEO, PPC, social and content marketing.</p>
        </div>
        <div class="foot-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#why">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#blog">Latest Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">SEO Services</a></li>
            <li><a href="#services">PPC Services</a></li>
            <li><a href="#services">Social Media</a></li>
            <li><a href="#services">Content Marketing</a></li>
          </ul>
        </div>
        <div class="foot-col foot-news">
          <h4>Stay Connected</h4>
          <input type="email" v-model="email" placeholder="Your email address">
          <button
            class="btn btn-lime"
            style="width: 100%; justify-content: center"
            type="button"
            :disabled="subscribed"
            @click="subscribe"
          >
            {{ subscribed ? 'Subscribed ✓' : 'Subscribe' }}
          </button>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2025 Digital Expert Hub. All Rights Reserved.</span>
        <div class="links">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

function subscribe() {
  email.value = ''
  subscribed.value = true
}
</script>
