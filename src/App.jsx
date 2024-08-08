import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'

function App() {
  return(
  <>
  <Navigation/>
  <Cart/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/store" element={<Store />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </>
  )

}

export default App
