'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'bbt-theme'

function readStored(): Theme | null {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(STORAGE_KEY)
  return v === 'light' || v === 'dark' ? v : null
}

function readSystem(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export function ThemeToggle() {
  // Hydration-safe: don't trust SSR's value, read from the DOM
  // (the inline init script sets it before React hydrates)
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initial =
      (document.documentElement.dataset.theme as Theme | undefined) ??
      readStored() ??
      readSystem()
    setTheme(initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    apply(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

  // Follow system if the user hasn't expressed a preference yet.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => {
      if (readStored()) return // user has chosen, stop following
      setTheme(mq.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      // Suppress hydration warning on the icon — initial render may
      // not match what the inline script set, but we re-render on mount.
      suppressHydrationWarning
    >
      {/* Sun icon (visible in dark theme to indicate "switch to light") */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-toggle-sun"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Moon icon (visible in light theme to indicate "switch to dark") */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-toggle-moon"
        aria-hidden
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}

/**
 * Inline init script — runs synchronously in <head> before any paint
 * to avoid flash-of-wrong-theme on first load.
 */
export const themeInitScript = `
(function(){try{
  var s = localStorage.getItem('${STORAGE_KEY}');
  var sys = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  var t = (s === 'light' || s === 'dark') ? s : sys;
  document.documentElement.dataset.theme = t;
}catch(e){}})();
`
