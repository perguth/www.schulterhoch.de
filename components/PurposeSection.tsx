// components/PurposeSection.tsx
export default function PurposeSection() {
  return (
    <section className='bg-white py-16'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Zukunftssicherung für Ihre Familie
            </h2>
            <p className='text-xl text-gray-600'>
              Mit klugen Strukturen schaffen Sie finanzielle Freiheit und
              schützen das Vermögen Ihrer Kinder.
            </p>
          </div>

          {/* Structured Benefits */}
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg'>
            <div className='space-y-6'>
              {/* Benefit 1: Sicherheit */}
              <div className='flex gap-6 items-start'>
                <div className='flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-white'
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
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Sicherheit durch Struktur:
                  </h3>
                  <div className='space-y-2'>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-blue-800'>
                        Individuelle Vermögensstrukturierung zur Minimierung von
                        Steuerlast und Haftungsrisiken.
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-red-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-gray-600 line-through'>
                        Hohe Steuerbelastung und Risiken durch unstrukturierte
                        Vermögensverwaltung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 2: Flexibilität */}
              <div className='flex gap-6 items-start'>
                <div className='flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-white'
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
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Flexibilität für die Zukunft:
                  </h3>
                  <div className='space-y-2'>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-blue-800'>
                        Internationale Strukturen, die Mobilität und
                        unternehmerische Freiheit ermöglichen.
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-red-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-gray-600 line-through'>
                        Einschränkungen durch nationale Steuergesetze und
                        Wegzugsbesteuerung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 3: Nachhaltigkeit */}
              <div className='flex gap-6 items-start'>
                <div className='flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-white'
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
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Nachhaltiger Vermögensaufbau:
                  </h3>
                  <div className='space-y-2'>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-blue-800'>
                        Langfristige Vermögenssicherung durch strategische
                        Planung und Steueroptimierung.
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1'>
                        <svg
                          className='w-4 h-4 text-red-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                      <p className='text-lg text-gray-600 line-through'>
                        Verlust von Vermögenswerten durch unvorbereitete
                        Steuerlasten und Erbschaftsregelungen.
                      </p>
                    </div>
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
