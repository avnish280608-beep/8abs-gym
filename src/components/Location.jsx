export default function Location() {
  const mapsQuery = 'W+block,+620%2F161,+near+Jagran+College,+Tulsi+Vihar,+Keshav+Nagar,+Saket+Nagar,+Kanpur,+Uttar+Pradesh+208014'

  return (
    <section id="location" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title mb-8">
              Visit <span className="text-crimson">8 ABS</span>
              <br />
              Gym Today.
            </h2>

            <div className="space-y-5">
              {/* Address */}
              <div className="card-dark p-5 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-crimson/10 border border-crimson/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    W block, 620/161, near Jagran College,<br />
                    Tulsi Vihar, Keshav Nagar, Saket Nagar,<br />
                    Kanpur, Uttar Pradesh 208014
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="card-dark p-5 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-electric/10 border border-orange-electric/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Opening Hours</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Morning</p>
                      <p className="text-white font-bold text-lg font-display tracking-wider">6:00 AM</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Evening</p>
                      <p className="text-white font-bold text-lg font-display tracking-wider">10:00 PM</p>
                    </div>
                  </div>
                  <p className="text-green-400 text-xs mt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                    Open 7 days a week
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="card-dark p-5 rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-crimson/10 border border-crimson/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Contact</p>
                  <a
                    href="tel:09044405342"
                    className="text-white text-xl font-bold font-display tracking-wider hover:text-crimson transition-colors"
                  >
                    090444 05342
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:09044405342" className="btn-primary flex-1 justify-center text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Click to Call
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-sm overflow-hidden border border-white/10 h-[500px] relative">
            <iframe
              title="8 ABS Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0879870!2d80.3274!3d26.4497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c379d8d4a1f2b%3A0x8a1c1d40a5c5e4b!2sSaket+Nagar%2C+Kanpur%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="bg-crimson text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-lg shadow-crimson/40 pointer-events-auto">
                8 ABS Gym — Saket Nagar, Kanpur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
