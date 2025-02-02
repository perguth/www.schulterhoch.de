// components/Footer.tsx
interface FooterLink {
  title: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { title: 'Strategieberatung', href: '/services/strategie' },
      { title: 'Strukturierung', href: '/services/strukturierung' },
      { title: 'Vermögensschutz', href: '/services/vermoegensschutz' },
      { title: 'Leitfaden', href: '/leitfaden' },
    ],
  },
  {
    title: 'Ressourcen',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Fallstudien', href: '/fallstudien' },
      { title: 'Newsletter', href: '/newsletter' },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer class='bg-gray-900 text-gray-400 py-12'>
      <div class='container mx-auto px-6'>
        <div class='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div class='space-y-4'>
            <div class='flex items-center'>
              <span class='text-white font-semibold text-lg'>Schulterhoch</span>
            </div>
            <p class='text-sm'>
              Ihr Partner für generationsübergreifende wirtschaftliche
              Handlungsfreiheit.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div class='space-y-4' key={section.title}>
              <h4 class='text-white font-medium'>{section.title}</h4>
              <ul class='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      class='hover:text-white transition-colors'
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div class='space-y-4'>
            <h4 class='text-white font-medium'>Kontakt</h4>
            <div class='space-y-2'>
              <a
                href='mailto:kontakt@schulterhoch.de'
                class='block hover:text-white transition-colors'
              >
                kontakt@schulterhoch.de
              </a>
              <a
                href='tel:+49123456789'
                class='block hover:text-white transition-colors'
              >
                +49 (0) 123 456 789
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div class='border-t border-gray-800 mt-12 pt-8'>
          <div class='flex flex-col md:flex-row justify-between items-center'>
            <div class='text-sm'>
              © {currentYear} Schulterhoch. Alle Rechte vorbehalten.
            </div>
            <div class='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='/impressum'
                class='text-sm hover:text-white transition-colors'
              >
                Impressum
              </a>
              <a
                href='/datenschutz'
                class='text-sm hover:text-white transition-colors'
              >
                Datenschutz
              </a>
              <a
                href='/agb'
                class='text-sm hover:text-white transition-colors'
              >
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Constants for reuse
export const CONTACT_EMAIL = 'kontakt@schulterhoch.de'
export const CONTACT_PHONE = '+49123456789'
