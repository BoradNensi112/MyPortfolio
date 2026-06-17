import React from 'react'
import { ThemeToggel } from '../components/ThemeToggel'
import { StartBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectSection } from '../components/ProjectSection'
import { ContectSection } from '../components/ContantSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

      {/* Theme Toggel */}

      <ThemeToggel />

      {/* Background Effect */}


      <StartBackground />

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main>
        <HeroSection />
        <AboutSection  />
        <SkillsSection/>
        <ProjectSection/>
        <ContectSection/>
      </main>

      {/* Footer */}

    </div>
  )
}

export default Home