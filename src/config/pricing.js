import { Zap, Shield, Crown } from 'lucide-react';

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Creator',
    price: '$29',
    period: '/month',
    description: 'Perfect for independent creators and freelancers.',
    icon: Zap,
    highlight: false,
    features: [
      '100 AI Generations per month',
      'Standard Resolution (1080p)',
      'Basic Editing Tools',
      'Personal License',
      'Email Support'
    ],
    cta: 'Start Creating'
  },
  {
    id: 'pro',
    name: 'Agency',
    price: '$99',
    period: '/month',
    description: 'For growing agencies and marketing teams.',
    icon: Crown,
    highlight: true,
    popular: true,
    features: [
      'Unlimited AI Generations',
      '4K Ultra HD Resolution',
      'Advanced Brand Kit Integration',
      'Commercial License',
      'Priority 24/7 Support',
      'Team Collaboration (up to 5)'
    ],
    cta: 'Get Pro Access'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Scalable solutions for large organizations.',
    icon: Shield,
    highlight: false,
    features: [
      'Custom Model Training',
      'API Access',
      'Dedicated Account Manager',
      'SSO & Advanced Security',
      'Unlimited Team Members',
      'Custom SLAs'
    ],
    cta: 'Contact Sales'
  }
];
