// lucide-react dropped brand/social logos; these fill-based icons are drop-in
// replacements with the same `className` prop API used throughout the app.
type IconProps = { className?: string }

export function Facebook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export function Twitter({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2H21l-6.55 7.49L22.2 22h-6.2l-4.86-6.36L5.6 22H2.83l7.02-8.02L2 2h6.35l4.4 5.82L18.24 2Zm-1.08 18.17h1.72L7.02 3.75H5.17l12 16.42Z" />
    </svg>
  )
}

export function Instagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Linkedin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.62c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  )
}

export function Youtube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.58 7.2a2.75 2.75 0 0 0-1.94-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.5A2.75 2.75 0 0 0 2.42 7.2 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.8 2.75 2.75 0 0 0 1.94 1.95c1.74.5 7.64.5 7.64.5s5.9 0 7.64-.5a2.75 2.75 0 0 0 1.94-1.95A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.42-4.8ZM10 15.02V8.98L15.27 12 10 15.02Z" />
    </svg>
  )
}
