// islands/HeroSection.tsx
import { useSignal } from '@preact/signals'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { Dialog } from '../components/Dialog.tsx'

export default function HeroSection() {
  const isDialogOpen = useSignal(false)

  const handleDownload = async () => {
    if (!IS_BROWSER) return

    try {
      const response = await fetch('/api/download-guide')
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = globalThis.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'strategieleitfaden.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      globalThis.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download error:', error)
    }
  }

  return (
    <section class='relative bg-gradient-to-r from-blue-900 to-blue-700 py-24 overflow-hidden'>
      <div class='absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]' />
      <div class='container mx-auto px-6 relative'>
        <div class='max-w-4xl mx-auto text-center'>
          <h1 class='text-4xl md:text-6xl font-bold text-white mb-6'>
            Ihr Kind. Seine Zukunft.<br />
            <span class='text-blue-200'>Keine Grenzen.</span>
          </h1>
          <p class='text-xl md:text-2xl text-blue-100 mb-12'>
            Das Fundament für echte wirtschaftliche Handlungsfreiheit
          </p>
          <div class='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={handleDownload}
              disabled={!IS_BROWSER}
              class='bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg disabled:opacity-50'
            >
              Strategieleitfaden herunterladen
            </button>
            <button
              onClick={() => isDialogOpen.value = true}
              disabled={!IS_BROWSER}
              class='bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 disabled:opacity-50'
            >
              Beratungsgespräch vereinbaren
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={isDialogOpen.value}
        onClose={() => isDialogOpen.value = false}
        title='Beratungsgespräch vereinbaren'
      >
        <ConsultationForm onSubmit={() => isDialogOpen.value = false} />
      </Dialog>
    </section>
  )
}

function ConsultationForm({ onSubmit }: { onSubmit: () => void }) {
  const isLoading = useSignal(false)

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (!IS_BROWSER) return

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      isLoading.value = true
      const response = await fetch('/api/schedule-consultation', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Submission failed')

      onSubmit()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      isLoading.value = false
    }
  }

  return (
    <form onSubmit={handleSubmit} class='space-y-4'>
      <div>
        <label class='block text-sm font-medium text-gray-700'>Name</label>
        <input
          type='text'
          name='name'
          required
          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
      <div>
        <label class='block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          name='email'
          required
          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
      <div>
        <label class='block text-sm font-medium text-gray-700'>Nachricht</label>
        <textarea
          name='message'
          rows={4}
          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
      <button
        type='submit'
        disabled={isLoading.value || !IS_BROWSER}
        class='w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50'
      >
        {isLoading.value ? 'Wird gesendet...' : 'Absenden'}
      </button>
    </form>
  )
}
