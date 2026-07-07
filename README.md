# ViajeXplora

Plataforma de paquetes turisticos nacionales e internacionales.
React 19 + Vite 8 + Bootstrap 5.3

---

## Contenido

- [Tecnologias](#tecnologias)
- [Instalacion](#instalacion)
- [Estructura](#estructura)
- [Componentes](#componentes)
- [Funcionalidades](#funcionalidades)
- [API / Datos](#api--datos)
- [Capturas](#capturas)

---

## Tecnologias

| Tecnologia   | Version |
|-------------|---------|
| React       | 19      |
| Vite        | 8       |
| Bootstrap   | 5.3     |
| ESLint      | 10      |

---

## Instalacion

```bash
pnpm install
pnpm dev
```

| Comando | Accion |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Compila para produccion en dist/ |
| `pnpm preview` | Previsualiza el build |
| `pnpm lint` | Revisa el codigo con ESLint |

---

## Estructura

```
mi-landing/
├── public/
│   ├── paris.jpg         Paris, Francia
│   ├── peru.jpg          Cusco, Peru
│   ├── japon.jpg         Tokio, Japon
│   ├── colombia.avif     Cartagena, Colombia
│   ├── italia.webp       Roma, Italia
│   ├── bangkok.jpg       Bangkok, Tailandia
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Carousel.jsx / .css
│   │   ├── Destinations.jsx / .css
│   │   ├── DestinationModal.jsx / .css
│   │   ├── Itinerary.jsx / .css
│   │   ├── CTA.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── DOCUMENTACION.txt
├── index.html
└── package.json
```

---

## Componentes

### Navbar
Barra de navegacion sticky:
- Logo ViajeXplora con icono SVG
- Enlaces: Inicio, Destinos, Contacto
- Buscador de destinos en tiempo real
- Menu hamburguesa en mobile

### Carousel
Carrusel Bootstrap con 3 destinos destacados:
- Transicion fade automatica
- Controles anterior / siguiente
- Leyenda con titulo y descripcion
- Altura responsive (500px desktop, 300px mobile)

### Destinations
Grid de 6 destinos con filtros combinados:
- Busqueda por nombre (desde Navbar)
- Filtro por continente (America, Europa, Asia)
- Filtro por precio minimo y maximo
- 3 columnas en desktop, 2 en tablet, 1 en mobile
- Al hacer clic: abre modal con detalles

### DestinationModal
Modal con informacion completa del paquete:
- Imagen del destino
- Video de YouTube (iframe 16:9)
- Duracion, rating, descripcion, inclusiones
- Precio y boton "Comprar paquete"
- Acordeon de itinerario dia por dia
- Los datos de compra se guardan en localStorage

### Itinerary
Acordeon Bootstrap con itinerario detallado:
- Datos especificos para cada destino
- Dia, titulo y descripcion por jornada
- Un dia abierto a la vez (accordion)

### CTA
Seccion de suscripcion a ofertas:
- Fondo azul con formulario centrado
- Guarda el email en localStorage
- Alerta de confirmacion al suscribirse

### Footer
Pie de pagina con datos de la agencia:
- Descripcion de la marca
- Telefono, email, direccion
- Redes sociales
- Copyright con año dinamico

---

## Funcionalidades

### Busqueda y filtros
Los 6 destinos se filtran en tiempo real con 4 criterios combinados (AND):
- Nombre del destino (texto libre)
- Continente (select)
- Precio minimo (input numerico)
- Precio maximo (input numerico)

### Videos de destinos
Cada destino tiene un video de YouTube incrustado en el modal.
El video se reproduce en formato 16:9 responsive dentro del modal.

### Persistencia en localStorage

| Accion | Clave | Datos |
|--------|-------|-------|
| Comprar paquete | `compras` | Array con destino, precio, fecha e ID |
| Suscribirse | `suscriptores` | Array de emails (sin duplicados) |

Los datos persisten en el navegador aunque se cierre la pagina.
Para verlos: F12 > Application > Local Storage.

---

## API / Datos

Todos los datos son estaticos (inline en cada componente):

| Componente | Datos |
|-----------|-------|
| Carousel | 3 slides con imagen, titulo y descripcion |
| Destinations | 6 objetos con nombre, precio, imagen, video, incluye, rating |
| Itinerary | 6 arrays con dia, titulo y descripcion por destino |

No hay backend, API externa ni base de datos.

---
