/**
 * Hero.jsx — Sección principal de bienvenida (Hero section)
 *
 * Props:
 *   onOpenModal — Función callback para abrir el modal de agendar cita
 *                 (enlazada desde App.jsx)
 *
 * Estructura visual:
 *   - Lado izquierdo (col-lg-6): Título principal, párrafo descriptivo y CTA
 *   - Lado derecho (col-lg-6): Imagen de portada de la clínica (/portada.jpg)
 *
 * La imagen se carga desde la carpeta public/ y se adapta al contenedor
 * con la clase img-fluid de Bootstrap.
 */
import './Hero.css'

export default function Hero({ onOpenModal }) {
  return (
    // bg-light: fondo gris claro. Sin padding vertical extra para evitar espacios innecesarios
    <section id="hero" className="bg-light">
      <div className="container">
        {/*
          row align-items-center: centra verticalmente el contenido en desktop.
          En mobile (por debajo de lg) los elementos se apilan uno sobre otro.
        */}
        <div className="row align-items-center">
          {/*
            Columna del texto: py-5 da padding vertical, pe-lg-4 da padding derecho extra en desktop.
          */}
          <div className="col-lg-6 py-5 pe-lg-4">
            <h1 className="display-4 fw-bold text-primary">
              Tu sonrisa,<br />nuestra prioridad
            </h1>
            <p className="lead text-secondary mb-4">
              Expertos en cuidado dental con tecnología de punta.
              Brindamos servicios odontológicos de calidad para toda la familia.
            </p>
            {/*
              Botón CTA (Call To Action) principal: btn-primary con tamaño grande.
              Al hacer clic abre el modal de agendar cita.
            */}
            <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
              Agenda tu cita
            </button>
          </div>

          {/*
            Columna de la imagen.
            hero-img es una clase personalizada para estilos específicos.
            img-fluid hace que la imagen sea responsiva (max-width: 100%).
            La imagen se sirve desde public/portada.jpg.
          */}
          <div className="col-lg-6 text-center hero-img">
            <img src="/portada.jpg" alt="Clínica DentaSmile" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
