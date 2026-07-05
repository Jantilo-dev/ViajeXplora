/**
 * App.jsx — Componente raíz de la aplicación DentaSmile
 *
 * Estado global:
 *   showModal — Booleano que controla la visibilidad del modal de agendar cita
 *               (se pasa como prop a Navbar, Hero, Treatments y AppointmentModal)
 *
 * Estructura:
 *   <Navbar />        — Barra de navegación fija en la parte superior
 *   <main>            — Contenedor semántico con las secciones principales
 *     <Hero />        — Sección de bienvenida con CTA
 *     <Treatments />  — Tarjetas de tratamientos dentales
 *     <Team />        — Tarjetas del equipo profesional
 *     <Contact />     — Formulario de contacto con validación
 *   <Footer />        — Pie de página con info de contacto
 *   <AppointmentModal /> — Modal para agendar citas (se muestra condicionalmente)
 */
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import './App.css'

export default function App() {
  // showModal: controla si el modal de agendar cita está visible o no
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Navbar recibe onOpenModal para que su botón "Agendar Cita" abra el modal */}
      <Navbar onOpenModal={() => setShowModal(true)} />
      <main>
        {/* Hero y Treatments también tienen botones que abren el modal */}
        <Hero onOpenModal={() => setShowModal(true)} />
        <Treatments onOpenModal={() => setShowModal(true)} />
        <Team />
        <Contact />
      </main>
      <Footer />
      {/*
        AppointmentModal se muestra/oculta según showModal.
        onClose cambia showModal a false para cerrar el modal.
      */}
      <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
