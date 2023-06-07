import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation/index'
import Error from './pages/Error'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Style
import "./style/main.scss"


 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <div className='container'>
            <Header />
            <div className='content'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Accommodation/:id" element={<Accommodation />} />
                  <Route path="*" element={<Error />} />
              </Routes>
              </div>   
          </div>
          <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)

