// islands/BetaBanner.tsx
import { useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import { IS_BROWSER } from '$fresh/runtime.ts'

export default function BetaBanner() {
  const isVisible = useSignal(true)
  const isExpanded = useSignal(false)

  useEffect(() => {
    if (!IS_BROWSER) return
    const dismissed = localStorage.getItem('beta-banner-dismissed')
    if (dismissed) {
      isVisible.value = false
    }
  }, [])

  const handleDismiss = () => {
    if (!IS_BROWSER) return
    localStorage.setItem('beta-banner-dismissed', 'true')
    isVisible.value = false
  }

  if (!isVisible.value) return null

  return (
    <div class='fixed bottom-0 inset-x-0 z-50'>
      <div class='bg-yellow-50 border-t border-yellow-200 p-4'>
        <div class='flex items-start gap-3'>
          {/* Warning Icon */}
          <div class='flex-shrink-0'>
            <svg
              class='h-6 w-6 text-yellow-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          </div>

          {/* Content */}
          <div class='flex-1 pt-1'>
            <div
              class={`transition-all duration-200 overflow-hidden ${
                isExpanded.value ? 'max-h-48' : 'max-h-6'
              }`}
            >
              <p class='text-yellow-800 text-sm leading-relaxed'>
                <strong>Achtung:</strong>{' '}
                Diese Website befindet sich noch in Entwicklung. Alle
                dargestellten Informationen und Berechnungen sind vorläufig und
                können fehlerhaft sein.
              </p>
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => isExpanded.value = !isExpanded.value}
              class='text-yellow-600 text-sm mt-1 flex items-center'
            >
              {isExpanded.value ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              <svg
                class={`ml-1 h-4 w-4 transform transition-transform ${
                  isExpanded.value ? 'rotate-180' : ''
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            class='flex-shrink-0 text-yellow-600 hover:text-yellow-800'
            aria-label='Schließen'
          >
            <svg class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
