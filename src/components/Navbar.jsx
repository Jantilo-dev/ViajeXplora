import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ searchTerm, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="me-2" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          ViajeXplora
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#destinos">Destinos</a></li>
            <li className="nav-item"><a className="nav-link" href="#cta">Contacto</a></li>
          </ul>
          {/* Buscador de destinos */}
          <input
            type="text"
            className="form-control ms-lg-3 buscar-nav"
            placeholder="Buscar destino..."
            value={searchTerm}
            onChange={e => onSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  )
}
