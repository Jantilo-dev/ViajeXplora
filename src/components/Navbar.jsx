/**
 * Navbar.jsx — Barra de navegación responsiva con Bootstrap 5
 *
 * Props:
 *   onOpenModal — Función callback que se ejecuta al hacer clic en "Agendar Cita".
 *                 En App.jsx está definida como () => setShowModal(true)
 *
 * Estado local:
 *   menuOpen — Booleano que controla la visibilidad del menú colapsable
 *              en dispositivos móviles (menú hamburguesa)
 *
 * Estructura:
 *   - Logo/marca "DentaSmile" con un SVG de diente como icono
 *   - Botón hamburguesa (navbar-toggler) visible solo en móvil (< 992px)
 *   - Menú colapsable con enlaces a secciones: Inicio, Tratamientos, Equipo, Contacto
 *   - Botón "Agendar Cita" que abre el modal (llama a onOpenModal)
 *
 * La clase collapse se combina con la clase 'show' condicional para controlar
 * la visibilidad del menú sin depender del JavaScript de Bootstrap.
 */
import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ onOpenModal }) {
  // menuOpen: alterna entre menú visible/oculto en mobile
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // sticky-top: la navbar permanece fija en la parte superior al hacer scroll
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        {/*
          Marca / logo de la clínica.
          Incluye un SVG inline de un diente (icono circular con dos círculos internos).
          href="#hero" redirige al inicio de la página.
        */}
        <a className="navbar-brand fw-bold" href="#hero">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="me-2" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
            <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          DentaSmile
        </a>

        {/*
          Botón hamburguesa: visible solo en pantallas < 992px (navbar-expand-lg).
          Al hacer clic, invierte el estado menuOpen para mostrar/ocultar el menú.
          aria-controls, aria-expanded y aria-label son atributos de accesibilidad.
        */}
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

        {/*
          Menú colapsable: la clase 'show' se agrega condicionalmente cuando
          menuOpen es true, haciendo visible el menú en mobile.
          ms-auto: margen izquierdo automático para alinear los items a la derecha.
        */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#tratamientos">Tratamientos</a></li>
            <li className="nav-item"><a className="nav-link" href="#equipo">Equipo</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>

          {/*
            Botón principal "Agendar Cita" con estilo claro (btn-light).
            Al hacer clic ejecuta onOpenModal que abre el modal de citas.
            En mobile tiene mt-2 para separación vertical; en desktop ms-lg-3.
          */}
          <button className="btn btn-light ms-lg-3 mt-2 mt-lg-0" onClick={onOpenModal}>
            Agendar Cita
          </button>
        </div>
      </div>
    </nav>
  )
}
