import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiPhone } from 'react-icons/fi'
import Logo from '../assets/shield-outline-badged-svgrepo-com.svg' 

const nav = [
  { label: 'Услуги', to: 'services' },
  { label: 'Процесс', to: 'process' },
  { label: 'Результаты', to: 'results' },
  { label: 'Контакты', to: 'contacts' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
  <header className={`header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container">
      <Link to="hero" smooth duration={600}>
        <img src={Logo} alt="Логотип" className="logo" />
      </Link>

        <nav>
          {nav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              activeClass="active"
              duration={600}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="contacts" smooth className="btn-primary">
          <FiPhone size={18} /> Записаться
        </Link>
      </div>
    </header>
  )
}