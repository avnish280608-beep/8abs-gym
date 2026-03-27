const highlights = [
  { icon: '🏋️', label: 'Modern Equipment', desc: 'Branded machines & free weights' },
  { icon: '❄️', label: 'Air Conditioned', desc: 'Comfortable training environment' },
  { icon: '👤', label: 'Head Coach', desc: 'Mr. Sonu Mishra, certified expert' },
  { icon: '🎯', label: 'Goal-Oriented', desc: 'Personalized programs for you' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-charcoal overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-electric/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-sm overflow-hidden h-72 relative">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                  alt="Gym equipment at 8 ABS Gym"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent" />
              </div>
              <div className="rounded-sm overflow-hidden h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                  alt="Personal training session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-sm overflow-hidden h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
                  alt="Cardio training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -bottom-6 -right-4 bg-charcoal-light border border-crimson/30 rounded-sm px-6 py-4 glow-red">
              <div className="font-display text-5xl text-crimson leading-none">4.9</div>
              <div className="flex gap-0.5 my-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">Google Rating</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="section-subtitle">About 8 ABS Gym</p>
            <h2 className="section-title mb-6">
              Built for
              <span className="text-crimson"> Results.</span>
              <br />
              Driven by
              <span className="text-orange-electric"> Passion.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded and led by Head Coach <strong className="text-white">Mr. Sonu Mishra</strong>,
              8 ABS Gym is Kanpur's most dedicated fitness hub right in the heart of Saket Nagar.
              We are rated <strong className="text-crimson">4.9 stars</strong> for our commitment to excellence.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We offer a high-energy, <strong className="text-white">fully air-conditioned</strong> environment
              designed for both beginners taking their first step and professional athletes pushing their limits.
              Our results-driven training philosophy puts <em className="text-white not-italic">you</em> at the center of every program.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="card-dark p-4 rounded-sm">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
