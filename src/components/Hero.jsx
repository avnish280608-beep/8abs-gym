import { Link } from 'react-router-dom'

const stats = [
  { value: '4.9★', label: 'Google Rating' },
  { value: '6 AM', label: 'Opens Daily' },
  { value: '10 PM', label: 'Closes Daily' },
  { value: '6+', label: 'Programs Offered' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal-dark/80 to-charcoal-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-crimson/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-crimson to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-start">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-crimson/15 border border-crimson/30 px-4 py-2 rounded-sm mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          <span className="text-crimson text-xs font-bold uppercase tracking-[0.3em]">
            Kanpur's #1 Core Fitness Hub
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wide text-white leading-none mb-6 text-shadow"
          style={{ animationDelay: '0.1s' }}
        >
          Kanpur's Premier
          <br />
          <span className="text-crimson">Strength</span> &amp;
          <br />
          Core Destination.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Professional coaching, modern equipment, and a motivating community
          near Jagran College. Where champions are forged.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link to="/membership" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Your Transformation
          </Link>
          <a href="tel:09044405342" className="btn-outline text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            090444 05342
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-4xl text-crimson tracking-wider">{stat.value}</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
