'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function HomePage() {
  const [titleText, setTitleText] = useState('')
  const [subtitleText, setSubtitleText] = useState('')
  
  const fullTitle = "Katjri's home"
  const fullSubtitle = "Just be an individual like coding."

  useEffect(() => {
    let i = 0
    let j = 0
    
    const typeTitle = setInterval(() => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.substring(0, i + 1))
        i++
      } else {
        clearInterval(typeTitle)
        const typeSubtitle = setInterval(() => {
          if (j < fullSubtitle.length) {
            setSubtitleText(fullSubtitle.substring(0, j + 1))
            j++
          } else {
            clearInterval(typeSubtitle)
          }
        }, 40)
      }
    }, 60)

    return () => clearInterval(typeTitle)
  }, [])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll')
    
    function revealOnScroll() {
      for (const el of reveals) {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible')
        }
      }
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Run once on load

    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <>
      <Header active="home" />

      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="./assets/Mahiru_live_smaller.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-text advanced-text">
            <h2 id="hero-title">{titleText}</h2>
            <p id="hero-subtitle">{subtitleText}</p>
          </div>
        </div>
      </section>

      <section className="about container reveal-on-scroll" id="about">
        <h3>About Me</h3>
        <div className="about-flex">
          <video className="about-video" autoPlay muted loop playsInline>
            <source src="./assets/Image_Animation.mp4" type="video/mp4" />
          </video>
          <div>
            <p>
              Hi, I&apos;m Katjri. 
              I&apos;m driven by a deep curiosity to understand the &quot;rules&quot; of how things work, whether it&apos;s unpacking an application or deconstructing hardware. This passion for discovery is what I love most, and it fuels my technical focus on malware analysis, reverse engineering, and digital forensics. I thrive on gaining new knowledge and experience in these challenging fields.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects container reveal-on-scroll">
        <h3>Portfolio</h3>
        <div className="project-grid">
          <div className="card">
            <h4>Web App</h4>
            <p>Elegant UI for daily planners with a calm theme.</p>
          </div>
          <div className="card">
            <h4>Fan Blog</h4>
            <p>A fan-centered anime blog, styled in Shiina Mahiru aesthetic.</p>
          </div>
        </div>
      </section>

      <section className="cta reveal-on-scroll">
        <div className="container">
          <h3>Let&apos;s build something together ✨</h3>
          <p>Contact me below or read my <Link href="/blog">latest blogs</Link>.</p>
        </div>
      </section>

      <footer id="contact" className="site-footer reveal-on-scroll">
        <div className="container">
          <p>📧 kajri@gmail.com | 🐦 Twitter | 💼 LinkedIn</p>
        </div>
      </footer>
    </>
  )
}
