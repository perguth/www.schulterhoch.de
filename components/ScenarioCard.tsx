// components/ScenarioCard.tsx
export interface Scenario {
  id: string
  title: string
  subtitle: string
  icon: {
    type: 'graph' | 'lock' | 'money' | 'alert' | 'history' | 'chart'
    color: string
  }
  content: {
    description: string[]
    takeaway: string
    metrics: {
      title: string
      items: Array<{
        label: string
        value: string
      }>
    }
    consequences: {
      title: string
      items: Array<{
        label: string
        value: string
        emphasis?: boolean
      }>
    }
    prevention: string
  }
}

interface ScenarioCardProps {
  scenario: Scenario
}

function ScenarioIcon({ type, color }: Scenario['icon']) {
  const baseClasses = `w-8 h-8 text-${color}-600`

  switch (type) {
    case 'graph':
      return (
        <svg
          class={baseClasses}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
          />
        </svg>
      )
    case 'lock':
      return (
        <svg
          class={baseClasses}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
      )
    // Add other icon types as needed
    default:
      return null
  }
}

export function ScenarioCard({ scenario }: ScenarioCardProps) {
  const { title, subtitle, icon, content } = scenario
  const iconColorClass = `bg-${icon.color}-100`

  return (
    <div class='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div class='p-8'>
        {/* Header */}
        <div class='flex items-center gap-4 mb-8'>
          <div
            class={`w-16 h-16 ${iconColorClass} rounded-2xl flex items-center justify-center`}
          >
            <ScenarioIcon type={icon.type} color={icon.color} />
          </div>
          <div>
            <h3 class='text-2xl font-semibold text-gray-900'>{title}</h3>
            <p class='text-gray-500 mt-1'>{subtitle}</p>
          </div>
        </div>

        <div class='grid md:grid-cols-2 gap-8'>
          {/* Narrative Column */}
          <div class='space-y-6'>
            <div class='prose prose-lg'>
              {content.description.map((paragraph, index) => (
                <p key={index} class='text-gray-700 leading-relaxed'>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaway */}
            <div class='bg-blue-50 rounded-xl p-6 border border-blue-100'>
              <h4 class='font-semibold text-blue-900 mb-2'>
                Was Sie als Eltern tun können:
              </h4>
              <p class='text-blue-800'>{content.takeaway}</p>
            </div>
          </div>

          {/* Data Column */}
          <div class='space-y-6'>
            {/* Initial Situation */}
            <div class='bg-gray-50 rounded-xl p-6'>
              <h4 class='font-semibold text-gray-900 mb-3'>
                {content.metrics.title}
              </h4>
              <ul class='space-y-3'>
                {content.metrics.items.map((item, index) => (
                  <li key={index} class='flex items-start gap-3'>
                    <svg
                      class='w-5 h-5 text-gray-400 mt-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 12l2 2 4-4'
                      />
                    </svg>
                    <div>
                      <span class='font-medium text-gray-900'>
                        {item.label}:
                      </span>
                      <span class='text-gray-600'>{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consequences */}
            <div class={`bg-${icon.color}-50 rounded-xl p-6`}>
              <h4 class={`font-semibold text-${icon.color}-900 mb-3`}>
                {content.consequences.title}
              </h4>
              <div class='space-y-4'>
                {content.consequences.items.map((item, index) => (
                  <div
                    key={index}
                    class={`flex justify-between items-center ${
                      index < content.consequences.items.length - 1
                        ? `pb-2 border-b border-${icon.color}-100`
                        : 'pt-2'
                    }`}
                  >
                    <span
                      class={`text-${icon.color}-700 ${
                        item.emphasis ? 'font-medium' : ''
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      class={`${
                        item.emphasis ? 'font-bold' : 'font-semibold'
                      } text-${icon.color}-700`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prevention Hint */}
            <div class='bg-green-50 rounded-xl p-4 text-center'>
              <p class='text-green-800 text-sm'>{content.prevention}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
