'use client'

interface BenefitsProps {
  title?: string
  subtitle?: string
  sectionImage?: string
}

export default function Benefits({
  title = 'Why Austin Homeowners Choose Greywater Systems',
  subtitle = 'Smart water management that pays for itself while protecting our environment',
  sectionImage = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
}: BenefitsProps) {
  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Up to $500 Cash Back',
      description: 'Receive a substantial rebate from Austin Water Utility. Most homeowners qualify for the maximum rebate amount.',
      stat: '$500',
      statLabel: 'Max Rebate',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Cut Water Bills 40%',
      description: 'Reuse water from showers, sinks, and laundry for irrigation. Watch your monthly water costs drop significantly.',
      stat: '40%',
      statLabel: 'Avg. Savings',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Protect Our Water Supply',
      description: 'Austin faces growing water challenges. Every gallon you recycle helps secure our future water resources.',
      stat: '15K',
      statLabel: 'Gal/Year Saved',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Boost Home Value',
      description: 'Eco-conscious buyers pay premium prices. A greywater system is a smart investment in your property value.',
      stat: '+$8K',
      statLabel: 'Home Value',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-emerald-600">Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-emerald-600">{benefit.stat}</span>
                    <span className="text-sm text-slate-500">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src={sectionImage}
            alt="Sustainable garden with water-efficient landscaping"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 flex items-center">
            <div className="px-8 md:px-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Saving?
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of Austin homeowners who are already benefiting from greywater systems.
              </p>
              <a
                href="#lead-form"
                className="inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Check Your Eligibility
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
