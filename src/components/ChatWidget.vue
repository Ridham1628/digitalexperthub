<template>
  <div>
    <button class="chat-fab" :aria-expanded="open.toString()" aria-label="Chat with us" @click="toggleChat">
      <span class="ping"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>

    <div class="chat-panel" :class="{ open }">
      <div class="chat-head">
        <div class="avatar">DE</div>
        <div>
          <b>Digital Expert Hub</b>
          <span>Typically replies in minutes</span>
        </div>
      </div>
      <div class="chat-body" ref="chatBody">
        <div v-for="(msg, i) in messages" :key="i" class="bubble" :class="msg.from">
          {{ msg.text }}
        </div>
      </div>
      <div class="chat-quick">
        <button v-for="q in quickReplies" :key="q" @click="handle(q)">{{ q }}</button>
      </div>
      <div class="chat-foot">
        <input
          type="text"
          v-model="inputText"
          placeholder="Type a message…"
          ref="chatInput"
          @keydown.enter="handle(inputText)"
        >
        <button aria-label="Send" @click="handle(inputText)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const inputText = ref('')
const chatBody = ref(null)
const chatInput = ref(null)

const messages = ref([
  { from: 'bot', text: '👋 Hi there! I\'m here to help you grow. What are you looking for today?' },
])

const quickReplies = ['SEO Services', 'PPC / Ads', 'Get a Quote']

function toggleChat() {
  open.value = !open.value
  if (open.value) nextTick(() => chatInput.value?.focus())
}

function addMsg(text, from) {
  messages.value.push({ text, from })
  nextTick(() => {
    if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight
  })
}

function botReply(text) {
  setTimeout(() => addMsg(text, 'bot'), 550)
}

function handle(text) {
  if (!text?.trim()) return
  addMsg(text, 'me')
  inputText.value = ''
  const t = text.toLowerCase()
  if (t.includes('seo')) {
    botReply('Great choice! Our SEO services grow organic traffic with white-hat strategies. Share your website and I\'ll have a specialist reach out. 🚀')
  } else if (t.includes('ppc') || t.includes('ad')) {
    botReply('Our PPC team delivers fast, targeted results. What\'s your monthly ad budget range?')
  } else if (t.includes('quote') || t.includes('price') || t.includes('cost')) {
    botReply('Happy to help with a free quote! Drop your email or call us at +91 79867 13605 and we\'ll send a custom plan.')
  } else {
    botReply('Thanks for reaching out! A specialist will get back to you shortly. You can also call +91 79867 13605 or email info@digitalexperthub.com.')
  }
}

function onKeydown(e) {
  if (e.key === 'Escape' && open.value) open.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>
