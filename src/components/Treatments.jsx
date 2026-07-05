/**
 * Treatments.jsx — Sección de tratamientos en tarjetas con imagen
 *
 * Props:
 *   onOpenModal — Función callback para abrir el modal de agendar cita
 *                 (enlazada desde App.jsx para el botón "Agendar" de cada tarjeta)
 *
 * Datos:
 *   tratamientos — Array estático con 6 objetos, cada uno representa un
 *                  tratamiento dental con: id, nombre, img (ruta en /public/),
 *                  descripcion y precio.
 *                  Las imágenes fueron proporcionadas por el usuario en public/.
 *
 * Estructura visual:
 *   - Grid responsivo: 3 columnas en lg, 2 en sm, 1 en móvil (Bootstrap grid)
 *   - Cada tarjeta (card) contiene: imagen, título, descripción, precio y botón
 *   - Efecto hover: la card se eleva ligeramente (CSS en Treatments.css)
 */
import './Treatments.css'

// Array de datos estáticos de los tratamientos ofrecidos por la clínica
const tratamientos = [
  { id: 1, nombre: 'Limpieza Dental',     img: '/limpiezadental.jpg',     descripcion: 'Eliminación de sarro y placa bacteriana. Incluye pulido dental y aplicación de flúor para una sonrisa saludable.', precio: '$30' },
  { id: 2, nombre: 'Blanqueamiento',      img: '/blanqueamiento.jpg',     descripcion: 'Tratamiento estético para una sonrisa más brillante. Resultados visibles desde la primera sesión.',          precio: '$200' },
  { id: 3, nombre: 'Ortodoncia',          img: '/ortodoncia.jpg',         descripcion: 'Corrección de la posición dental con brackets tradicionales o alineadores invisibles.',                    precio: '$500' },
  { id: 4, nombre: 'Implantes Dentales',  img: '/implantes%20dentales.jpg', descripcion: 'Reemplazo de piezas dentales con implantes de titanio de alta calidad y durabilidad.',                    precio: '$800' },
  { id: 5, nombre: 'Carillas',            img: '/carillas.jpg',           descripcion: 'Mejora estética dental con carillas de porcelana ultrafinas y resistentes a manchas.',                      precio: '$400' },
  { id: 6, nombre: 'Endodoncia',          img: '/endodoncia.jpg',         descripcion: 'Tratamiento de conducto para salvar dientes dañados o infectados, eliminando el dolor.',                   precio: '$350' },
]

export default function Treatments({ onOpenModal }) {
  return (
    // id="tratamientos": usado para navegación por anclas desde el Navbar
    <section id="tratamientos" className="py-5">
      <div className="container">
        {/* Título y subtítulo de la sección */}
        <h2 className="text-center mb-2 fw-bold">Nuestros Tratamientos</h2>
        <p className="text-center text-secondary mb-4">
          Ofrecemos una amplia gama de servicios odontológicos con los mejores estándares de calidad.
        </p>

        {/*
          Grid de tarjetas: row con gap (g-4).
          Cada tratamiento ocupa 1/3 en desktop (col-lg-4) y 1/2 en tablet (col-sm-6).
          En móvil se apilan en 1 columna.
          La prop key={t.id} es requerida por React para identificar cada elemento en el map.
        */}
        <div className="row g-4">
          {tratamientos.map(t => (
            <div className="col-sm-6 col-lg-4" key={t.id}>
              {/*
                Card de Bootstrap con altura completa (h-100), sin borde y con sombra suave.
              */}
              <div className="card h-100 border-0 shadow-sm">
                {/*
                  Imagen del tratamiento desde la carpeta public/.
                  card-img-top: imagen que ocupa la parte superior de la card.
                  La altura y object-fit se controlan en Treatments.css.
                */}
                <img src={t.img} className="card-img-top" alt={t.nombre} />
                {/*
                  card-body con d-flex flex-column para que el contenido se distribuya
                  verticalmente y el botón/precio queden al fondo.
                */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{t.nombre}</h5>
                  {/*
                    flex-grow-1: la descripción ocupa el espacio disponible,
                    empujando el precio y botón hacia abajo.
                  */}
                  <p className="card-text text-secondary small flex-grow-1">{t.descripcion}</p>
                  {/*
                    Precio y botón "Agendar" en el mismo renglón (d-flex justify-content-between).
                    El botón llama a onOpenModal para abrir el modal de citas.
                  */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-4 fw-bold text-primary">{t.precio}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={onOpenModal}>
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
