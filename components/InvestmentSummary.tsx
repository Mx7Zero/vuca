'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Shield, TrendingUp } from 'lucide-react'

const InvestmentSummary = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="investment" className="relative py-20 md:py-32 bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">The Opportunity</span>
          </h2>
        </motion.div>

        {/* Three Metric Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 text-center border-2 border-electric-teal hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-electric-teal to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <DollarSign size={32} className="text-white" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Funding Ask</div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-mono">
              $695K - $735K
            </div>
            <div className="text-gray-400">Over 24 months</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 text-center border-2 border-purple-500 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Shield size={32} className="text-white" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Portfolio Value</div>
            <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2 font-mono">
              $650M+
            </div>
            <div className="text-gray-400">30+ patents</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-2xl p-8 text-center border-2 border-bio-green hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-bio-green to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Path to Revenue</div>
            <div className="text-4xl md:text-5xl font-bold text-bio-green mb-2 font-mono">
              $10M ARR
            </div>
            <div className="text-gray-400">2 OEM deals in 12 months</div>
          </motion.div>
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12 border-l-4 border-warm-amber"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-20 h-20 bg-gradient-to-br from-warm-amber to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">💎</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-warm-amber mb-3">Exceptional ROI Potential</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Foundational patent <span className="font-semibold text-white">PR-PROV-001</span> alone is valued at{' '}
                <span className="text-warm-amber font-bold">$25-60M</span>—representing a{' '}
                <span className="text-4xl font-bold gradient-text">35-80x</span> return on total IP investment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Investment Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Capital Allocation</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-teal mb-2 font-mono">40%</div>
              <div className="text-sm text-gray-400">IP Prosecution & Legal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2 font-mono">30%</div>
              <div className="text-sm text-gray-400">Clinical Validation Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-amber mb-2 font-mono">20%</div>
              <div className="text-sm text-gray-400">OEM Partnership Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bio-green mb-2 font-mono">10%</div>
              <div className="text-sm text-gray-400">Pivot Reserve / Contingency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentSummary
