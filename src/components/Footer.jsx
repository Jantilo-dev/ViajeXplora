/**
 * Footer.jsx — Pie de página con información de contacto
 *
 * Renderiza un footer oscuro (bg-dark) con:
 *   - Columna 1: Nombre de la clínica y descripción breve
 *   - Columna 2: Datos de contacto (teléfono, email, dirección)
 *   - Columna 3: Horarios de atención
 *   - Línea divisoria y copyright con el año actual
 *
 * new Date().getFullYear() se usa para que el año se actualice automáticamente.
 */
import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        {/*
          Row con 3 columnas en desktop (text-md-start) y centrado en móvil (text-center).
        */}
        <div className="row text-center text-md-start">
          {/*
            Columna 1: Marca y descripción de la clínica
          */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">DentaSmile</h6>
            <small className="text-secondary">
              Tu clínica dental de confianza. Cuidamos tu sonrisa con excelencia y calidez.
            </small>
          </div>

          {/*
            Columna 2: Información de contacto
            d-block: cada elemento en su propia línea
          */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">Contacto</h6>
            <small className="text-secondary d-block">📞 +56 9 1234 5678</small>
            <small className="text-secondary d-block">✉️ contacto@dentasmile.cl</small>
            <small className="text-secondary d-block">📍 Av. Principal 123, Santiago</small>
          </div>

          {/*
            Columna 3: Horarios de atención
          */}
          <div className="col-md-4">
            <h6 className="fw-bold">Horarios</h6>
            <small className="text-secondary d-block">Lun - Vie: 9:00 - 18:00</small>
            <small className="text-secondary d-block">Sáb: 9:00 - 13:00</small>
          </div>
        </div>

        {/*
          Línea separadora con color semitransparente (clase border-secondary).
          La opacidad se reduce aún más con CSS personalizado (Footer.css).
        */}
        <hr className="border-secondary my-3" />

        {/*
          Copyright: el año se calcula dinámicamente con getFullYear().
        */}
        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} DentaSmile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
