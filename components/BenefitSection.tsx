// components/BenefitSection.tsx
interface Benefit {
  icon: 'shield' | 'clock'
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: 'shield',
    title: 'Rechtssichere Strukturierung',
    description:
      'Eine zukunftssichere Lösung, die Handlungsfreiheit über Generationen gewährleistet',
  },
  {
    icon: 'clock',
    title: 'Frühzeitige Weichenstellung',
    description:
      'Je früher die richtigen Strukturen geschaffen werden, desto mehr Möglichkeiten bleiben erhalten',
  },
]

function BenefitIcon({ type }: { type: Benefit['icon'] }) {
  const baseClasses = 'w-6 h-6'

  switch (type) {
    case 'shield':
      return (
        <svg
          class={`${baseClasses} text-blue-600`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      )
    case 'clock':
      return (
        <svg
          class={`${baseClasses} text-green-600`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      )
  }
}

export default function BenefitSection() {
  return (
    <section class='bg-white py-20'>
      <div class='container mx-auto px-6'>
        <div class='max-w-3xl mx-auto'>
          <div class='text-center mb-16'>
            <h2 class='text-3xl font-bold text-gray-900 mb-4'>
              Unsere Lösung für Ihre Familie
            </h2>
            <p class='text-xl text-gray-600'>
              Ein durchdachtes System für maximale Handlungsfreiheit
            </p>
          </div>

          <div class='space-y-8'>
            {benefits.map((benefit) => (
              <div class='flex items-start gap-4' key={benefit.title}>
                <div
                  class={`flex-shrink-0 w-12 h-12 ${
                    benefit.icon === 'shield' ? 'bg-blue-100' : 'bg-green-100'
                  } rounded-xl flex items-center justify-center`}
                >
                  <BenefitIcon type={benefit.icon} />
                </div>
                <div>
                  <h3 class='text-xl font-semibold text-gray-900 mb-2'>
                    {benefit.title}
                  </h3>
                  <p class='text-gray-600'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
