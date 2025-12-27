'use client'

interface HeroProps {
  badge?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
  heroImage?: string
}

export default function Hero({
  badge = 'Austin Water Utility Rebate Program',
  title = 'Transform Your Home Into a Water-Saving Oasis',
  subtitle = 'Join 5,000+ Austin homeowners who have saved over $2 million on water bills. Get up to $500 back when you install a greywater recycling system.',
  ctaText = 'Get Your Free Quote',
  ctaUrl = '#lead-form',
  secondaryCtaText = 'See How It Works',
  secondaryCtaUrl = '#how-it-works',
  heroImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-300">{badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-blue-100/70">City Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-blue-100/70">Licensed Installers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-blue-100/70">5-Year Warranty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ctaUrl}
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
              >
                {ctaText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={secondaryCtaUrl}
                className="inline-flex items-center justify-center border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {secondaryCtaText}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={heroImage}
                  alt="Modern sustainable home with water-saving features"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">$500</div>
                        <div className="text-xs text-blue-200">Max Rebate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">40%</div>
                        <div className="text-xs text-blue-200">Water Saved</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">5K+</div>
                        <div className="text-xs text-blue-200">Homes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
