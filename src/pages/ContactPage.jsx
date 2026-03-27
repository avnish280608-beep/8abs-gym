import PageHero from '../components/PageHero'
import Location from '../components/Location'

const WA_NUMBER = '919044405342'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in joining 8 ABS Gym. Can I book a trial session?")}`

function ContactCard({ icon, title, value, label, link, btnText, colorClass }) {
  return (
    <div className="card-dark p-8 rounded-sm flex flex-col h-full border-t-2 border-transparent hover:border-crimson transition-all duration-300">
      <div className={`w-12 h-12 ${colorClass} rounded-sm flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">{label}</span>
      <h3 className="text-white text-2xl font-display tracking-wide mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">{value}</p>
      
      <div className="mt-auto">
        <a 
          href={link} 
          target={link.startsWith('http') ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center text-xs tracking-widest"
        >
          {btnText}
        </a>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Get in Touch"
        title="Contact"
        titleAccent="8 ABS Gym"
        description="Skip the forms. Connect with our team directly for instant support, trial bookings, or membership queries."
        bgImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
      />

      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">No Forms. Just Results.</p>
            <h2 className="section-title">
              Direct <span className="text-crimson">Connections</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <ContactCard 
              label="Instant Chat"
              title="WhatsApp Us"
              value="Message us for quick queries, fee structures, or to send us a screenshot of your payment."
              link={WA_LINK}
              btnText="Chat on WhatsApp"
              colorClass="bg-green-500/10 border border-green-500/20 text-green-500"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              }
            />

            {/* Phone Card */}
            <ContactCard 
              label="Direct Line"
              title="Call 090444 05342"
              value="Want to talk to a trainer? Give us a call between 6:00 AM and 10:00 PM for a consultation."
              link="tel:09044405342"
              btnText="Call Now"
              colorClass="bg-crimson/10 border border-crimson/20 text-crimson"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              }
            />

            {/* Visit Card */}
            <ContactCard 
              label="In Person"
              title="Visit the Gym"
              value="W block, 620/161, Saket Nagar, Kanpur. Near Jagran College. Open every day."
              link="https://maps.google.com" 
              btnText="Get Directions"
              colorClass="bg-blue-500/10 border border-blue-500/20 text-blue-400"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              }
            />
          </div>

          {/* Social / Trust Bar */}
          <div className="mt-20 py-10 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white font-bold text-lg">Still not sure?</p>
              <p className="text-gray-500 text-sm">Join the 500+ members who transformed their lives at Kanpur's highest rated gym.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-xl">4.9/5</span>
              <span className="text-gray-500 text-sm">on Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  )
}
