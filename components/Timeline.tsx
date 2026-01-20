'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const phases = [
    {
      phase: 1,
      name: 'Establish Foundation',
      period: '0-90 Days',
      milestones: [
        { label: 'File foundational IP claims', day: 30, status: 'pending' },
        { label: 'Launch validation studies', day: 45, status: 'pending' },
        { label: 'Define category terminology', day: 60, status: 'pending' },
      ],
      gate: '3:1 ratio confirmed ±20%',
      color: 'from-electric-teal to-blue-500',
    },
    {
      phase: 2,
      name: 'Validate & Extend',
      period: '90-180 Days',
      milestones: [
        { label: 'Complete N=30 cardiac study', day: 150, status: 'pending' },
        { label: 'File Tier 2-3 provisionals', day: 120, status: 'pending' },
        { label: 'First OEM LOI', day: 180, status: 'pending' },
      ],
      gate: 'Commercial interest confirmed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      phase: 3,
      name: 'Commercialize',
      period: '180-365 Days',
      milestones: [
        { label: 'OEM licensing agreement ($2-5M)', day: 270, status: 'pending' },
        { label: '10-20 clinical facility sales', day: 300, status: 'pending' },
        { label: 'Convert provisionals', day: 365, status: 'pending' },
      ],
      gate: '$1M+ contracted revenue',
      color: 'from-warm-amber to-orange-500',
    },
    {
      phase: 4,
      name: 'Platform Dominance',
      period: '12-24 Months',
      milestones: [
        { label: '5+ OEM deals', day: 540, status: 'pending' },
        { label: 'FDA clearance decision', day: 720, status: 'pending' },
        { label: 'Series A preparation', day: 720, status: 'pending' },
      ],
      gate: '$10M ARR',
      color: 'from-bio-green to-teal-500',
    },
  ]

  return (
    <section id="timeline" className="relative py-20 md:py-32 bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">The Forward Path</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic roadmap with decision gates and pivot capability
          </p>
        </motion.div>

        {/* Timeline Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-2xl font-bold`}>
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                        {phase.name}
                      </h3>
                      <p className="text-gray-400">{phase.period}</p>
                    </div>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-lg border border-electric-teal">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Decision Gate</div>
                    <div className="text-sm font-semibold text-electric-teal">{phase.gate}</div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-3">
                  {phase.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition-colors duration-200">
                      <Circle className="text-gray-500 mt-1 flex-shrink-0 group-hover:text-electric-teal transition-colors duration-200" size={20} />
                      <div className="flex-1">
                        <div className="text-gray-300 font-medium">{milestone.label}</div>
                        <div className="text-sm text-gray-500">Day {milestone.day}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-electric-teal to-purple-500"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">24-Month Success Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-electric-teal mb-2 font-mono">$10M+</div>
              <div className="text-sm text-gray-400">Annual Recurring Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2 font-mono">$100M+</div>
              <div className="text-sm text-gray-400">IP Portfolio Valuation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-amber mb-2 font-mono">5+</div>
              <div className="text-sm text-gray-400">OEM Licensing Deals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bio-green mb-2 font-mono">3+</div>
              <div className="text-sm text-gray-400">Peer-Reviewed Publications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
