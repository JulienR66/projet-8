import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Logement from './components/Logement';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path='*' element={<ErrorPage />} /> 
            </Routes>
          </main>
      <Footer />      
                  </Router>
  </React.StrictMode>
);


