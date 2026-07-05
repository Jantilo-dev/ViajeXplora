/**
 * AppointmentModal.jsx — Modal para agendar citas con calendario visual
 *
 * Props:
 *   show    — Booleano que controla si el modal se renderiza o no
 *   onClose — Función callback para cerrar el modal (setShowModal(false) en App)
 *
 * Estado:
 *   form   — Objeto con datos del formulario: { nombre, email, telefono, fecha, hora, tratamiento }
 *            fecha es un objeto Date (manejado por react-datepicker)
 *   errors — Objeto con errores de validación por campo
 *
 * Almacenamiento:
 *   Las citas se guardan en localStorage bajo la clave 'citas'.
 *   Solo se almacenan al confirmar; no se muestran en pantalla.
 *
 * Validaciones:
 *   Nombre:       requerido
 *   Email:        requerido, formato válido
 *   Teléfono:     requerido, mínimo 9 dígitos
 *   Fecha:        requerida (DatePicker)
 *   Hora:         requerida (select)
 *   Tratamiento:  requerido (select)
 */
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import './AppointmentModal.css'

// Opciones estáticas para selects del formulario
const tratamientos = ['Limpieza Dental', 'Blanqueamiento', 'Ortodoncia', 'Implantes Dentales', 'Carillas', 'Endodoncia']
const horas = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

// Estado inicial del formulario de agendar cita
const initialState = { nombre: '', email: '', telefono: '', fecha: null, hora: '', tratamiento: '' }

export default function AppointmentModal({ show, onClose }) {
  const [form, setForm] = useState(initialState)   // Campos del formulario
  const [errors, setErrors] = useState({})          // Errores de validación

  /**
   * Efecto: Bloquea el scroll del body cuando el modal está abierto.
   * En el return se limpia el estilo al cerrarse el modal o desmontarse el componente.
   */
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'   // Oculta scrollbar del body
    }
    return () => {
      document.body.style.overflow = ''          // Restaura scrollbar al cerrar
    }
  }, [show])

  /**
   * handleChange — Maneja cambios en inputs y selects del formulario.
   *
   * Usa e.target.name como clave dinámica para actualizar el campo correcto.
   * Si el campo editado tenía un error, lo limpia inmediatamente (feedback en tiempo real).
   *
   * @param {Event} e — Evento onChange del input/select
   */
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })   // Limpia error del campo editado
    }
  }

  /**
   * validate — Valida todos los campos obligatorios del formulario.
   *
   * Retorna un objeto con mensajes de error solo para los campos inválidos.
   * Fecha se valida verificando que no sea null (el DatePicker maneja objetos Date).
   *
   * @returns {Object} — Errores de validación Ej: { nombre: '...', email: '...' }
   */
  function validate() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingresa un email válido'
    if (!/^\d{9,}$/.test(form.telefono)) e.telefono = 'Ingresa al menos 9 dígitos'
    if (!form.fecha) e.fecha = 'Selecciona una fecha'
    if (!form.hora) e.hora = 'Selecciona una hora'
    if (!form.tratamiento) e.tratamiento = 'Selecciona un tratamiento'
    return e
  }

  /**
   * handleSubmit — Procesa el envío del formulario de cita.
   *
   * e.preventDefault(): evita recarga de página.
   * Si la validación es exitosa:
   *   1. Crea un objeto nuevaCita combinando form + id único + fecha formateada
   *   2. Guarda la cita en localStorage bajo la clave 'citas'
   *   3. Resetea el formulario a su estado inicial
   *   4. Limpia errores
   *
   * @param {Event} e — Evento onSubmit del form
   */
  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const nuevaCita = {
        ...form,
        id: Date.now(),
        fecha: form.fecha.toLocaleDateString('es-CL'),
      }
      // Lee citas existentes desde localStorage, agrega la nueva y guarda
      const citasPrevias = JSON.parse(localStorage.getItem('citas') || '[]')
      localStorage.setItem('citas', JSON.stringify([nuevaCita, ...citasPrevias]))
      setForm(initialState)
      setErrors({})
    }
  }

  // Si show es false, no renderiza nada (considerar animación fade)
  if (!show) return null

  return (
    <>
      {/*
        Backdrop (fondo semitransparente): al hacer clic se cierra el modal.
        fade show: clases de Bootstrap para la animación de aparición.
      */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      {/*
        Modal principal: d-block lo fuerza visible, fade show para animación.
        modal-lg: tamaño grande, modal-dialog-scrollable: scroll si el contenido es largo.
      */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {/*
              Cabecera del modal: título y botón de cerrar (btn-close).
            */}
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Agendar Cita</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
            </div>

            <div className="modal-body">
              {/*
                Formulario de agendamiento: 6 campos en 2 columnas (row g-3).
                Cada campo usa clases condicionales is-invalid para mostrar errores.
              */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/*
                    Campo: Nombre completo
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Nombre completo</label>
                    <input name="nombre" className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} value={form.nombre} onChange={handleChange} />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                  </div>

                  {/*
                    Campo: Email (type="email")
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={form.email} onChange={handleChange} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/*
                    Campo: Teléfono (type="tel")
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Teléfono</label>
                    <input name="telefono" type="tel" className={`form-control ${errors.telefono ? 'is-invalid' : ''}`} value={form.telefono} onChange={handleChange} />
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                  </div>

                  {/*
                    Campo: Fecha con DatePicker visual (react-datepicker).
                    onChange recibe el objeto Date seleccionado y también limpia
                    el error del campo fecha si existía.
                    minDate={new Date()} evita seleccionar fechas pasadas.
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Fecha</label>
                    <DatePicker
                      selected={form.fecha}
                      onChange={date => {
                        setForm({ ...form, fecha: date })
                        if (errors.fecha) setErrors({ ...errors, fecha: '' })
                      }}
                      className={`form-control ${errors.fecha ? 'is-invalid' : ''}`}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}                        // No permitir fechas pasadas
                      placeholderText="Selecciona una fecha"
                    />
                    {errors.fecha && <div className="invalid-feedback d-block">{errors.fecha}</div>}
                  </div>

                  {/*
                    Campo: Hora (select con horarios disponibles)
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Hora</label>
                    <select name="hora" className={`form-select ${errors.hora ? 'is-invalid' : ''}`} value={form.hora} onChange={handleChange}>
                      <option value="">Seleccionar horario</option>
                      {horas.map(h => <option key={h} value={h}>{h}</option>)}
                    </select>
                    {errors.hora && <div className="invalid-feedback">{errors.hora}</div>}
                  </div>

                  {/*
                    Campo: Tratamiento (select con los tratamientos disponibles)
                  */}
                  <div className="col-md-6">
                    <label className="form-label">Tratamiento</label>
                    <select name="tratamiento" className={`form-select ${errors.tratamiento ? 'is-invalid' : ''}`} value={form.tratamiento} onChange={handleChange}>
                      <option value="">Seleccionar tratamiento</option>
                      {tratamientos.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.tratamiento && <div className="invalid-feedback">{errors.tratamiento}</div>}
                  </div>
                </div>

                {/*
                  Botón de confirmación: ocupa todo el ancho (w-100).
                */}
                <button type="submit" className="btn btn-primary mt-4 w-100">Confirmar Cita</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
