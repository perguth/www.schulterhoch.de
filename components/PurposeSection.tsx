// components/PurposeSection.tsx
export default function PurposeSection() {
  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto px-6'>
        <div class='max-w-3xl mx-auto'>
          <div class='text-center mb-10'>
            <h2 class='text-3xl font-bold text-gray-900 mb-4'>
              Meine Lösung für Ihre Familie
            </h2>
            <p class='text-xl text-gray-600'>
              Ein durchdachtes System für maximale Handlungsfreiheit
            </p>
          </div>

          {/* Structured Benefits */}
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl'>
            <div className='space-y-4'>
              <div className='flex gap-4 items-center'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-lg font-medium pv-1'>
                    Echte Sicherheit:
                  </h3>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover/item:bg-green-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M5 13l4 4L19 7'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='font-medium leading-relaxed text-blue-800'>
                      Maßgeschneiderte Vermögensstruktur mit optimierten Steuer-
                      und Haftungskonzepten
                    </p>
                  </div>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 group-hover/item:bg-red-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-red-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M6 18L18 6M6 6l12 12'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='text-gray-600 leading-relaxed line-through'>
                      Gesetzliche Erbfolge mit Pflichtteilen und
                      Zugewinnausgleich
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 items-center'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
                    />
                  </svg>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-lg font-medium pv-1'>
                    Volle Entfaltung:
                  </h3>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover/item:bg-green-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M5 13l4 4L19 7'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='font-medium leading-relaxed text-blue-800'>
                      Flexible Strukturen für internationale Karrieren und
                      Lebensentwürfe
                    </p>
                  </div>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 group-hover/item:bg-red-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-red-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M6 18L18 6M6 6l12 12'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='text-gray-600 leading-relaxed line-through'>
                      Einschränkungen durch starre gesetzliche Vorgaben
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 items-center'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                    />
                  </svg>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-lg font-medium pv-1'>
                    Freie Wahl:
                  </h3>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover/item:bg-green-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M5 13l4 4L19 7'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='font-medium leading-relaxed text-blue-800'>
                      Selbstbestimmte Gestaltung der Vermögensnachfolge über
                      Generationen
                    </p>
                  </div>
                  <div class='flex items-start gap-3 group/item'>
                    <div class='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 group-hover/item:bg-red-200 transition-colors'>
                      <svg
                        class='w-4 h-4 text-red-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M6 18L18 6M6 6l12 12'
                        >
                        </path>
                      </svg>
                    </div>
                    <p class='text-gray-600 leading-relaxed line-through'>
                      Bindung an vorgegebene Vermögensverteilung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
