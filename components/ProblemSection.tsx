'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Users, Heart } from 'lucide-react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const problems = [
    {
      icon: Users,
      number: '27 Million',
      title: 'Americans',
      description: 'on beta-blockers cannot achieve training heart rates through conventional exercise',
      color: 'from-electric-teal to-blue-500',
    },
    {
      icon: DollarSign,
      number: '$50-80B',
      title: 'Annual Cost',
      description: 'of fall prevention with no dominant solution',
      color: 'from-warm-amber to-orange-500',
    },
    {
      icon: Heart,
      number: '$5 Billion',
      title: 'Market',
      description: 'cardiac rehab market using 50-year-old modalities',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="problem" className="relative py-20 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">75 Years of Assumptions.</span>
            <br />
            <span className="text-white">One Breakthrough.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon size={32} className="text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}>
                {problem.number}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-electric-teal transform -translate-y-1/2"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-sm font-bold">1950s</span>
                </div>
                <p className="text-sm text-gray-400">Exercise Physiology<br />Established</p>
              </div>

              <div className="relative z-10 text-center hidden md:block">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-sm font-bold">2000</span>
                </div>
                <p className="text-sm text-gray-400">Digital<br />Fitness Era</p>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-teal to-purple-500 rounded-full flex items-center justify-center mb-3 mx-auto animate-pulse-slow">
                  <span className="text-lg font-bold">2026</span>
                </div>
                <p className="text-sm font-bold gradient-text">VO2 ProMax<br />Breakthrough</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
