'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Trophy, Building2, Shield, Cog } from 'lucide-react'

const MarketPositioning = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedMarket, setSelectedMarket] = useState<number | null>(null)

  const markets = [
    {
      icon: Heart,
      emoji: '🏥',
      market: 'Longevity Clinics',
      positioning: 'VO₂ Max Amplifier',
      message: 'Elite metabolic stimulus in any body',
      tam: '$314B by 2030',
      growth: '25.2% CAGR',
      color: 'from-electric-teal to-blue-500',
      details: 'Premium positioning for biohacker and longevity-focused facilities. Validated biomarker improvements drive adoption.',
    },
    {
      icon: Heart,
      emoji: '❤️',
      market: 'Cardiac Rehab',
      positioning: 'Safe Metabolic Conditioning',
      message: 'Jogging calories at walking heart rates',
      tam: '$5B',
      growth: '8% CAGR',
      color: 'from-purple-500 to-pink-500',
      details: '27M Americans on beta-blockers need safe exercise alternatives. Our 3:1 ratio enables effective rehab without cardiac stress.',
    },
    {
      icon: Trophy,
      emoji: '🏆',
      market: 'Elite Sports',
      positioning: 'The Chaos Advantage',
      message: 'Train the nervous system, not just muscles',
      tam: '$12B',
      growth: '10% CAGR',
      color: 'from-warm-amber to-orange-500',
      details: 'Reactive proprioception training improves agility, balance, and injury prevention for professional athletes.',
    },
    {
      icon: Shield,
      emoji: '🎖️',
      market: 'Military/Tactical',
      positioning: 'Resilience Under Chaos',
      message: 'Operate effectively in unpredictable conditions',
      tam: '$8B',
      growth: '6% CAGR',
      color: 'from-bio-green to-teal-500',
      details: 'Build operational readiness through stochastic training that mirrors real-world tactical environments.',
    },
    {
      icon: Building2,
      emoji: '🧘',
      market: 'Stability & Balance',
      positioning: 'Reactive Proprioception',
      message: 'Walk again after surgery, prevent falls, extend independence',
      tam: '$95B',
      growth: '12% CAGR',
      color: 'from-purple-500 to-indigo-500',
      details: 'Aging population, post-surgical PT/rehab, fall prevention ($50-80B annually). Stochastic training rebuilds neural pathways for balance and coordination.',
    },
    {
      icon: Cog,
      emoji: '🏭',
      market: 'OEM Partners',
      positioning: 'The Metabolic Platform',
      message: 'License the only validated mechanism',
      tam: '$180B fitness equipment',
      growth: 'Platform play',
      color: 'from-gray-400 to-gray-600',
      details: 'Licensing the core IP to equipment manufacturers creates recurring revenue without manufacturing overhead.',
    },
  ]

  return (
    <section id="market" className="relative py-20 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">One Platform.</span>
            <br />
            <span className="text-white">Six Markets.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multi-frame positioning with strategic optionality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedMarket(selectedMarket === index ? null : index)}
              className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                selectedMarket === index ? 'ring-2 ring-electric-teal scale-105' : 'hover:scale-102'
              } ${index === markets.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{market.emoji}</div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${market.color} flex items-center justify-center`}>
                  <market.icon size={24} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{market.market}</h3>
              <div className={`text-lg font-semibold bg-gradient-to-r ${market.color} bg-clip-text text-transparent mb-3`}>
                &ldquo;{market.positioning}&rdquo;
              </div>
              <p className="text-gray-400 text-sm mb-4">{market.message}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div>
                  <div className="text-xs text-gray-500">TAM</div>
                  <div className="text-lg font-bold text-electric-teal">{market.tam}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Growth</div>
                  <div className="text-sm font-semibold text-bio-green">{market.growth}</div>
                </div>
              </div>

              {selectedMarket === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-700"
                >
                  <p className="text-sm text-gray-300 leading-relaxed">{market.details}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Total Addressable Market */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 glass-card rounded-2xl p-8 text-center"
        >
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Combined Total Addressable Market</div>
          <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 font-mono">
            $614B+
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Platform play across multiple high-growth markets with strategic sequencing: OEM licensing first, direct clinical second, consumer and FDA pathways last.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketPositioning
