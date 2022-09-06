// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/index.css'

// Librerías
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Componentes
import Paths from './Paths'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Paths />
  </BrowserRouter>
)
