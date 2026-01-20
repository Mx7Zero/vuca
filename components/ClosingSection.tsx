'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Calendar, Database } from 'lucide-react'

const ClosingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const actions = [
    { icon: FileText, label: 'View Full Strategy Document', color: 'from-electric-teal to-blue-500' },
    { icon: Calendar, label: 'Schedule Deep Dive', color: 'from-purple-500 to-pink-500' },
    { icon: Database, label: 'Access Data Room', color: 'from-warm-amber to-orange-500' },
  ]

  return (
    <section id="closing" className="relative py-20 md:py-32 bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16 border-l-4 border-electric-teal"
        >
          <blockquote className="text-2xl md:text-4xl text-gray-300 italic leading-relaxed text-center mb-6">
            "In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists."
          </blockquote>
          <div className="text-right text-gray-500 text-xl">— Eric Hoffer</div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We are not building a product.
            <br />
            We are establishing a{' '}
            <span className="gradient-text text-glow">physiological property</span>
            <br />
            that becomes the foundation of an entirely new category
            <br />
            of human performance optimization.
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {actions.map((action, index) => (
            <button
              key={index}
              className={`glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-electric-teal group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <action.icon size={32} className="text-white" />
              </div>
              <div className="text-lg font-semibold text-white group-hover:text-electric-teal transition-colors duration-300">
                {action.label}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-teal to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PR</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Prime Reaction</span>
          </div>
          <p className="text-gray-500">
            VUCA Prime Strategic Framework v1.1 | January 2026
            <br />
            For internal strategic planning only
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ClosingSection
