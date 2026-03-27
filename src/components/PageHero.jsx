export default function PageHero({ subtitle, title, titleAccent, description, bgImage }) {
  return (
    <section className="relative pt-36 pb-20 bg-charcoal-dark overflow-hidden">
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 via-charcoal-dark/70 to-charcoal-dark/50" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-crimson to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="section-subtitle animate-fade-in-up">{subtitle}</p>
        <h1 className="section-title text-6xl md:text-7xl mb-5" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
          {title}
          {titleAccent && <span className="text-crimson"> {titleAccent}</span>}
        </h1>
        {description && (
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
