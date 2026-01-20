'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Heart, Activity } from 'lucide-react'

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  )
}

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-teal rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text text-glow">The 3:1</span>
            <br />
            <span className="text-white">Leverage Ratio</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What if you could burn jogging calories at walking heart rates?
          </motion.p>

          {/* Comparison Visualization */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Traditional Exercise */}
            <motion.div
              className="glass-card rounded-2xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-400">Traditional Exercise</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="text-gray-400" size={24} />
                    <span className="text-gray-300">VO₂ Increase</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-400">+27%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="text-red-400" size={24} />
                    <span className="text-gray-300">HR Increase</span>
                  </div>
                  <span className="text-3xl font-bold text-red-400">+27%</span>
                </div>
                <div className="pt-4 border-t border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Ratio</span>
                    <span className="text-2xl font-mono text-gray-400">1:1</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* VO2 ProMax */}
            <motion.div
              className="glass-card rounded-2xl p-8 border-2 border-electric-teal relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="absolute top-0 right-0 bg-electric-teal text-dark-navy px-4 py-1 text-sm font-bold">
                BREAKTHROUGH
              </div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">VO2 ProMax</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="text-electric-teal" size={24} />
                    <span className="text-gray-300">VO₂ Increase</span>
                  </div>
                  <span className="text-3xl font-bold text-electric-teal">+26.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="text-bio-green" size={24} />
                    <span className="text-gray-300">HR Increase</span>
                  </div>
                  <span className="text-3xl font-bold text-bio-green">+8.5%</span>
                </div>
                <div className="pt-4 border-t border-electric-teal">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Ratio</span>
                    <span className="text-4xl font-mono gradient-text text-glow animate-pulse-slow">3:1</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Data Callouts */}
          <motion.div
            className="glass-card rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  +<AnimatedCounter value={26.9} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">VO₂ Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-bio-green mb-2">
                  +<AnimatedCounter value={8.5} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">HR Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-electric-teal mb-2">
                  <AnimatedCounter value={3} suffix=":1" />
                </div>
                <div className="text-sm text-gray-400">Leverage Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-warm-amber mb-2">
                  p&lt;<AnimatedCounter value={0.001} />
                </div>
                <div className="text-sm text-gray-400">Statistical Significance</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <span className="text-gray-400">Sample Size: </span>
              <span className="text-2xl font-mono text-white">N=19</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-electric-teal rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
