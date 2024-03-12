import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Router from './router/Router';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
