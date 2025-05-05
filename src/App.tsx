import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CasosEstudio, Web, Nosotros,Contacto, Home, Mobile } from './pages'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CasosEstudio" element={<CasosEstudio />} />
        <Route path='/Web' element={<Web/>}></Route>
        <Route path='/Mobile' element={<Mobile/>}></Route>
        <Route path='/Nosotros' element={<Nosotros/>}></Route>
        <Route path='/Contacto' element={<Contacto/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
