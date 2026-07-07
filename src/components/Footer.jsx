import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">ViajeXplora</h6>
            <small className="text-secondary">
              Tu agencia de viajes de confianza. Exploramos el mundo para que vivas experiencias inolvidables.
            </small>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">Contacto</h6>
            <small className="text-secondary d-block">+56 9 8765 4321</small>
            <small className="text-secondary d-block">contacto@viajexplora.cl</small>
            <small className="text-secondary d-block">Av. Siempre Viva 742, Santiago</small>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Redes Sociales</h6>
            <small className="text-secondary d-block">Facebook: /ViajeXplora</small>
            <small className="text-secondary d-block">Instagram: @viajexplora</small>
            <small className="text-secondary d-block">Twitter: @ViajeXplora</small>
          </div>
        </div>
        <hr className="border-secondary my-3" />
        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} ViajeXplora. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
