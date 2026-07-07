import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Destinations from './components/Destinations'
import DestinationModal from './components/DestinationModal'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDestino, setSelectedDestino] = useState(null)

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <main>
        <Carousel />
        <Destinations
          searchTerm={searchTerm}
          onSelectDestino={setSelectedDestino}
        />
        <CTA />
      </main>
      <Footer />
      <DestinationModal
        destino={selectedDestino}
        onClose={() => setSelectedDestino(null)}
      />
    </>
  )
}
