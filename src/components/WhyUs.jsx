const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Clean & Sanitized',
    desc: 'Well-maintained restrooms and workout areas. We uphold the highest hygiene standards so you can train with full confidence.',
    accent: 'text-crimson',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Student-Friendly',
    desc: 'Conveniently located near Jagran College. Special membership plans designed for students on a budget who are serious about fitness.',
    accent: 'text-orange-electric',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Expert Trainers',
    desc: 'Certified coaches who specialize in diet planning and personalized workout programming. Led by Head Coach Mr. Sonu Mishra.',
    accent: 'text-crimson',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    title: 'Flexible Memberships',
    desc: 'Daily passes, 1-month plans, and full-year memberships available. No lock-ins, no hidden fees. Just results.',
    accent: 'text-orange-electric',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'High-Energy Environment',
    desc: 'Air-conditioned, purpose-built training space that keeps you energized and focused. Every detail designed to fuel your drive.',
    accent: 'text-crimson',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Extended Hours',
    desc: "Open 6 AM to 10 PM, 7 days a week. Whether you're an early bird or a night owl, we're here when you need us.",
    accent: 'text-orange-electric',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-crimson/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-electric/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title mb-4">
            The <span className="text-crimson">8 ABS</span>
            <br />
            Difference.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We're not just a gym — we're your partner in transformation.
            Here's why Kanpur's fitness community trusts us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-charcoal p-8 hover:bg-charcoal-light transition-colors duration-300 group"
            >
              <div className={`${f.accent} mb-5 group-hover:scale-110 transition-transform duration-300 inline-block`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-crimson to-crimson-dark rounded-sm p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h3 className="font-display text-4xl text-white uppercase tracking-wider mb-2">
              Your Core Journey Starts Here.
            </h3>
            <p className="text-white/70">
              Join Kanpur's most dedicated fitness community today.
            </p>
          </div>
          <a
            href="tel:09044405342"
            className="relative flex-shrink-0 bg-white text-crimson font-bold px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call 090444 05342
          </a>
        </div>
      </div>
    </section>
  )
}
