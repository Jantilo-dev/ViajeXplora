/**
 * Team.jsx — Sección del equipo profesional
 *
 * Datos:
 *   equipo — Array estático con información de 4 profesionales:
 *            id, nombre, especialidad y color (para el SVG de persona)
 *
 * Componente interno:
 *   PersonSVG — Función que renderiza un SVG inline de una silueta de persona
 *               con color personalizable según el miembro del equipo
 *
 * Estructura visual:
 *   - Grid de 4 tarjetas: 4 columnas en md, 2 en sm, 1 en móvil
 *   - Cada tarjeta contiene: SVG de persona, nombre y especialidad
 */
import './Team.css'

// Datos del equipo profesional de la clínica
const equipo = [
  { id: 1, nombre: 'Dra. María García',    especialidad: 'Odontóloga General', color: '#0d6efd' },   /* Azul */
  { id: 2, nombre: 'Dr. Carlos López',     especialidad: 'Ortodoncista',       color: '#198754' },   /* Verde */
  { id: 3, nombre: 'Dra. Ana Martínez',    especialidad: 'Endodoncista',       color: '#dc3545' },   /* Rojo */
  { id: 4, nombre: 'Dr. Pedro Sánchez',    especialidad: 'Implantólogo',       color: '#6f42c1' },   /* Púrpura */
]

/**
 * PersonSVG — Renderiza un SVG de silueta de persona
 *
 * Props:
 *   color — String con el color hexadecimal para rellenar la silueta
 *           (cada miembro del equipo tiene un color distintivo)
 *
 * El SVG usa el path de una cabeza (path superior) y torso (path inferior)
 * para formar una figura humana simple.
 */
function PersonSVG({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill={color} viewBox="0 0 16 16">
      {/* Círculo que representa la cabeza */}
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      {/* Forma que representa el torso/hombros */}
      <path d="M8 9c-3.5 0-6 2.5-6 6h12c0-3.5-2.5-6-6-6z" />
    </svg>
  )
}

export default function Team() {
  return (
    <section id="equipo" className="py-5">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Nuestro Equipo</h2>
        <p className="text-center text-secondary mb-4">
          Profesionales altamente calificados para cuidar tu salud dental
        </p>

        {/*
          Grid de miembros del equipo.
          justify-content-center: centra las tarjetas cuando hay menos de 4 en una fila.
          g-4: espaciado entre tarjetas.
        */}
        <div className="row g-4 justify-content-center">
          {equipo.map(m => (
            // md: 4 por fila | sm: 2 por fila | xs: 1 por fila
            <div className="col-6 col-md-3" key={m.id}>
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  {/* SVG de persona con color distintivo del miembro */}
                  <PersonSVG color={m.color} />
                  <h6 className="card-title mt-3 fw-bold">{m.nombre}</h6>
                  <small className="text-secondary">{m.especialidad}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
