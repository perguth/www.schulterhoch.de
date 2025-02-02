// components/Navbar.tsx
import { JSX } from 'preact'
import { Logo } from './Logo.tsx'

interface NavbarProps extends JSX.HTMLAttributes<HTMLElement> {
  class?: string
}

export function Navbar(props: NavbarProps) {
  return (
    <nav
      {...props}
      class={`bg-white shadow-sm ${props.class ?? ''}`}
    >
      <div class='container mx-auto px-6 py-4'>
        <div class='flex items-center justify-between'>
          <a href='/' class='flex items-center gap-3'>
            <Logo class='w-10 h-10' />
            <span class='text-xl font-semibold text-gray-800'>
              Schulterhoch
            </span>
          </a>

          {/* Link statt Button für bessere SEO und Accessibility */}
          <a
            href='/kontakt'
            class='inline-flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  )
}
