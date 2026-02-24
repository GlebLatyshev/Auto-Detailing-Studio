import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import BeforeAfter from './components/BeforeAfter'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './styles/global.scss'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <BeforeAfter />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App