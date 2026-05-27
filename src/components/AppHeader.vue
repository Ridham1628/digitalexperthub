<template>
  <header :class="{ scrolled: isScrolled }" id="header">
    <div class="wrap nav">
      <a href="#" class="logo">
        <span class="dot">◆</span>Digital<b>Expert</b>Hub
      </a>
      <ul class="nav-links" :class="{ mobile: menuOpen }" id="navLinks">
        <li><a href="#services" :class="{ active: activeSection === 'services' }" @click="closeMenu">Services</a></li>
        <li><a href="#why" :class="{ active: activeSection === 'why' }" @click="closeMenu">Why Us</a></li>
        <li><a href="#process" :class="{ active: activeSection === 'process' }" @click="closeMenu">Process</a></li>
        <li><a href="#results" :class="{ active: activeSection === 'results' }" @click="closeMenu">Results</a></li>
        <li><a href="#blog" :class="{ active: activeSection === 'blog' }" @click="closeMenu">Blog</a></li>
        <li><a href="#contact" :class="{ active: activeSection === 'contact' }" @click="closeMenu">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="tel:+917986713605" class="nav-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92Z"/>
          </svg>
          +91 79867 13605
        </a>
        <a href="#contact" class="btn btn-lime">Get a Free Quote</a>
        <button class="burger" :aria-expanded="menuOpen.toString()" aria-label="Menu" @click="toggleMenu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('')

const sectionIds = ['services', 'why', 'process', 'results', 'blog', 'contact']

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

let spyObserver

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeSection.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) spyObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  spyObserver?.disconnect()
})
</script>
