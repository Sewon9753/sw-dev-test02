import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Profile', href: '#profile' },
  { label: 'Career', href: '#career' },
  { label: 'Experience', href: '#experience' },
  { label: 'Competencies', href: '#competencies' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Global', href: '#global' },
  { label: 'Media', href: '#media' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-serif text-xl font-bold text-white tracking-widest group-hover:text-[#C9A96E] transition-colors duration-300">
            HOFN
          </span>
          <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
            Pienhance
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-[#C9A96E] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-6 py-3 text-sm tracking-widest uppercase text-white/50 hover:text-[#C9A96E] hover:bg-white/5 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
