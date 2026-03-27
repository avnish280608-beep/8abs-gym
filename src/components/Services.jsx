import { Link } from 'react-router-dom'

export const servicesData = [
  {
    id: 'core-abs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Core & Abdominal Training',
    badge: 'Signature',
    desc: 'Our signature "8 ABS" programs designed to sculpt, strengthen, and define your core like never before. Science-backed methods for visible results.',
    fullDesc: 'The 8 ABS core program is our crown jewel. Using a combination of progressive overload, functional movement patterns, and targeted isolation exercises, we build the kind of core strength that transforms both aesthetics and athletic performance. Sessions include planks, dead bugs, hanging leg raises, cable crunches, and our proprietary 8-step protocol.',
    color: 'from-crimson/20 to-crimson/5',
    border: 'border-crimson/40',
    tag: 'bg-crimson text-white',
  },
  {
    id: 'strength',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Strength & Bodybuilding',
    badge: 'Popular',
    desc: 'Full range of free weights, barbells, and branded machines. Whether you\'re bulking or cutting, our equipment and coaches have you covered.',
    fullDesc: 'Our strength zone is equipped with Olympic barbells, power racks, dumbbells up to 50kg, and a full complement of cable machines. Coaches design periodized programs tailored to your current level — whether you\'re starting a beginner 5x5 or pursuing advanced hypertrophy training.',
    color: 'from-orange-electric/20 to-orange-electric/5',
    border: 'border-orange-electric/40',
    tag: 'bg-orange-electric text-white',
  },
  {
    id: 'cardio',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Cardio & Weight Loss',
    badge: null,
    desc: 'High-end treadmills and cross-trainers to torch calories and improve cardiovascular health. Structured HIIT sessions available.',
    fullDesc: 'Our cardio suite features commercial-grade treadmills, ellipticals, stationary bikes, and rowing machines. We integrate cardio into your overall plan strategically — not just as an afterthought. HIIT classes run 3x per week and are designed to maximize calorie burn in minimum time.',
    color: 'from-white/5 to-transparent',
    border: 'border-white/10',
    tag: null,
  },
  {
    id: 'personal-training',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Personal Training',
    badge: '1-on-1',
    desc: 'Expert 1-on-1 guidance tailored to your body type, fitness level, and goals. Diet planning and lifestyle coaching included.',
    fullDesc: 'Personal training at 8 ABS means a dedicated coach, a fully customized program, and accountability every step of the way. Your trainer conducts an initial assessment, builds your macronutrient targets, designs your training split, and adjusts it weekly based on your progress.',
    color: 'from-crimson/10 to-transparent',
    border: 'border-crimson/20',
    tag: 'bg-crimson/20 text-crimson border border-crimson/30',
  },
  {
    id: 'physiotherapy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Physiotherapy Support',
    badge: null,
    desc: 'On-site physiotherapy guidance for recovery, injury prevention, and rehabilitation. Train smart, train safe.',
    fullDesc: 'Injury should never be a reason to stop training. Our physiotherapy support service helps members work around injuries, recover faster, and correct movement imbalances before they become problems. We assess posture, mobility, and movement patterns to keep you training safely.',
    color: 'from-white/5 to-transparent',
    border: 'border-white/10',
    tag: null,
  },
  {
    id: 'crossfit',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'CrossFit & Aerobics',
    badge: 'Group',
    desc: 'Dynamic group sessions that blend CrossFit techniques with aerobic training. Build endurance, coordination, and community spirit.',
    fullDesc: 'Our group classes are the heartbeat of the 8 ABS community. Blending functional CrossFit movements with aerobic conditioning, classes are designed to challenge all fitness levels. Coached by certified instructors, you\'ll improve endurance, coordination, agility, and mental toughness together.',
    color: 'from-orange-electric/10 to-transparent',
    border: 'border-orange-electric/20',
    tag: 'bg-orange-electric/20 text-orange-electric border border-orange-electric/30',
  },
]

export default function Services({ preview = false }) {
  const displayed = preview ? servicesData.slice(0, 3) : servicesData

  return (
    <section id="services" className="py-28 bg-charcoal-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-crimson to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title mb-4">
            Our <span className="text-crimson">Specialized</span> Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {preview
              ? 'Six world-class programs engineered to push your limits and deliver real results.'
              : 'Six world-class programs engineered to push your limits, refine your form, and deliver real, measurable results.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((s) => (
            <div
              key={s.id}
              className={`relative bg-gradient-to-br ${s.color} border ${s.border} rounded-sm p-7 hover:-translate-y-1 transition-all duration-300 group`}
            >
              {s.badge && (
                <span className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${s.tag}`}>
                  {s.badge}
                </span>
              )}
              <div className="text-crimson mb-5 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          {preview ? (
            <Link to="/services" className="btn-outline text-base">
              View All Services
            </Link>
          ) : null}
          <a href="tel:09044405342" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Book a Free Trial Session
          </a>
        </div>
      </div>
    </section>
  )
}
