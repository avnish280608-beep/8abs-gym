// WhatsApp phone number in international format (91 = India country code)
const WA_NUMBER = '919044405342'

function whatsappLink(planName) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in the ${planName} at 8 ABS Gym. Please share details.`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

// WhatsApp icon SVG
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export const plansData = [
  {
    name: 'Daily Pass',
    price: 'Contact Us',
    period: 'per visit',
    highlight: false,
    features: [
      'Full gym access',
      'Cardio & weights area',
      'Locker room access',
      'Trainer on floor',
    ],
    cta: 'Chat for Day Pass',
  },
  {
    name: '1-Month Plan',
    price: 'Best for Starters',
    period: '30 days access',
    highlight: true,
    features: [
      'Unlimited gym access',
      'All equipment included',
      'Diet consultation',
      'Progress tracking',
      'Group classes access',
    ],
    cta: 'Chat for 1-Month Plan',
  },
  {
    name: 'Annual Plan',
    price: 'Maximum Value',
    period: '365 days access',
    highlight: false,
    features: [
      'Unlimited gym access',
      'Personal training sessions',
      'Full diet & workout plan',
      'Physiotherapy support',
      'Priority booking',
      'All group classes',
    ],
    cta: 'Chat for Annual Plan',
  },
]

export default function Membership() {
  return (
    <section id="membership" className="py-28 bg-charcoal-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">Membership Options</p>
          <h2 className="section-title mb-4">
            Flexible <span className="text-crimson">Plans</span> for
            <br />
            Every Goal.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Choose the membership that fits your lifestyle. No hidden fees, no long-term traps —
            just commitment to your results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-crimson border-2 border-crimson scale-105 shadow-2xl shadow-crimson/30'
                  : 'card-dark border border-white/10 hover:border-crimson/40'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-white text-crimson text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  Popular
                </div>
              )}

              <h3 className="font-display text-3xl tracking-wider mb-1 text-white">
                {plan.name}
              </h3>
              <div className={`text-sm mb-1 font-semibold ${plan.highlight ? 'text-white/80' : 'text-orange-electric'}`}>
                {plan.price}
              </div>
              <div className={`text-xs uppercase tracking-widest mb-7 ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                {plan.period}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-crimson'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-300'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 uppercase tracking-widest text-sm rounded-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                }`}
              >
                <WhatsAppIcon />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Prefer to call?{' '}
          <a href="tel:09044405342" className="text-crimson hover:underline">
            090444 05342
          </a>{' '}
          — or chat with us instantly on{' '}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            WhatsApp
          </a>.
        </p>
      </div>
    </section>
  )
}
