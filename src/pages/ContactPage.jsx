import { useState } from 'react'
import PageHero from '../components/PageHero'
import Location from '../components/Location'

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', goal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production connect to a backend / form service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card-dark rounded-sm p-10 text-center">
        <div className="w-16 h-16 bg-crimson/10 border border-crimson/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-white mb-2 tracking-wider">Message Received!</h3>
        <p className="text-gray-400 mb-6">
          Thanks, <span className="text-white">{form.name}</span>! We'll get back to you shortly on <span className="text-crimson">{form.phone}</span>.
        </p>
        <a href="tel:09044405342" className="btn-primary inline-flex">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Or Call Us Now
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark rounded-sm p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-charcoal-dark border border-white/10 focus:border-crimson/60 rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder-gray-600"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your mobile number"
            className="w-full bg-charcoal-dark border border-white/10 focus:border-crimson/60 rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder-gray-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="goal">
          Fitness Goal
        </label>
        <select
          id="goal"
          name="goal"
          value={form.goal}
          onChange={handleChange}
          className="w-full bg-charcoal-dark border border-white/10 focus:border-crimson/60 rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-200 appearance-none"
        >
          <option value="" className="bg-charcoal-dark">Select your primary goal</option>
          <option value="weight-loss" className="bg-charcoal-dark">Weight Loss</option>
          <option value="muscle-gain" className="bg-charcoal-dark">Muscle Gain / Bodybuilding</option>
          <option value="core-abs" className="bg-charcoal-dark">Core & Abs Training</option>
          <option value="strength" className="bg-charcoal-dark">Strength & Powerlifting</option>
          <option value="crossfit" className="bg-charcoal-dark">CrossFit & Endurance</option>
          <option value="rehab" className="bg-charcoal-dark">Rehabilitation / Physiotherapy</option>
          <option value="general" className="bg-charcoal-dark">General Fitness</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Any questions or additional details..."
          className="w-full bg-charcoal-dark border border-white/10 focus:border-crimson/60 rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder-gray-600 resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Send Message
      </button>

      <p className="text-gray-600 text-xs text-center">
        Prefer to talk? Call us directly at{' '}
        <a href="tel:09044405342" className="text-crimson hover:underline">090444 05342</a>
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Get in Touch"
        title="Contact"
        titleAccent="8 ABS Gym"
        description="Have a question, want to book a trial, or just want to know more? Reach out — we're here to help."
        bgImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
      />

      {/* Contact Form + Quick Info */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="section-subtitle">Send a Message</p>
              <h2 className="section-title mb-8">
                We'll Get <span className="text-crimson">Back to You</span>
              </h2>
              <ContactForm />
            </div>

            {/* Quick contact cards */}
            <div className="lg:col-span-2 flex flex-col gap-5 justify-start pt-24">
              <div className="card-dark p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-crimson/10 border border-crimson/20 rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Phone</span>
                </div>
                <a href="tel:09044405342" className="text-white font-bold text-xl font-display tracking-wider hover:text-crimson transition-colors">
                  090444 05342
                </a>
              </div>

              <div className="card-dark p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-orange-electric/10 border border-orange-electric/20 rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Hours</span>
                </div>
                <p className="text-white font-semibold">6:00 AM – 10:00 PM</p>
                <p className="text-gray-400 text-sm">Mon – Sun, every day</p>
              </div>

              <div className="card-dark p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-crimson/10 border border-crimson/20 rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Address</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  W block, 620/161, near Jagran College,<br />
                  Saket Nagar, Kanpur, UP 208014
                </p>
              </div>

              <div className="card-dark p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-bold">4.9</span>
                </div>
                <p className="text-gray-400 text-sm">Google Rating — Kanpur's highest-rated gym</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  )
}
