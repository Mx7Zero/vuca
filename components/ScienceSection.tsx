'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Heart, Zap } from 'lucide-react'

const ScienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const systems = [
    {
      name: 'Cardiovascular',
      icon: Heart,
      change: 'Minimal Increase',
      percentage: '+8.5%',
      color: 'text-bio-green',
      bgColor: 'from-bio-green to-teal-500',
    },
    {
      name: 'Neuromuscular',
      icon: Zap,
      change: 'High Activation',
      percentage: '+74%',
      color: 'text-warm-amber',
      bgColor: 'from-warm-amber to-orange-500',
    },
    {
      name: 'Metabolic Output',
      icon: Activity,
      change: 'Significant Increase',
      percentage: '+26.9%',
      color: 'text-electric-teal',
      bgColor: 'from-electric-teal to-blue-500',
    },
  ]

  return (
    <section id="science" className="relative py-20 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Metabolic Arbitrage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Extracting more physiological value from less systemic cost
          </p>
        </motion.div>

        {/* Key Insight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16 border-l-4 border-electric-teal"
        >
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed">
            &ldquo;Stochastic perturbation creates metabolic demand through{' '}
            <span className="gradient-text font-semibold not-italic">neuromuscular recruitment</span>
            {' '}rather than{' '}
            <span className="text-gray-500 font-semibold not-italic">cardiovascular escalation</span>.&rdquo;
          </blockquote>
        </motion.div>

        {/* Systems Visualization */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${system.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <system.icon size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{system.name}</h3>
              <p className="text-gray-400 mb-4">{system.change}</p>
              <div className={`text-5xl font-bold ${system.color} font-mono`}>
                {system.percentage}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pilot Data Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Pilot Data Validation</h3>
          
          <div className="space-y-6">
            {/* Walking Control */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <div className="sm:w-48 text-gray-400 font-semibold text-sm sm:text-base">Walking (Control)</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 w-full h-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold">
                      Baseline
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Walking + Perturbation */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <div className="sm:w-48 text-electric-teal font-semibold text-sm sm:text-base">+ Perturbation</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-teal to-purple-500 w-full h-full animate-pulse-slow"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold">
                      VO₂ +26.9% · HR +8.5%
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text font-mono">3:1</div>
                </div>
              </div>
            </div>

            {/* Walking + PBFR */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <div className="sm:w-48 text-warm-amber font-semibold text-sm sm:text-base">+ PBFR</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-amber to-orange-500 w-full h-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold">
                      VO₂ +73% (Additional Study)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 space-y-4">
            <p className="text-gray-400 text-center">
              <span className="font-semibold text-white">Key Finding:</span> Metabolic demand increases dramatically while cardiac stress remains minimal—a phenomenon with no precedent in 75 years of exercise physiology
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-lg font-bold text-bio-green mb-2">🧠 Cognitive Enhancement</div>
                <p className="text-sm text-gray-400">Reactive proprioception training activates neural pathways, improving focus, reaction time, and cognitive function through chaos adaptation</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-lg font-bold text-warm-amber mb-2">🔥 Metabolic Weight Loss</div>
                <p className="text-sm text-gray-400">73% increase in metabolic output burns jogging-level calories at walking heart rates—safe, sustainable fat loss without cardiac stress</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScienceSection
