import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import App from './App'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)
