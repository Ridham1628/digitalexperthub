<template>
  <div class="grain"></div>
  <a href="#main" class="skip-link">Skip to content</a>

  <AppHeader />

  <main id="main">
    <HeroSection />
    <MarqueeSection />
    <ServicesSection />
    <WhySection />
    <IndustriesSection />
    <FeaturesSection />
    <ProcessSection />
    <BenefitsSection />
    <ResultsSection />
    <TestimonialsSection />
    <BlogSection />
    <FaqSection />
    <ContactSection />
  </main>

  <AppFooter />
  <ChatWidget />
  <Analytics />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeSection from './components/MarqueeSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhySection from './components/WhySection.vue'
import IndustriesSection from './components/IndustriesSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import ResultsSection from './components/ResultsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import BlogSection from './components/BlogSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import ChatWidget from './components/ChatWidget.vue'
import { useReveal } from './composables/useReveal.js'
import { Analytics } from '@vercel/analytics/vue'

useReveal()
</script>
