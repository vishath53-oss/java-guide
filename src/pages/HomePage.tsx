import { motion, type Variants } from 'framer-motion'
import { usePageTitle } from '@/hooks/usePageTitle'
import {
  HeroSection,
  PlatformStats,
  CoreFeatures,
  RoadmapPreview,
  DifficultySection,
  HowItWorks,
  CtaSection,
} from '@/components/landing'

// Subtle animation container variant
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}



export default function HomePage() {
  usePageTitle('Master Java. One Problem at a Time.')

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--fg-primary)] overflow-x-hidden">
      {/* 1. Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      {/* 2. Platform Statistics */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <PlatformStats />
      </motion.div>

      {/* 3. Core Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <CoreFeatures />
      </motion.div>

      {/* 4. Six-Month Learning Roadmap Preview */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <RoadmapPreview />
      </motion.div>

      {/* 5. Coding Difficulty Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <DifficultySection />
      </motion.div>

      {/* 6. How It Works Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <HowItWorks />
      </motion.div>

      {/* 7. Final Call to Action Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <CtaSection />
      </motion.div>
    </div>
  )
}
