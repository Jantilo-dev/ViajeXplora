import { useState } from 'react'
import './DestinationModal.css'
import Itinerary from './Itinerary'

export default function DestinationModal({ destino, onClose }) {
  const [showItinerario, setShowItinerario] = useState(false)

  if (!destino) return null

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">{destino.nombre}</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <img src={destino.img} alt={destino.nombre} className="w-100 rounded mb-3" style={{ maxHeight: 300, objectFit: 'cover' }} />

              {destino.video && (
                <div className="ratio ratio-16x9 mb-3">
                  <iframe src={`https://www.youtube.com/embed/${destino.video}`} title={destino.nombre} allowFullScreen></iframe>
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-primary fs-6">{destino.duracion}</span>
                <span className="badge bg-warning text-dark fs-6">{destino.rating} estrellas</span>
              </div>
              <p className="text-secondary small mb-3">
                Ida: <strong>{destino.fechaIda}</strong> · Vuelta: <strong>{destino.fechaVuelta}</strong>
              </p>

              <h6 className="fw-bold">Descripcion</h6>
              <p className="text-secondary">{destino.descripcion}</p>

              <h6 className="fw-bold">Incluye</h6>
              <ul className="list-unstyled">
                {destino.incluye.map((item, i) => (
                  <li key={i} className="mb-1">&#10003; {item}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center my-3 p-3 bg-light rounded">
                <span className="fs-4 fw-bold text-primary">${destino.precio.toLocaleString('es-CL')}</span>
                <button className="btn btn-primary btn-lg" onClick={() => {
                  const compra = { id: Date.now(), destino: destino.nombre, precio: destino.precio, ida: destino.fechaIda, vuelta: destino.fechaVuelta, fecha: new Date().toLocaleDateString('es-CL') }
                  const previas = JSON.parse(localStorage.getItem('compras') || '[]')
                  localStorage.setItem('compras', JSON.stringify([compra, ...previas]))
                  alert('Compra registrada. Te contactaremos pronto.')
                }}>
                  Comprar paquete
                </button>
              </div>

              {/* Boton para ver/acordeon de itinerario */}
              <button
                className="btn btn-outline-primary w-100 mb-3"
                onClick={() => setShowItinerario(!showItinerario)}
              >
                {showItinerario ? 'Ocultar itinerario' : 'Ver itinerario'}
              </button>

              {showItinerario && <Itinerary destinoNombre={destino.nombre} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
