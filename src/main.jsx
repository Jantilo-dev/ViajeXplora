/**
 * main.jsx — Punto de entrada de la aplicación React
 *
 * Importa los estilos globales (Bootstrap, react-datepicker y estilos propios)
 * y monta el componente raíz <App /> dentro del modo estricto de React.
 *
 * createRoot: Crea un root React en el elemento <div id="root"> del index.html
 * StrictMode: Activa verificaciones extra de desarrollo (doble render, etc.)
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importa la hoja de estilos completa de Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
// Importa la hoja de estilos del componente DatePicker
import 'react-datepicker/dist/react-datepicker.css'
// Importa estilos globales personalizados (variables CSS, reset)
import './index.css'
// Importa el componente raíz de la aplicación
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
