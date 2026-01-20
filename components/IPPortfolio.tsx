'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Shield, Brain, Cpu, Layers, ChevronDown, ChevronUp } from 'lucide-react'

const IPPortfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [expandedTier, setExpandedTier] = useState<number | null>(null)

  const tiers = [
    {
      tier: 1,
      label: 'Foundational',
      focus: 'Core mechanism claims',
      function: '"Tollbooth" on the entire category',
      patents: ['PR-PROV-001: Cardiac-Sparing Metabolic Conditioning ($25-60M)', 'PR-PROV-002: Glycolytic Shunt Glucose Disposal', 'PR-PROV-004: Ventilatory Efficiency Protocol'],
      count: 5,
      valueRange: '$60-100M',
      icon: Shield,
      color: 'from-electric-teal to-blue-500',
      borderColor: 'border-electric-teal',
    },
    {
      tier: 2,
      label: 'Diagnostic',
      focus: 'Assessment methodologies',
      function: 'Recurring value beyond hardware',
      patents: ['PR-PROV-007: Hemispheric Metabolic Index', 'PR-PROV-008: Neuro-Metabolic Efficiency Score', 'PR-PROV-009: Neural Recovery Velocity Index', 'PR-PROV-010: Perturbation Tolerance Threshold'],
      count: 8,
      valueRange: '$40-80M',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500',
    },
    {
      tier: 3,
      label: 'Algorithmic',
      focus: 'AI/adaptive control',
      function: 'Prevents software design-arounds',
      patents: ['PR-PROV-013: Adaptive Chaos AI Algorithm', 'PR-PROV-015: Sleep-Modulated Safety Clamping', 'PR-PROV-016: Wearable Closed-Loop Control'],
      count: 6,
      valueRange: '$30-60M',
      icon: Cpu,
      color: 'from-warm-amber to-orange-500',
      borderColor: 'border-warm-amber',
    },
    {
      tier: 4,
      label: 'Application',
      focus: 'Population-specific protocols',
      function: 'Extends into adjacent markets',
      patents: ['PR-PROV-017: Centenarian Protocol System', 'PR-PROV-018: Virtual Hypoxia Simulation'],
      count: 5,
      valueRange: '$20-40M',
      icon: Layers,
      color: 'from-bio-green to-teal-500',
      borderColor: 'border-bio-green',
    },
  ]

  return (
    <section id="ip" className="relative py-20 md:py-32 bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">30+ Patents.</span>
            <br />
            <span className="text-white">One Platform.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tiered IP architecture creating layered defense and multiple value streams
          </p>
        </motion.div>

        {/* Portfolio Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 mb-12 text-center border-2 border-electric-teal"
        >
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Total Portfolio Valuation</div>
          <div className="text-6xl md:text-7xl font-bold gradient-text mb-4 font-mono">
            $650M+
          </div>
          <div className="text-gray-400">Based on 30+ patent tiered architecture</div>
        </motion.div>

        {/* Tier Cards */}
        <div className="space-y-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden border-l-4 ${tier.borderColor}`}
            >
              <div
                className="p-6 cursor-pointer hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
                onClick={() => setExpandedTier(expandedTier === tier.tier ? null : tier.tier)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <tier.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Tier {tier.tier}</span>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                          {tier.label}
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm">{tier.focus}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right hidden md:block">
                      <div className="text-sm text-gray-500">Patents</div>
                      <div className="text-2xl font-bold text-white font-mono">{tier.count}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Value Range</div>
                      <div className="text-xl font-bold text-electric-teal font-mono">{tier.valueRange}</div>
                    </div>
                    <div className="text-gray-400">
                      {expandedTier === tier.tier ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                </div>
              </div>

              {expandedTier === tier.tier && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 border-t border-gray-700"
                >
                  <div className="pt-6">
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">Strategic Function:</span>
                      <p className="text-gray-300 mt-1">{tier.function}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">Key Patents:</span>
                      <ul className="mt-2 space-y-2">
                        {tier.patents.map((patent, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-electric-teal mr-2">•</span>
                            <span>{patent}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 glass-card rounded-2xl p-8 border-l-4 border-warm-amber"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-warm-amber to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-warm-amber mb-2">Foundational Patent Highlight</h3>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold">PR-PROV-001: Cardiac-Sparing Metabolic Conditioning</span> alone is valued at{' '}
                <span className="text-warm-amber font-bold">$25-60M</span>—representing{' '}
                <span className="gradient-text font-bold">35-80x return</span> on total IP investment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IPPortfolio
