import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import App from './App'
import Home from './pages/Home/Index'
import Movies from './pages/Movies/Index'
import Series from './pages/Series/Index'

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
