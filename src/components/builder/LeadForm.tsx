'use client'

import { useState } from 'react'

interface LeadFormProps {
  title?: string
  subtitle?: string
  submitText?: string
  successTitle?: string
  successMessage?: string
  formImage?: string
}

export default function LeadForm({
  title = 'Get Your Free Rebate Assessment',
  subtitle = 'Find out how much you could save. Our water conservation experts will review your home and provide a personalized quote within 24 hours.',
  submitText = 'Get My Free Quote',
  successTitle = 'Application Received!',
  successMessage = "Thank you! One of our water conservation specialists will contact you within 24 hours to discuss your rebate eligibility and provide a free assessment.",
  formImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    homeType: '',
    waterBill: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section id="lead-form" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{successTitle}</h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">{successMessage}</p>
            <div className="mt-8 p-4 bg-emerald-50 rounded-xl">
              <p className="text-sm text-emerald-700">
                <strong>What happens next?</strong> Our team will call you to schedule a free home assessment and discuss your rebate options.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image & Info */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200/50 rounded-full blur-3xl"></div>
              <img
                src={formImage}
                alt="Modern Austin home with sustainable features"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />

              {/* Testimonial Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  "The rebate process was so easy. We got $500 back and our water bill dropped by 35%!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Sarah M.</div>
                    <div className="text-xs text-slate-500">Austin, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="inline-flex items-center bg-emerald-50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-emerald-600">Free Assessment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="(512) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                    Austin Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="123 Main St, Austin, TX"
                  />
                </div>
                <div>
                  <label htmlFor="homeType" className="block text-sm font-medium text-slate-700 mb-2">
                    Home Type
                  </label>
                  <select
                    id="homeType"
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select type</option>
                    <option value="single-family">Single Family</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condo</option>
                    <option value="multi-family">Multi-Family</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="waterBill" className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Water Bill
                  </label>
                  <select
                    id="waterBill"
                    name="waterBill"
                    value={formData.waterBill}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select range</option>
                    <option value="under-50">Under $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-150">$100 - $150</option>
                    <option value="over-150">Over $150</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
              >
                {submitText}
              </button>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Obligation</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
