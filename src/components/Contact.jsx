/**
 * Contact.jsx — Formulario de contacto con validación en tiempo real
 *
 * Estado:
 *   form      — Objeto con los valores actuales del formulario
 *               { nombre, email, telefono, mensaje }
 *   errors    — Objeto con mensajes de error por campo (vacío = sin errores)
 *               Ejemplo: { nombre: 'El nombre es requerido', email: '' }
 *   submitted — Booleano que se activa tras un envío exitoso para mostrar
 *               una alerta de confirmación (se oculta automáticamente tras 4s)
 *
 * Validaciones implementadas:
 *   Nombre:   requerido, mínimo 3 caracteres
 *   Email:    requerido, formato email válido (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
 *   Teléfono: requerido, solo dígitos, mínimo 9 caracteres
 *   Mensaje:  requerido, mínimo 10 caracteres
 *
 * Flujo:
 *   1. El usuario escribe en un campo → handleChange actualiza el estado form
 *      y si ese campo tenía error, lo limpia inmediatamente
 *   2. Al enviar (submit) → validate() revisa todos los campos y devuelve errores
 *   3. Si no hay errores → muestra alerta de éxito y resetea el formulario
 *   4. Si hay errores → se muestran debajo de cada campo con la clase is-invalid
 */
import { useState } from 'react'
import './Contact.css'

// Estado inicial del formulario (todos los campos vacíos)
const initialState = { nombre: '', email: '', telefono: '', mensaje: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState)     // Valores del formulario
  const [errors, setErrors] = useState({})            // Errores de validación
  const [submitted, setSubmitted] = useState(false)    // Indicador de envío exitoso

  /**
   * handleChange — Se ejecuta en cada pulsación de tecla sobre los inputs.
   *
   * Usa e.target.name para identificar qué campo se está editando (el name del input
   * coincide con la clave en el objeto form). Si el campo tenía un error previo,
   * lo limpia inmediatamente para mejorar la experiencia del usuario.
   *
   * @param {Event} e — Evento del input onChange
   */
  function handleChange(e) {
    // Actualiza solo el campo que cambió (nombre, email, telefono, mensaje)
    setForm({ ...form, [e.target.name]: e.target.value })
    // Si ese campo tenía un error, lo elimina en tiempo real
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  /**
   * validate — Valida todos los campos del formulario.
   *
   * Retorna un objeto con mensajes de error solo para los campos que fallan.
   * Si un campo es válido, simplemente no aparece en el objeto retornado.
   *
   * @returns {Object} — Objeto con errores Ej: { nombre: 'msg', email: 'msg' }
   */
  function validate() {
    const e = {}
    // Validación de nombre: no vacío, mínimo 3 caracteres (ignorando espacios)
    if (!form.nombre.trim() || form.nombre.trim().length < 3)
      e.nombre = 'El nombre debe tener al menos 3 caracteres'
    // Validación de email: formato estándar usuario@dominio.ext
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresa un email válido'
    // Validación de teléfono: solo dígitos, mínimo 9
    if (!/^\d{9,}$/.test(form.telefono))
      e.telefono = 'Ingresa al menos 9 dígitos'
    // Validación de mensaje: no vacío, mínimo 10 caracteres
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      e.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    return e
  }

  /**
   * handleSubmit — Se ejecuta al enviar el formulario.
   *
   * e.preventDefault() evita que la página se recargue.
   * Si la validación pasa, muestra una alerta de éxito por 4 segundos.
   *
   * @param {Event} e — Evento del form onSubmit
   */
  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()    // Ejecuta todas las validaciones
    setErrors(newErrors)

    // Si no hay errores (objeto vacío), el envío es exitoso
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)            // Muestra la alerta de éxito
      setForm(initialState)         // Limpia el formulario
      setTimeout(() => setSubmitted(false), 4000)  // Oculta alerta tras 4s
    }
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Contáctanos</h2>
        <p className="text-center text-secondary mb-4">
          Déjanos tus datos y te responderemos a la brevedad
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {/*
              Alerta de éxito: se muestra solo cuando submitted es true.
              Bootstrap alert-success con color verde.
            */}
            {submitted && (
              <div className="alert alert-success text-center" role="alert">
                Mensaje enviado con éxito. Te contactaremos pronto.
              </div>
            )}

            {/*
              Formulario con noValidate para que React maneje la validación
              en lugar del navegador.
            */}
            <form onSubmit={handleSubmit} noValidate>
              {/*
                Campo Nombre: is-invalid se aplica condicionalmente si hay error.
                invalid-feedback muestra el mensaje de error debajo del input.
              */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  id="nombre" name="nombre"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  value={form.nombre} onChange={handleChange}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
              </div>

              {/*
                Campo Email: type="email" da hint al navegador.
                La validación se hace con el regex en validate().
              */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email" name="email" type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={form.email} onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/*
                Campo Teléfono: type="tel" útil en móviles (muestra teclado numérico).
              */}
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  id="telefono" name="telefono" type="tel"
                  className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                  value={form.telefono} onChange={handleChange}
                />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
              </div>

              {/*
                Campo Mensaje: textarea con 4 filas de alto.
              */}
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  id="mensaje" name="mensaje" rows="4"
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  value={form.mensaje} onChange={handleChange}
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
              </div>

              {/*
                Botón de envío: w-100 para que ocupe todo el ancho.
              */}
              <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
