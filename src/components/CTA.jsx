import { useState } from 'react'
import './CTA.css'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      const previos = JSON.parse(localStorage.getItem('suscriptores') || '[]')
      if (!previos.includes(email.trim())) {
        localStorage.setItem('suscriptores', JSON.stringify([...previos, email.trim()]))
      }
      setEnviado(true)
      setEmail('')
      setTimeout(() => setEnviado(false), 4000)
    }
  }

  return (
    <section id="cta" className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h2 className="fw-bold">¿Listo para tu proximo viaje?</h2>
        <p className="mb-4">Dejanos tu correo y te enviaremos ofertas exclusivas</p>

        {enviado && (
          <div className="alert alert-success" role="alert">
            Gracias por suscribirte. Te enviaremos las mejores ofertas.
          </div>
        )}

        <form onSubmit={handleSubmit} className="row g-2 justify-content-center">
          <div className="col-auto">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Tu correo electronico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-light btn-lg">Quiero viajar</button>
          </div>
        </form>
      </div>
    </section>
  )
}
