'use client'

interface HowItWorksProps {
  title?: string
  subtitle?: string
}

export default function HowItWorks({
  title = 'How to Get Your Rebate',
  subtitle = 'A simple 4-step process to start saving water and money',
}: HowItWorksProps) {
  const steps = [
    {
      number: '01',
      title: 'Free Home Assessment',
      description: 'Schedule a free consultation. Our experts will evaluate your home and water usage to design the perfect system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
    },
    {
      number: '02',
      title: 'Custom System Design',
      description: 'We create a tailored greywater solution that maximizes your savings while meeting all Austin regulations.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
    },
    {
      number: '03',
      title: 'Professional Installation',
      description: 'Our licensed technicians install your system quickly and cleanly, typically in just one day.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
    },
    {
      number: '04',
      title: 'Collect Your Rebate',
      description: 'We handle all the paperwork. Your rebate check arrives within 4-6 weeks of installation.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-blue-600">Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Step {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 right-0 w-8 border-t-2 border-dashed border-slate-300 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-100 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Ready to get started?</h3>
              <p className="text-slate-600">Join 5,000+ Austin homeowners saving water</p>
            </div>
            <a
              href="#lead-form"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg whitespace-nowrap"
            >
              Get Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
