import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Membership from '../components/Membership'

const WA_NUMBER = '919044405342'
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about memberships at 8 ABS Gym.")}`

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const faqs = [
  {
    q: 'Do you offer a free trial?',
    a: 'Yes! Call us at 090444 05342 to book a free trial session. We want you to experience 8 ABS Gym before committing to any plan.',
  },
  {
    q: 'Are the membership plans fixed-term contracts?',
    a: 'No lock-ins on our daily or monthly plans. We believe in earning your membership every month through results and service quality.',
  },
  {
    q: 'Is diet consultation included in all plans?',
    a: 'Diet consultation is included from the 1-Month Plan and above. Our coaches will help you set up your macronutrient targets based on your goal.',
  },
  {
    q: 'What are the gym timings?',
    a: 'We are open 7 days a week from 6:00 AM to 10:00 PM. There are no holidays — your fitness schedule comes first.',
  },
  {
    q: 'Can students get special discounts?',
    a: 'Yes, we offer student-friendly pricing. Bring your valid college ID and speak to our staff about available student plans.',
  },
  {
    q: 'Is the gym air-conditioned?',
    a: 'Absolutely. The entire training floor is fully air-conditioned, designed to keep you comfortable and performing at your best.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-semibold group-hover:text-crimson transition-colors duration-200">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-crimson transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function MembershipPage() {
  return (
    <>
      <PageHero
        subtitle="Join 8 ABS Gym"
        title="Membership"
        titleAccent="Plans"
        description="No hidden fees. No long-term traps. Just the plan that fits your goals and your schedule."
        bgImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
      />

      <Membership />

      {/* WhatsApp CTA Banner */}
      <section className="py-16 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="rounded-sm border border-green-500/30 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-sm flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Chat with Us on WhatsApp</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Have questions about pricing, plans, or want to book a free trial?
                  Message us instantly — we reply fast.
                </p>
              </div>
            </div>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-4 rounded-sm uppercase tracking-widest text-sm transition-all duration-200 active:scale-95 shadow-lg shadow-green-500/25"
            >
              <WhatsAppIcon />
              Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* What's Included breakdown */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">Included in Every Plan</p>
            <h2 className="section-title mb-4">
              Always <span className="text-crimson">Included,</span>
              <br />No Exceptions.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏋️', title: 'Full Equipment Access', desc: 'Free weights, machines, cables & cardio — all available every visit.' },
              { icon: '❄️', title: 'Air-Conditioned Floor', desc: 'Comfortable training environment all year round.' },
              { icon: '👨‍💼', title: 'Floor Trainer', desc: 'A certified trainer is always on the floor to guide you.' },
              { icon: '🚿', title: 'Locker Room', desc: 'Clean, well-maintained locker room and restroom facilities.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-6 rounded-sm text-center hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-charcoal-mid relative">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle">Got Questions?</p>
            <h2 className="section-title mb-4">
              Frequently <span className="text-crimson">Asked</span>
            </h2>
          </div>
          <div className="card-dark rounded-sm px-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions? We're happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-all duration-200 active:scale-95 shadow-lg shadow-green-500/20"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <a href="tel:09044405342" className="btn-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Us Now
              </a>
              <Link to="/contact" className="btn-outline">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
