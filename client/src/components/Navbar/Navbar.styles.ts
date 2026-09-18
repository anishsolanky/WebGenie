import { cn } from '@/utils/cn'

export const styles = {
  header: 'sticky top-0 z-40 border-b border-border bg-surface-0/80 backdrop-blur',
  container: 'mx-auto flex max-w-6xl items-center justify-between px-4 py-3',
  brand: 'text-lg font-extrabold text-ink-900',
  brandAccent: 'text-primary-600',
  links: 'hidden items-center gap-6 sm:flex',
  // NavLink gives us isActive — but the classes it picks between must still
  // be complete literal strings for Tailwind's scanner (see the plan's
  // A13/§3.1 note on why interpolation like `text-${x}` silently breaks).
  link: (isActive: boolean) =>
    cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-primary-600' : 'text-ink-700 hover:text-primary-600',
    ),
  actions: 'flex items-center gap-2',
  // Referencing the shared global classes (defined once in styles/index.css)
  // by name, rather than duplicating their utility strings here.
  loginLink: 'btn-secondary',
  signupLink: 'btn-primary',
} as const
