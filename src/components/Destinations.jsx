import { useState } from 'react'
import './Destinations.css'

const destinos = [
  { id: 1, nombre: 'Paris, Francia',     continente: 'Europa',  precio: 1200000, img: '/paris.jpg',     duracion: '7 dias',  fechaIda: '12/10/2026', fechaVuelta: '18/10/2026', descripcion: 'Disfruta de la ciudad luz con visitas a la Torre Eiffel, el Louvre y un crucero por el Sena.', incluye: ['Vuelo ida y vuelta', 'Hotel 5 estrellas', 'Desayuno buffet', 'Tour guiado'], rating: 4.8, video: '_iZ-vMCeH9U' },
  { id: 2, nombre: 'Cusco, Peru',        continente: 'America', precio: 450000,  img: '/peru.jpg',      duracion: '5 dias',  fechaIda: '05/11/2026', fechaVuelta: '09/11/2026', descripcion: 'Explora Machu Picchu, el Valle Sagrado y la ciudad imperial de los Incas.',             incluye: ['Vuelo ida y vuelta', 'Hotel 4 estrellas', 'Desayuno', 'Tour a Machu Picchu'], rating: 4.7, video: 'PJBUryd9GDI' },
  { id: 3, nombre: 'Tokio, Japon',       continente: 'Asia',    precio: 1800000, img: '/japon.jpg',     duracion: '10 dias', fechaIda: '20/01/2027', fechaVuelta: '29/01/2027', descripcion: 'Sumergete en la cultura japonesa con visitas a Shibuya, el Templo Sensoji y Monte Fuji.',  incluye: ['Vuelo ida y vuelta', 'Hotel 4 estrellas', 'Media pension', 'Japan Rail Pass'], rating: 4.9, video: 'Ownf2_TGj1M' },
  { id: 4, nombre: 'Cartagena, Colombia', continente: 'America', precio: 600000,  img: '/colombia.avif', duracion: '4 dias',  fechaIda: '15/12/2026', fechaVuelta: '18/12/2026', descripcion: 'Playas caribeñas, ciudad amurallada y la mejor gastronomia del Caribe colombiano.',      incluye: ['Vuelo ida y vuelta', 'Hotel 5 estrellas', 'Desayuno', 'Tour en chiva'], rating: 4.6, video: 'T97KnUvod8w' },
  { id: 5, nombre: 'Roma, Italia',       continente: 'Europa',  precio: 1500000, img: '/italia.webp',   duracion: '8 dias',  fechaIda: '08/03/2027', fechaVuelta: '15/03/2027', descripcion: 'El Coliseo, el Vaticano y la Fontana di Trevi te esperan en la ciudad eterna.',          incluye: ['Vuelo ida y vuelta', 'Hotel 4 estrellas', 'Desayuno', 'Entradas a museos'], rating: 4.8, video: '1-bLGdChz3Q' },
  { id: 6, nombre: 'Bangkok, Tailandia',  continente: 'Asia',    precio: 950000,  img: '/bangkok.jpg',   duracion: '7 dias',  fechaIda: '03/05/2027', fechaVuelta: '09/05/2027', descripcion: 'Templos dorados, mercados flotantes y la mejor comida callejera del sudeste asiatico.',   incluye: ['Vuelo ida y vuelta', 'Hotel 5 estrellas', 'Desayuno', 'Tour en barco'], rating: 4.7, video: 'TyJVYbhDH5U' },
]

const continentes = ['Todos', 'America', 'Europa', 'Asia']

export default function Destinations({ searchTerm, onSelectDestino }) {
  const [filtroContinente, setFiltroContinente] = useState('Todos')
  const [precioMin, setPrecioMin] = useState('')
  const [precioMax, setPrecioMax] = useState('')

  const filtrados = destinos.filter(d => {
    const porNombre = d.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    const porContinente = filtroContinente === 'Todos' || d.continente === filtroContinente
    const porPrecioMin = !precioMin || d.precio >= Number(precioMin)
    const porPrecioMax = !precioMax || d.precio <= Number(precioMax)
    return porNombre && porContinente && porPrecioMin && porPrecioMax
  })

  return (
    <section id="destinos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Destinos</h2>
        <p className="text-center text-secondary mb-4">Encuentra el viaje de tus sueños</p>

        {/* Filtros */}
        <div className="row g-2 mb-4 justify-content-center">
          <div className="col-auto">
            <select className="form-select" value={filtroContinente} onChange={e => setFiltroContinente(e.target.value)}>
              {continentes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="col-auto">
            <input type="number" className="form-control" placeholder="Precio min" value={precioMin} onChange={e => setPrecioMin(e.target.value)} />
          </div>
          <div className="col-auto">
            <input type="number" className="form-control" placeholder="Precio max" value={precioMax} onChange={e => setPrecioMax(e.target.value)} />
          </div>
        </div>

        {/* Grid de destinos */}
        <div className="row g-4">
          {filtrados.map(d => (
            <div className="col-sm-6 col-lg-4" key={d.id}>
              <div className="card h-100 border-0 shadow-sm cursor-pointer" onClick={() => onSelectDestino(d)}>
                <img src={d.img} className="card-img-top" alt={d.nombre} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold mb-0">{d.nombre}</h5>
                    <span className="badge bg-warning text-dark">{d.rating}</span>
                  </div>
                  <small className="text-secondary mb-1">{d.duracion} · {d.continente}</small>
                  <small className="text-secondary d-block mb-1">{d.fechaIda} → {d.fechaVuelta}</small>
                  <p className="card-text text-secondary small flex-grow-1 mt-1">{d.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fs-5 fw-bold text-primary">${d.precio.toLocaleString('es-CL')}</span>
                    <span className="btn btn-outline-primary btn-sm">Ver detalle</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtrados.length === 0 && (
          <p className="text-center text-secondary mt-4">No se encontraron destinos con esos filtros.</p>
        )}
      </div>
    </section>
  )
}
