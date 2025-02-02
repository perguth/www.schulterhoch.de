// components/Dialog.tsx
import { JSX } from 'preact'
import { IS_BROWSER } from '$fresh/runtime.ts'

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  children: JSX.Element | JSX.Element[]
}

export function Dialog({ open, onClose, title, children }: DialogProps) {
  if (!open) return null

  // Prevent clicks inside dialog from closing it
  const handleContentClick = (e: Event) => {
    e.stopPropagation()
  }

  return (
    <div
      class='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
      onClick={onClose}
    >
      <div
        class='bg-white rounded-lg p-6 max-w-md w-full'
        onClick={handleContentClick}
      >
        <div class='flex justify-between items-center mb-4'>
          <h2 class='text-xl font-bold'>{title}</h2>
          <button
            onClick={onClose}
            disabled={!IS_BROWSER}
            class='text-gray-500 hover:text-gray-700'
            aria-label='Schließen'
          >
            <svg
              class='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
