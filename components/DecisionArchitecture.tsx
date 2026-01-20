'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GitBranch, TrendingUp, AlertTriangle } from 'lucide-react'

const DecisionArchitecture = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const decisions = [
    {
      question: 'Validation Result?',
      branches: [
        { condition: '3:1 ratio holds (±20%)', action: 'Proceed to OEM commercialization', color: 'text-bio-green', icon: TrendingUp },
        { condition: '>20% variance', action: 'Pivot to diagnostic-only positioning', color: 'text-warm-amber', icon: AlertTriangle },
      ],
    },
    {
      question: 'OEM Interest by Q3?',
      branches: [
        { condition: '2+ LOIs signed', action: 'Accelerate licensing deals', color: 'text-electric-teal', icon: TrendingUp },
        { condition: 'Zero interest', action: 'Fast-track direct clinical sales', color: 'text-purple-500', icon: GitBranch },
      ],
    },
    {
      question: 'Beta-blocker subgroup response?',
      branches: [
        { condition: 'Enhanced (>4:1 ratio)', action: 'Prioritize cardiac rehab market', color: 'text-bio-green', icon: TrendingUp },
        { condition: 'Standard (3:1 ratio)', action: 'Maintain diversified approach', color: 'text-gray-400', icon: GitBranch },
      ],
    },
  ]

  return (
    <section id="decisions" className="relative py-20 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Built-In Resilience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            If/Then decision architecture with strategic pivot capability
          </p>
        </motion.div>

        <div className="space-y-12">
          {decisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full border border-electric-teal">
                  <GitBranch className="text-electric-teal" size={24} />
                  <h3 className="text-2xl font-bold text-white">{decision.question}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {decision.branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-6 border-l-4 border-current hover:scale-105 transition-transform duration-300"
                    style={{ borderColor: branch.color.replace('text-', '') }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${branch.color.replace('text-', 'bg-')} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                        <branch.icon className={branch.color} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                          {idx === 0 ? 'If' : 'Else'}
                        </div>
                        <div className={`font-semibold mb-3 ${branch.color}`}>
                          {branch.condition}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">→</span>
                          <span className="text-gray-300">{branch.action}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Principle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 glass-card rounded-2xl p-8 border-l-4 border-electric-teal"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">Strategic Principle: Optionality Over Commitment</h3>
          <p className="text-gray-300 leading-relaxed">
            We preserve strategic flexibility through IP architecture supporting multiple pathways, validation studies designed to inform (not just confirm) strategy, 
            partnership structures with defined exit provisions, and capital allocation with explicit reserves for pivot opportunities. 
            This is not indecision—it is <span className="text-electric-teal font-semibold">disciplined exploration</span> in a novel space.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DecisionArchitecture
