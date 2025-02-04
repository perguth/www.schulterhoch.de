// components/ScenarioSection.tsx
import { Scenario, ScenarioCard } from './ScenarioCard.tsx'

const scenarios: Scenario[] = [
  {
    id: 'exit',
    title: 'Der vermeintliche Traumstart',
    subtitle: 'Wenn der erste große Erfolg Ihres Kindes zur Belastung wird',
    icon: {
      type: 'graph',
      color: 'red',
    },
    content: {
      description: [
        'Stellen Sie sich vor: Ihr Kind hat es geschafft. Das Startup, das Sie von Anfang an unterstützt haben, wird für 10 Millionen Euro verkauft. Ein Moment größten Stolzes – bis die steuerliche Realität einbricht.',
        'Was als Meilenstein gedacht war, wird zur finanziellen Belastung: Ohne richtige Vorsorge gehen fast 50% des hart erarbeiteten Erfolgs durch Steuern verloren. Ein Szenario, das Sie heute noch optimieren können.',
      ],
      takeaway:
        'Schaffen Sie heute die richtigen Strukturen für morgen. Je früher Sie die Weichen stellen, desto mehr Optionen bleiben Ihrem Kind erhalten.',
      metrics: {
        title: 'Das Erfolgsszenario',
        items: [
          { label: 'Exit-Erlös', value: '10 Millionen Euro' },
          {
            label: 'Ausgangslage',
            value: 'Direkte persönliche Beteiligung ohne Strukturierung',
          },
        ],
      },
      consequences: {
        title: 'Steuerbelastung ohne Vorsorge',
        items: [
          { label: 'Einkommensteuer & Soli', value: '~4.750.000 €' },
          {
            label: 'Verfügbares Kapital',
            value: '~5.250.000 €',
            emphasis: true,
          },
        ],
      },
      prevention:
        'Mit der richtigen Strukturierung kann ein deutlich größerer Teil des Exits für Reinvestitionen und zukünftige Entwicklung genutzt werden.',
    },
  },
  {
    id: 'transformation',
    title: 'Die Umwandlungsfalle',
    subtitle: 'Wenn frühzeitige Entscheidungen späteren Erfolg einschränken',
    icon: {
      type: 'money', // oder 'lock', je nachdem welches besser passt
      color: 'rose',
    },
    content: {
      description: [
        'Was viele nicht wissen: Die Art der Unternehmensgründung hat massive Auswirkungen auf spätere Handlungsoptionen. Ein als Einzelunternehmen gestartetes Business kann zwar in eine GmbH umgewandelt werden - aber entweder mit 7-jähriger Sperrfrist oder sofortiger Besteuerung.',
        'Diese Entscheidung zwischen Sperrfrist oder Steuerbelastung wird oft genau dann relevant, wenn sich die beste Exit-Gelegenheit bietet. Eine übereilte Anfangsstrukturierung kann so zum kostspieligen Dilemma werden.',
      ],
      takeaway:
        'Die richtige Rechtsform von Anfang an ermöglicht maximale Flexibilität bei minimaler Steuerbelastung.',
      metrics: {
        title: 'Typische Situation',
        items: [
          { label: 'Startphase', value: 'Gründung als Einzelunternehmen' },
          { label: 'Später', value: 'Umwandlung in GmbH notwendig' },
        ],
      },
      consequences: {
        title: 'Die Optionen',
        items: [
          {
            label: 'Option 1',
            value: '7 Jahre Sperrfrist ohne Steuern',
          },
          {
            label: 'Option 2',
            value: 'Sofortige Besteuerung (~47,5%)',
          },
          {
            label: 'Konsequenz',
            value: 'Eingeschränkte Handlungsfreiheit',
            emphasis: true,
          },
        ],
      },
      prevention:
        'Eine durchdachte Anfangsstrukturierung vermeidet dieses Dilemma und erhält alle Handlungsoptionen.',
    },
  },
  {
    id: 'mobility',
    title: 'Die goldene Fessel',
    subtitle: 'Wenn Erfolg zur Einschränkung der Lebensgestaltung führt',
    icon: {
      type: 'lock',
      color: 'orange',
    },
    content: {
      description: [
        'Ihr Kind hat ein erfolgreiches Unternehmen aufgebaut und erwirtschaftet jährlich 100.000€ Gewinn. Eine großartige Leistung – die jedoch ungeahnte Folgen hat: Der Traum vom internationalen Arbeiten oder Leben wird zur finanziellen Falle.',
        'Selbst ein Umzug innerhalb der EU wird durch die Wegzugsbesteuerung praktisch unmöglich. Ihr Kind wird zum "Gefangenen des eigenen Erfolgs" – ein Szenario, das sich durch vorausschauende Planung vermeiden lässt.',
      ],
      takeaway:
        'Schaffen Sie frühzeitig internationale Strukturen. So bewahren Sie Ihrem Kind alle Optionen für eine selbstbestimmte Zukunft.',
      metrics: {
        title: 'Die Ausgangslage',
        items: [
          { label: 'Erfolg', value: '100.000€ Jahresgewinn' },
          { label: 'Zukunftswunsch', value: 'Internationale Mobilität' },
        ],
      },
      consequences: {
        title: 'Die Konsequenzen',
        items: [
          {
            label: 'Bei Wegzug',
            value: '7 Jahre Steuerzahlung im Voraus fällig',
          },
          { label: 'Sofortige Zahlung', value: '700.000€ erforderlich' },
          { label: 'Faktische Bindung', value: 'an den Standort Deutschland' },
        ],
      },
      prevention:
        'Die richtige Strukturierung heute sichert Ihrem Kind morgen alle Optionen für eine internationale Karriere.',
    },
  },
  {
    id: 'tax-burden',
    title: 'Die schleichende Belastung',
    subtitle: 'Wie die wahre Steuerlast die Zukunft Ihres Kindes prägt',
    icon: {
      type: 'money',
      color: 'yellow',
    },
    content: {
      description: [
        'Was Ihr Kind tatsächlich von seinem erwirtschafteten Erfolg behalten kann, ist oft erschreckend wenig. Die verschiedenen Steuerarten summieren sich zu einer Gesamtbelastung, die kaum Spielraum für echten Vermögensaufbau lässt.',
        'Von jedem verdienten Euro bleiben im typischen Fall nur etwa 30 Cent zur freien Verfügung - ein massiver Einschnitt in die Möglichkeiten, eigene Ideen umzusetzen und nachhaltig Vermögen aufzubauen.',
      ],
      takeaway:
        'Ohne optimierte Strukturen wird es für Ihr Kind schwer, echtes Vermögen aufzubauen und seine unternehmerischen Visionen zu verwirklichen.',
      metrics: {
        title: 'Die Belastungen im Detail',
        items: [
          { label: 'Einkommensteuer', value: 'bis 45%' },
          { label: 'Solidaritätszuschlag', value: '5,5%' },
          { label: 'Gewerbesteuer', value: '~15%' },
          { label: 'Umsatzsteuer', value: '19%' },
        ],
      },
      consequences: {
        title: 'Praktisches Beispiel',
        items: [
          { label: 'Verdiente 100.000€', value: '100%' },
          { label: 'Effektive Gesamtbelastung', value: '~70%' },
          { label: 'Verfügbares Kapital', value: '~30.000€', emphasis: true },
        ],
      },
      prevention:
        'Mit der richtigen Strukturierung kann ein deutlich größerer Teil des erwirtschafteten Erfolgs für Wachstum und Entwicklung genutzt werden.',
    },
  },
  {
    id: 'generation-gap',
    title: 'Der Unterschied einer Generation',
    subtitle: 'Wie frühe Weichenstellung das Lebenswerk Ihres Kindes prägt',
    icon: {
      type: 'chart',
      color: 'blue',
    },
    content: {
      description: [
        'Ein Startkapital von 100.000€ - zum Beispiel aus einem ersten erfolgreichen Projekt oder einer Erbschaft - könnte der Grundstein für die finanzielle Zukunft Ihres Kindes sein. Doch der Unterschied in der steuerlichen Struktur entscheidet über Generationen.',
        'Mit der richtigen Strukturierung könnte Ihr Kind nach 30 Jahren ein Vermögen von 850.000€ aufgebaut haben. Ohne Vorsorge bleiben nur 320.000€ - ein Unterschied von mehr als einer halben Million Euro.',
      ],
      takeaway:
        'Je früher die richtigen Strukturen geschaffen werden, desto stärker wirkt der Zinseszinseffekt für Ihr Kind - ein Unterschied, der über Generationen nachwirkt.',
      metrics: {
        title: 'Die Startbedingungen',
        items: [
          { label: 'Startkapital', value: '100.000€' },
          { label: 'Anlagehorizont', value: '30 Jahre' },
          { label: 'Jährliche Rendite', value: '8%' },
        ],
      },
      consequences: {
        title: 'Die Entwicklung',
        items: [
          { label: 'Mit optimaler Struktur (15% Steuer)', value: '850.000€' },
          { label: 'Ohne Vorsorge (45% Steuer)', value: '320.000€' },
          { label: 'Differenz', value: '530.000€', emphasis: true },
        ],
      },
      prevention:
        'Diese Differenz von 530.000€ könnte der entscheidende Unterschied für die Zukunftsmöglichkeiten Ihres Kindes sein.',
    },
  },
  {
    id: 'growth',
    title: 'Die Wachstumsbremse',
    subtitle: 'Wenn Gewinne das Unternehmen nicht weiterbringen',
    icon: {
      type: 'chart',
      color: 'emerald',
    },
    content: {
      description: [
        'Ein junges Unternehmen erwirtschaftet erste Gewinne - doch diese können nicht optimal für weiteres Wachstum eingesetzt werden. Grund: Die klassische GmbH-Struktur führt zu einer Doppelbesteuerung bei der Reinvestition in neue Projekte.',
        'Gewinne müssen erst versteuert und ausgeschüttet werden, bevor sie in neue Projekte investiert werden können. Bei einer Million Euro Gewinn bleiben so oft nur 500.000€ für echtes Wachstum - ein massiver Nachteil im Wettbewerb.',
      ],
      takeaway:
        'Mit der richtigen Holding-Struktur können Gewinne flexibel und steuereffizient für weiteres Wachstum eingesetzt werden.',
      metrics: {
        title: 'Ausgangssituation',
        items: [
          { label: 'Gewinn', value: '1.000.000€' },
          { label: 'Geplant', value: 'Reinvestition in neue Projekte' },
        ],
      },
      consequences: {
        title: 'Klassischer Weg',
        items: [
          {
            label: 'Unternehmenssteuer',
            value: '~30% (GewSt + KSt)',
          },
          {
            label: 'Ausschüttungssteuer',
            value: '~26,375% (Abgeltung)',
          },
          {
            label: 'Verfügbar für Wachstum',
            value: '~500.000€',
            emphasis: true,
          },
        ],
      },
      prevention:
        'Eine optimierte Struktur ermöglicht die volle Nutzung der Gewinne für weiteres Wachstum.',
    },
  },
  {
    id: 'future-risks',
    title: 'Lektionen der Geschichte',
    subtitle: 'Warum Vorsorge heute wichtiger ist denn je',
    icon: {
      type: 'alert',
      color: 'purple',
    },
    content: {
      description: [
        'Die Geschichte zeigt uns: In außergewöhnlichen Zeiten können auch außergewöhnliche Maßnahmen folgen. Der Lastenausgleich nach dem Zweiten Weltkrieg bedeutete für viele Familien den Verlust von 50% ihres Vermögens - ein historisches Beispiel dafür, wie schnell sich Rahmenbedingungen ändern können.',
        'Auch heute gibt es keine rechtliche Obergrenze für Sonderabgaben, und die Präzedenzfälle der Vergangenheit zeigen: Vermögen, das nicht klug strukturiert ist, kann schnell zur Zielscheibe werden.',
      ],
      takeaway:
        'Die richtige Strukturierung heute ist der beste Schutz für die Zukunft. Damit Ihr Kind auch in unsicheren Zeiten handlungsfähig bleibt.',
      metrics: {
        title: 'Historische Präzedenzfälle',
        items: [
          { label: 'Lastenausgleich', value: '50% des Vermögens' },
          { label: 'Vermögensabgabe', value: 'Sonderabgaben in Krisenzeiten' },
          { label: 'Notfall-Enteignungen', value: 'Rechtliche Möglichkeit' },
        ],
      },
      consequences: {
        title: 'Aktuelle Situation',
        items: [
          {
            label: 'Rechtliche Grenzen',
            value: 'Keine Obergrenze für neue Sonderabgaben',
          },
          { label: 'Risikofaktor', value: 'Steigende Staatsverschuldung' },
          {
            label: 'Konsequenz',
            value: 'Erhöhtes Risiko neuer Abgaben',
            emphasis: true,
          },
        ],
      },
      prevention:
        'Mit der richtigen Strukturierung heute können Sie Ihr Kind vor den Unsicherheiten von morgen schützen.',
    },
  },
]

export default function ScenarioSection() {
  return (
    <section class='py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div class='container mx-auto px-6'>
        <div class='max-w-4xl mx-auto text-center mb-16 relative'>
          <div class='absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600'>
          </div>

          <h2 class='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
            Vorausschauende Strukturierung
            <span class='block mt-2 text-blue-600'>ist der Schlüssel</span>
          </h2>

          <div class='max-w-3xl mx-auto'>
            <p class='text-lg md:text-xl text-gray-600 leading-relaxed mb-6'>
              Als Eltern wünschen Sie sich für Ihr Kind alle Möglichkeiten der
              Welt. Doch ohne die richtigen Weichenstellungen können unerwartete
              Hindernisse den Weg Ihres Kindes erschweren.
            </p>

            <p class='text-lg md:text-xl text-gray-700 leading-relaxed'>
              Die folgenden realen Szenarien zeigen, wie frühzeitige
              Strukturierung den entscheidenden Unterschied macht – für die
              Handlungsfreiheit und den wirtschaftlichen Erfolg Ihres Kindes.
            </p>
          </div>

          <div class='absolute -left-4 -bottom-4 w-8 h-8 border-2 border-blue-200 opacity-50 rounded-full'>
          </div>
          <div class='absolute -right-2 -top-2 w-6 h-6 border-2 border-blue-300 opacity-50 rounded-full'>
          </div>
        </div>

        <div class='grid gap-8 mb-16'>
          {scenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </div>
    </section>
  )
}
