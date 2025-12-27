'use client'

import { type RegisteredComponent } from '@builder.io/sdk-react'
import Hero from './Hero'
import LeadForm from './LeadForm'
import Benefits from './Benefits'
import HowItWorks from './HowItWorks'
import Footer from './Footer'

export const customComponents: RegisteredComponent[] = [
  {
    component: Hero,
    name: 'Hero',
    inputs: [
      { name: 'badge', type: 'string', defaultValue: 'Austin Water Utility Rebate Program' },
      { name: 'title', type: 'string', defaultValue: 'Transform Your Home Into a Water-Saving Oasis' },
      { name: 'subtitle', type: 'longText', defaultValue: 'Join 5,000+ Austin homeowners who have saved over $2 million on water bills.' },
      { name: 'ctaText', type: 'string', defaultValue: 'Get Your Free Quote' },
      { name: 'ctaUrl', type: 'string', defaultValue: '#lead-form' },
      { name: 'secondaryCtaText', type: 'string', defaultValue: 'See How It Works' },
      { name: 'secondaryCtaUrl', type: 'string', defaultValue: '#how-it-works' },
      { name: 'heroImage', type: 'string', defaultValue: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    ],
  },
  {
    component: Benefits,
    name: 'Benefits Section',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Why Austin Homeowners Choose Greywater Systems' },
      { name: 'subtitle', type: 'longText', defaultValue: 'Smart water management that pays for itself while protecting our environment' },
      { name: 'sectionImage', type: 'string', defaultValue: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    ],
  },
  {
    component: HowItWorks,
    name: 'How It Works',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'How to Get Your Rebate' },
      { name: 'subtitle', type: 'longText', defaultValue: 'A simple 4-step process to start saving water and money' },
    ],
  },
  {
    component: LeadForm,
    name: 'Lead Form',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Get Your Free Rebate Assessment' },
      { name: 'subtitle', type: 'longText', defaultValue: 'Find out how much you could save. Our water conservation experts will review your home.' },
      { name: 'submitText', type: 'string', defaultValue: 'Get My Free Quote' },
      { name: 'successTitle', type: 'string', defaultValue: 'Application Received!' },
      { name: 'successMessage', type: 'longText', defaultValue: 'Thank you! One of our specialists will contact you within 24 hours.' },
      { name: 'formImage', type: 'string', defaultValue: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
    ],
  },
  {
    component: Footer,
    name: 'Footer',
    inputs: [
      { name: 'companyName', type: 'string', defaultValue: 'Austin Greywater Solutions' },
      { name: 'tagline', type: 'string', defaultValue: 'Helping Austin homeowners save water since 2015' },
    ],
  },
]
