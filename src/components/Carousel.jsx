import './Carousel.css'

const slides = [
  { id: 1, img: '/paris.jpg', titulo: 'Paris, Francia', desc: 'La ciudad del amor te espera' },
  { id: 2, img: '/peru.jpg', titulo: 'Cusco, Peru', desc: 'Descubre la magia de los Andes' },
  { id: 3, img: '/japon.jpg', titulo: 'Tokio, Japon', desc: 'Tradicion y modernidad se encuentran' },
]

export default function Carousel() {
  return (
    <section id="hero">
      <div id="carouselDestinos" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              data-bs-target="#carouselDestinos"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((s, i) => (
            <div key={s.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
              <img src={s.img} className="d-block w-100" alt={s.titulo} />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="fw-bold">{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestinos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselDestinos" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  )
}
