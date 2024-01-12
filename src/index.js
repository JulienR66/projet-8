import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import Logement from './components/Logement';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
      <Footer />      
                  </Router>
  </React.StrictMode>
);


