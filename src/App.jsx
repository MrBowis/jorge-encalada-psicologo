import './App.css'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

function App() {

  return (
    <>
      <Nav></Nav>
      <div className='h-20'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        {/* <Route path="/servicios" element={<Services />} /> */}
        {/* <Route path="/planes" element={<Plans />} /> */}
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
