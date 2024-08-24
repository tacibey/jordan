import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const fadeOut = (trigger: HTMLElement, target: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top top',
      end: 'bottom center',
      scrub: true,
    },
  })

  tl.to(target, {
    opacity: 0,
    duration: 1,
  })
}

export const fadeIn = (trigger: HTMLElement, target: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top 75%',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  tl.from(target, {
    opacity: 0,
    duration: 1,
  })
}
