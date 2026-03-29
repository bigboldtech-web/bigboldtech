'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    function observeAll() {
      document.querySelectorAll('.reveal:not(.vis)').forEach((el) => observer.observe(el))
    }

    // Observe existing elements
    observeAll()

    // Watch for new elements added to the DOM (e.g. Next.js streaming/suspense)
    const mutation = new MutationObserver(() => observeAll())
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [pathname])

  return null
}
