import './App.css'
import Home from './screens/Home'
import PaginaCep from './screens/PaginaCep'
import Pgcachorro from './screens/Pgcachorro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path= "/buscar-cep" element={<PaginaCep/>} />
          <Route path= "/fotos-cachorros" element={<Pgcachorro/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
