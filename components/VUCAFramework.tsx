'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Zap, Brain, Target, Shuffle } from 'lucide-react'

const VUCAFramework = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedQuadrant, setSelectedQuadrant] = useState<number | null>(null)

  const quadrants = [
    {
      challenge: 'Volatility',
      response: 'Vision',
      outcome: 'Category definition and platform positioning',
      icon: Zap,
      color: 'from-electric-teal to-blue-500',
      description: 'The longevity economy generated $65B in 2023, projected to reach $314B by 2030. We establish category leadership before competitors recognize the opportunity.',
    },
    {
      challenge: 'Uncertainty',
      response: 'Understanding',
      outcome: 'Bounded unknowns through systematic validation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'N=30 cardiac population study validates the 3:1 ratio across populations. Strategic optionality preserved through IP architecture.',
    },
    {
      challenge: 'Complexity',
      response: 'Clarity',
      outcome: 'Three-pillar strategy: Physiology, Protection, Pathway',
      icon: Target,
      color: 'from-warm-amber to-orange-500',
      description: 'Simplify interdependencies into three strategic pillars: the science, the IP, and the commercialization pathway.',
    },
    {
      challenge: 'Ambiguity',
      response: 'Agility',
      outcome: 'Multi-frame positioning with pivot capability',
      icon: Shuffle,
      color: 'from-bio-green to-teal-500',
      description: 'Design for strategic pivots rather than locked-in commitments. Test multiple market positions simultaneously.',
    },
  ]

  return (
    <section id="vuca" className="relative py-20 md:py-32 bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">VUCA → </span>
            <span className="gradient-text">PRIME</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming strategic challenges into competitive advantages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedQuadrant(selectedQuadrant === index ? null : index)}
              className={`glass-card rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                selectedQuadrant === index ? 'ring-2 ring-electric-teal scale-105' : 'hover:scale-102'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${quadrant.color} flex items-center justify-center`}>
                  <quadrant.icon size={28} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Challenge</div>
                  <div className="text-2xl font-bold text-gray-400">{quadrant.challenge}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-electric-teal to-transparent"></div>
                  <span className="mx-3 text-electric-teal">→</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-electric-teal via-electric-teal to-transparent"></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Response</div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${quadrant.color} bg-clip-text text-transparent`}>
                  {quadrant.response}
                </div>
              </div>

              <div className="text-gray-300 mb-4">
                {quadrant.outcome}
              </div>

              {selectedQuadrant === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-4 border-t border-gray-700"
                >
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {quadrant.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Transformation Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-3xl font-bold text-gray-500">
              V · U · C · A
            </div>
            <div className="text-4xl text-electric-teal">→</div>
            <div className="text-4xl font-bold gradient-text">
              P · R · I · M · E
            </div>
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            VO2 ProMax Framework: Strategic agility in discovery-stage science with platform-stage commercial readiness
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VUCAFramework
