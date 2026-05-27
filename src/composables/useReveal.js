import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 60 + 'ms'
      observer.observe(el)
    })
  })

  onUnmounted(() => observer?.disconnect())
}
