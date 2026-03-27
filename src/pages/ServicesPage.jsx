import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { servicesData } from '../components/Services'
import WhyUs from '../components/WhyUs'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        subtitle="What We Offer"
        title="Our Specialized"
        titleAccent="Services"
        description="Six world-class programs engineered to push your limits, refine your form, and deliver real, measurable results."
        bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
      />

      {/* All Services - expanded cards */}
      <section className="py-24 bg-charcoal-mid relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((s) => (
              <div
                key={s.id}
                className={`relative bg-gradient-to-br ${s.color} border ${s.border} rounded-sm p-8 group hover:-translate-y-1 transition-all duration-300`}
              >
                {s.badge && (
                  <span className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${s.tag}`}>
                    {s.badge}
                  </span>
                )}
                <div className="text-crimson mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-gray-500 text-sm leading-relaxed border-t border-white/10 pt-4">{s.fullDesc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6 text-lg">Ready to get started? Book a free trial session today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:09044405342" className="btn-primary text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call & Book Free Trial
              </a>
              <Link to="/membership" className="btn-outline text-base">
                View Membership Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  )
}
