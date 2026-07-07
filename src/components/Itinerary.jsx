import { useState } from 'react'
import './Itinerary.css'

const itinerarios = {
  'Paris, Francia': [
    { dia: 1, titulo: 'Llegada a Paris', descripcion: 'Recepción en el aeropuerto Charles de Gaulle y traslado al hotel. Tarde libre para explorar los alrededores.' },
    { dia: 2, titulo: 'Montmartre y Sacre-Coeur', descripcion: 'Visita al barrio bohemio de Montmartre, la Basílica del Sagrado Corazón y la Place du Tertre con sus artistas callejeros.' },
    { dia: 3, titulo: 'Museo del Louvre', descripcion: 'Recorrido guiado por el museo más famoso del mundo, incluyendo la Mona Lisa y la Venus de Milo.' },
    { dia: 4, titulo: 'Torre Eiffel y crucero', descripcion: 'Subida a la Torre Eiffel y paseo en barco por el río Sena al atardecer.' },
    { dia: 5, titulo: 'Dia libre', descripcion: 'Día libre para compras en los Campos Elíseos o visitar otros museos.' },
    { dia: 6, titulo: 'Palacio de Versalles', descripcion: 'Excursión al Palacio de Versalles con sus jardines y la Galería de los Espejos.' },
    { dia: 7, titulo: 'Regreso', descripcion: 'Desayuno en el hotel y traslado al aeropuerto. Fin del viaje.' },
  ],
  'Cusco, Peru': [
    { dia: 1, titulo: 'Llegada a Cusco', descripcion: 'Recepción en el aeropuerto y traslado al hotel. Tarde de aclimatación a la altura.' },
    { dia: 2, titulo: 'City Tour Cusco', descripcion: 'Visita a la Plaza de Armas, la Catedral, Sacsayhuamán y Qenqo.' },
    { dia: 3, titulo: 'Valle Sagrado', descripcion: 'Recorrido por Pisac, Urubamba y Ollantaytambo. Mercado artesanal.' },
    { dia: 4, titulo: 'Machu Picchu', descripcion: 'Viaje en tren a Aguas Calientes y visita guiada a Machu Picchu.' },
    { dia: 5, titulo: 'Regreso', descripcion: 'Desayuno y traslado al aeropuerto.' },
  ],
  'Tokio, Japon': [
    { dia: 1, titulo: 'Llegada a Tokio', descripcion: 'Recepción en el aeropuerto Narita y traslado al hotel.' },
    { dia: 2, titulo: 'Shibuya y Shinjuku', descripcion: 'Visita al cruce de Shibuya, el Santuario Meiji y los rascacielos de Shinjuku.' },
    { dia: 3, titulo: 'Templo Sensoji', descripcion: 'Recorrido por Asakusa, el templo Sensoji y la calle comercial Nakamise.' },
    { dia: 4, titulo: 'Monte Fuji', descripcion: 'Excursión al Monte Fuji y los lagos de la región de Hakone.' },
    { dia: 5, titulo: 'Akihabara', descripcion: 'Visita al barrio de la electrónica y el anime.' },
    { dia: 6, titulo: 'Tsukiji y Ginza', descripcion: 'Mercado de pescado Tsukiji y compras en Ginza.' },
    { dia: 7, titulo: 'Dia libre', descripcion: 'Día libre para explorar por cuenta propia.' },
    { dia: 8, titulo: 'Regreso', descripcion: 'Traslado al aeropuerto y vuelo de regreso.' },
  ],
  'Cartagena, Colombia': [
    { dia: 1, titulo: 'Llegada a Cartagena', descripcion: 'Recepción en el aeropuerto y traslado al hotel. Tarde en la playa.' },
    { dia: 2, titulo: 'Ciudad Amurallada', descripcion: 'Recorrido por las murallas, el Castillo de San Felipe y el barrio de Getsemaní.' },
    { dia: 3, titulo: 'Islas del Rosario', descripcion: 'Excursión en lancha a las Islas del Rosario con snorkel y almuerzo incluido.' },
    { dia: 4, titulo: 'Regreso', descripcion: 'Desayuno y traslado al aeropuerto.' },
  ],
  'Roma, Italia': [
    { dia: 1, titulo: 'Llegada a Roma', descripcion: 'Recepción en el aeropuerto Fiumicino y traslado al hotel.' },
    { dia: 2, titulo: 'Coliseo y Foro Romano', descripcion: 'Visita guiada al Coliseo, el Arco de Constantino y el Foro Romano.' },
    { dia: 3, titulo: 'Ciudad del Vaticano', descripcion: 'Recorrido por la Basílica de San Pedro, los Museos Vaticanos y la Capilla Sixtina.' },
    { dia: 4, titulo: 'Fontana di Trevi', descripcion: 'Visita a la Fontana di Trevi, la Plaza de España y el Panteón.' },
    { dia: 5, titulo: 'Trastevere', descripcion: 'Recorrido por el barrio de Trastevere y degustación de gastronomía romana.' },
    { dia: 6, titulo: 'Dia libre', descripcion: 'Día libre para compras o visitar la Galería Borghese.' },
    { dia: 7, titulo: 'Regreso', descripcion: 'Traslado al aeropuerto y vuelo de regreso.' },
  ],
  'Bangkok, Tailandia': [
    { dia: 1, titulo: 'Llegada a Bangkok', descripcion: 'Recepción en el aeropuerto Suvarnabhumi y traslado al hotel.' },
    { dia: 2, titulo: 'Templos reales', descripcion: 'Visita al Gran Palacio, el Templo del Buda Esmeralda y Wat Pho.' },
    { dia: 3, titulo: 'Mercados flotantes', descripcion: 'Excursión a los mercados flotantes de Damnoen Saduak.' },
    { dia: 4, titulo: 'Chinatown', descripcion: 'Recorrido por el barrio chino y degustación de comida callejera.' },
    { dia: 5, titulo: 'Ayutthaya', descripcion: 'Excursión a la antigua capital de Tailandia, Ayutthaya, declarada Patrimonio de la Humanidad.' },
    { dia: 6, titulo: 'Dia libre', descripcion: 'Día libre para compras en los centros comerciales o spa.' },
    { dia: 7, titulo: 'Regreso', descripcion: 'Traslado al aeropuerto y vuelo de regreso.' },
  ],
}

export default function Itinerary({ destinoNombre }) {
  const [diaActivo, setDiaActivo] = useState(null)
  const dias = itinerarios[destinoNombre] || []

  return (
    <div className="accordion" id="accordionItinerario">
      <h6 className="fw-bold mb-3">Itinerario del viaje</h6>
      {dias.map(d => {
        const isOpen = diaActivo === d.dia
        return (
          <div className="accordion-item" key={d.dia}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={() => setDiaActivo(isOpen ? null : d.dia)}
              >
                <strong>Dia {d.dia}:</strong> {d.titulo}
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
              <div className="accordion-body text-secondary">{d.descripcion}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
