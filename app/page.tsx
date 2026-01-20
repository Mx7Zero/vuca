'use client'

import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import VUCAFramework from '@/components/VUCAFramework'
import ScienceSection from '@/components/ScienceSection'
import IPPortfolio from '@/components/IPPortfolio'
import MarketPositioning from '@/components/MarketPositioning'
import Timeline from '@/components/Timeline'
import DecisionArchitecture from '@/components/DecisionArchitecture'
import InvestmentSummary from '@/components/InvestmentSummary'
import ClosingSection from '@/components/ClosingSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-navy">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <VUCAFramework />
      <ScienceSection />
      <IPPortfolio />
      <MarketPositioning />
      <Timeline />
      <DecisionArchitecture />
      <InvestmentSummary />
      <ClosingSection />
    </main>
  )
}
