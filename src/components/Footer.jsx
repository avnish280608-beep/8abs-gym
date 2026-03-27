import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-dark border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 bg-crimson flex items-center justify-center rounded-sm font-display text-white text-2xl">
                8
              </div>
              <div>
                <div className="font-display text-3xl tracking-widest text-white">8 ABS</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] -mt-1">GYM</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Kanpur's premier strength and core training destination. Founded and led by
              Head Coach Mr. Sonu Mishra. Rated 4.9 ★ on Google.
            </p>
            <div className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/20 rounded-sm px-4 py-2">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-white text-sm font-bold">4.9</span>
              <span className="text-gray-400 text-xs">/ 5.0 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-crimson" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-crimson text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 text-gray-600 group-hover:text-crimson transition-colors"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-crimson" />
              Contact & Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-xs leading-relaxed">
                  W block, 620/161, near Jagran College,<br />
                  Saket Nagar, Kanpur, UP 208014
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-crimson flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                <a href="tel:09044405342" className="text-white text-sm font-semibold hover:text-crimson transition-colors">
                  090444 05342
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-crimson flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  <span className="text-white">Mon–Sun:</span> 6:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            <a
              href="tel:09044405342"
              className="mt-6 w-full btn-primary justify-center text-sm py-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Click to Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} 8 ABS Gym. All rights reserved. Saket Nagar, Kanpur.
          </p>
          <p className="text-gray-600 text-xs italic">
            "Your Core Journey Starts Here."
          </p>
        </div>
      </div>
    </footer>
  )
}
