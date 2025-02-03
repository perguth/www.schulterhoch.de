// routes/index.tsx
import { Head } from '$fresh/runtime.ts'
import HeroSection from '../islands/HeroSection.tsx'
import ScenarioSection from '../components/ScenarioSection.tsx'
import BenefitSection from '../components/BenefitSection.tsx'
import PersonalSection from '../components/PersonalSection.tsx'
import { Footer } from '../components/Footer.tsx'
import { Navbar } from '../components/Navbar.tsx'
import BetaBanner from '../islands/BetaBanner.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Schulterhoch - Das Fundament für grenzenlose Möglichkeiten
        </title>
        <meta
          name='description'
          content='Schaffen Sie heute die Strukturen, die Ihren Kindern alle Türen öffnen.'
        />
      </Head>
      <div class='min-h-screen flex flex-col'>
        <Navbar />
        <main class='flex-grow'>
          <HeroSection />
          <ScenarioSection />
          <BenefitSection />
          <PersonalSection />
        </main>
        <Footer />
        <BetaBanner />
      </div>
    </>
  )
}
