import * as React from "react"
import type { HeadFC } from "gatsby"
import HeroSection from "../components/sections/hero"
import AboutSection from "../components/sections/about"
import SkillsSection from "../components/sections/skills"
import ExperienceSection from "../components/sections/experience"
import "../styles/sections.css"

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>