import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingTiers } from '../config/pricing';

export function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Choose the plan that fits your creative needs. No hidden fees.
        </motion.p>
      </div>

      <div className="pricing-grid">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={tier.id} tier={tier} index={index} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ tier, index }) {
  const Icon = tier.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`pricing-card ${tier.highlight ? 'highlighted' : ''}`}
    >
      {tier.popular && (
        <div className="popular-badge">Most Popular</div>
      )}
      
      <div className="card-header">
        <div className="icon-wrapper">
          <Icon size={24} />
        </div>
        <h3>{tier.name}</h3>
        <p className="description">{tier.description}</p>
      </div>

      <div className="price-container">
        <span className="price">{tier.price}</span>
        <span className="period">{tier.period}</span>
      </div>

      <ul className="features-list">
        {tier.features.map((feature, i) => (
          <li key={i}>
            <Check size={16} className="check-icon" />
            {feature}
          </li>
        ))}
      </ul>

      <button className={`pricing-btn ${tier.highlight ? 'primary' : 'secondary'}`}>
        {tier.cta}
      </button>
    </motion.div>
  );
}
