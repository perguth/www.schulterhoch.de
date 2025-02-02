// components/Logo.tsx
import { JSX } from 'preact'

interface LogoProps extends JSX.SVGAttributes<SVGSVGElement> {
  class?: string
}

export function Logo({ class: className, ...props }: LogoProps) {
  return (
    <svg
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      class={className}
      {...props}
    >
      {/* Simplified logo - replace with your actual logo */}
      <rect width='40' height='40' rx='8' fill='#2563EB' />
      <path
        d='M20 10L30 25H10L20 10Z'
        fill='white'
      />
    </svg>
  )
}
