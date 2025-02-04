// components/PersonalSection.tsx
interface Experience {
  text: string
}

const experiences: Experience[] = [
  {
    text: '8+ Jahre Erfahrung in Softwareentwicklung und Unternehmensführung',
  },
  {
    text:
      'Bachelor of Science in Mobile Media von der Hochschule der Medien Stuttgart',
  },
  {
    text: 'Erfolgreicher Aufbau mehrerer Unternehmen im digitalen Bereich',
  },
]

export default function PersonalSection() {
  return (
    <section class='bg-white p-20'>
      <div class='container mx-auto px-6'>
        <hr class='pb-10' />
        <div class='grid md:grid-cols-2 gap-12 items-center'>
          {/* Profile Image & Info */}
          <div class='space-y-6'>
            <div class='relative'>
              <div class='w-64 h-64 mx-auto overflow-hidden rounded-2xl shadow-lg'>
                <img
                  src='/perguth.webp'
                  alt='Per Guth'
                  class='w-full h-full object-cover'
                  width='256'
                  height='256'
                />
              </div>
              <div class='absolute -bottom-3 -right-3 bg-blue-600 text-white p-4 rounded-xl shadow-lg'>
                <a
                  href='https://www.linkedin.com/in/perguth/'
                  target='_blank'
                  rel='noopener noreferrer'
                  class='flex items-center gap-2 hover:opacity-90 transition-opacity'
                >
                  <svg class='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div class='text-center'>
              <h3 class='text-2xl font-bold text-gray-900'>Per Guth</h3>
              <p class='text-gray-600 mt-2'>
                Full Stack Engineer & Unternehmer
              </p>
            </div>
          </div>

          {/* Experience & Recommendation */}
          <div class='space-y-8'>
            <div>
              <h3 class='text-xl font-semibold text-gray-900 mb-4'>
                Expertise & Erfahrung
              </h3>
              <ul class='space-y-3 text-gray-600'>
                {experiences.map((exp, index) => (
                  <li key={index} class='flex items-start gap-3'>
                    <svg
                      class='w-5 h-5 text-blue-600 mt-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span>{exp.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class='bg-gray-50 rounded-2xl p-6'>
              <h4 class='text-lg font-semibold text-gray-900 mb-4'>
                Persönliche Empfehlung für Per Guth als Berater
              </h4>
              <blockquote class='text-gray-600 italic relative'>
                <svg
                  class='absolute -top-4 -left-3 w-8 h-8 text-gray-200'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                >
                  <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                </svg>
                <p class='pl-6'>
                  Per Guth unterstützt mich schon seit Jahren schnell und
                  zuverlässig bei vielen IT-Fragen und -Problemen zu meiner
                  großen Zufriedenheit - sehr empfehlenswert!
                </p>
              </blockquote>
              <div class='mt-6 border-t border-gray-100 pt-4'>
                <div class='flex items-center'>
                  <div>
                    <p class='font-medium text-gray-900'>
                      Prof. Dr. Volker M. Haug
                    </p>
                    <p class='text-sm text-gray-500'>
                      Professor für Öffentliches Recht
                    </p>
                    <p class='text-xs text-gray-400 mt-1'>
                      Persönliche Empfehlung aus März 2024
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
